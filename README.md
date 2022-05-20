# twitter-api-2022

Simple Twitter API
此專案提供API給前端，前端畫面REPO 請點我

API文件：https://simpletwitterapi.docs.apiary.io/#

LIVE DEMO: https://denise97220.github.io/simple-twitter-vue/#/login

關於專案
從本地開始
請確保你有基本環境以及MySQL資料庫 以防版本差異問題，請設置

SET @@global.sql_mode="STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION";
(主要移除這項設定 ONLY_FULL_GROUP_BY)

開始之前也務必npm run install

建置資料(小shortcut!)
npm run setup
運行
npm run dev
測試，開發環境請切換到test RUN TEST
npm run test
功能
使用者能創建帳戶登入
使用者能新增貼文
使用者能進行互動(回覆、追蹤、喜歡)
使用者可以即時聊天
管理者可瀏覽社群狀況(所有貼文、用戶概覽)
使用工具
開發/運行環境
Node.js (10.15.0)
Express (4.16.4)
nodemon (2.0.7)
資料庫、資料處裡相關
[bcryptjs (2.4.3)]
[mysql2 (2.2.5)]
sequelize (6.3.5)
[sequelize-cli (6.2.0)]
[passport (0.4.0)] Local(1.0.0) & jwt (4.0.0)
[jsonwebtoken (8.5.1)]
[dotenv (10.0.0)]
Chat Room
[socket.io (4.1.3)]
其他
[cors (2.8.5)]
[faker (4.1.0)]
[cross-env (7.0.3)]
[faker (4.1.0)]
[imgur (2.0.0-next.6)]
[multer (1.4.2)]
