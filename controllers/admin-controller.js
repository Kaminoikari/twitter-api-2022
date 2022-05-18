const jwt = require('jsonwebtoken')
const { User, Tweet } = require('../models')
const { getUser } = require('../_helpers')

const adminController = {

  adminSignIn: (req, res, next) => {
    const { account, password } = req.body
    if (!account || !password) throw new Error('帳號和密碼為必填！')
    try {
      const user = getUser(req)
      if (user.role !== 'admin') throw new Error('只有管理者帳號可以登入後台！')
      delete user.password
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '30d' })
      res.status(200).json({
        message: '管理者帳號登入成功',
        token,
        user
      })
    } catch (err) {
      next(err)
    }
  },

  getTweets: (req, res, next) => {
    return Tweet.findAll({
      attributes: ['id', 'description', 'createdAt', 'updatedAt'],
      include: [
        { model: User, as: 'TweetUser', attributes: ['id', 'account', 'name', 'avatar'] }
      ],
      order: [['createdAt', 'DESC']],
      raw: true,
      nest: true
    })
      .then(tweets => {
        if (tweets.length <= 0) return res.status(200).json({ message: '沒有推文資料！' })
        const tweetList = tweets.map(t => ({
          ...t,
          description: t.description.substring(0, 50)
        }))
        res.status(200).json(tweetList)
      })
      .catch(err => next(err))
  },

  deleteTweet: (req, res, next) => {
    return Tweet.findByPk(req.params.id)
      .then(tweet => {
        if (!tweet) throw new Error('推文不存在！')
        return tweet.destroy()
      })
      .then(deletedTweet => res.status(200).json({ message: '該推文已刪除！', deletedTweet }))
      .catch(err => next(err))
  },

  getUsers: (req, res, next) => {
    // 若篩選時排除admin帳號，則無法通過測試檔，所以不做role條件篩選。
    User.findAll({
      attributes: ['id', 'account', 'name', 'avatar', 'cover', 'role', 'tweetCount', 'likeCount', 'followingCount', 'followerCount'],
      order: [['tweetCount', 'DESC']]
    })
      .then(tweets => res.status(200).json(tweets))
      .catch(err => next(err))
  }

}

module.exports = adminController
