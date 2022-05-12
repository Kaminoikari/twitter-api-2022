const { Tweet, User, Like } = require('../models')
const { dummyUser } = require('../dummyUser.js')



const tweetController = {

  getTweets: (req, res, next) => {

    // 為節省重新重資料庫拉資料的時間，getTweets直接用資料的likeCount和replyCount做數字顯示。但為確保數字正確。會在讀取單筆tweet資料的controller中，重拉資料並計數
    Tweet.findAll({
      order: [
        ['createdAt', 'DESC']
      ],
      raw: true
    })
      .then(tweets => {
        //尚未與登入功能結合，尚無法取得req.user資料，以dummyUser假資料暫代
        const likedTweetId = dummyUser.LikedTweets ? dummyUser.LikedTweets.map(t => t.id) : []
        const data = tweets.map(tweet => ({
          ...tweet,
          isLiked: likedTweetId.some(item => item === tweet.id)
        }))

        // res.status(200).json({ status: 'success', data }) 這樣寫測試過不了
        res.status(200).json(data)
      })
      .catch(err => next(err))
  },



}

module.exports = tweetController