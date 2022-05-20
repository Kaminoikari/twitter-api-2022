# Simple Twitter API

Simple Twitter是一個復刻twitter的社群平台，使用者可以追蹤其他使用者、發布推文、對推文進行回覆及按下喜歡。 

## Live Demo
[連結](https://ansticefish.github.io/simple-twitter-front-end/)


DEMO 帳號

|    role    | account                | password |
| ---------- | -------                | -------- |
| user       |   user1@example.com    | 12346578 |
| admin      |    root@example.com    | 12345678 |
## 前端repo

## 安裝流程
此安裝流程為本地端(local)使用。

### 專案建立
1. 打開終端機(terminal)，git clone 此專案至本機電腦

```
git clone https://github.com/AngelaC123/twitter-api-2020.git
```

2. 進入至專案資料夾

```
cd twitter-api-2020
```

3. 安裝 npm 相關套件

```
npm install
```

4. 新增 .env
為了確保使用順利，請新增.env檔，並按照.env.example檔設定
```
JWT_SECRET=SKIP
IMGUR_CLIENT_ID=SKIP
```

5. 修改 MySQL 相關資訊
打開 ./config/config.json，更改development、test的password(請確保與MySQL Workbench相同)

```
  "development": {
    "username": "root",
    "password": "<your_mysql_workbench_password>",
    "database": "ac_twitter_workspace",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "<your_mysql_workbench_password>",
    "database": "ac_twitter_workspace_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false
  },
```

6. 建立MySQL資料庫
打開MySQL Workbench，並在登入後，新增SQL File後，於內文輸入

```
drop database if exists ac_twitter_workspace;
create database ac_twitter_workspace;
drop database if exists ac_twitter_workspace_test;
create database ac_twitter_workspace_test;
```

即完成建立ac_twitter_workspace 以及 ac_twitter_workspace_test

7. 建立資料庫table

```
npx sequelize db:migrate
```

8. 載入種子資料

```
npx sequelize db:seed:all
```

9. 啟動專案

```
nodemon app.js
```

10. 當終端機(terminal)出現以下字樣，代表執行成功

```
Example app is listening on port: {指定port}
```

### 自動化測試

- 進行全部自動化測試，包含Model、Request測試檔
```
NODE_ENV=test
npm run test
```
- 進行單一自動化測試，可選擇要測試的檔案
```
NODE_ENV=test
npx mocha test/{{ Model or Request }}/{{Model or Request}}.spec.js --exit
```

## 產品功能
- 使用者可註冊/登入帳戶
- 使用者可發佈推文及回覆推文
- 使用者可喜歡本人及其他使用者的推文
- 使用者可追蹤其他使用者
- 使用者可查看其他使用人個人頁面、追蹤者名單、及跟隨名單
- 使用者可查看Top 10最多跟隨者的使用者
- 後台可管理所有社群狀況(刪除Tweet、瀏覽使用者名單)

## 開發前置需求
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [MySQL](https://www.mysql.com/)
- [MySQL Workbench](https://dev.mysql.com/downloads/mysql/)

## 開發前置套件
"bcrypt-nodejs": "0.0.3",
"bcryptjs": "^2.4.3",
"body-parser": "^1.18.3",
"chai": "^4.2.0",
"connect-flash": "^0.1.1",
"cors": "^2.8.5",
"dotenv": "^10.0.0",
"express": "^4.16.4",
"express-session": "^1.15.6",
"faker": "^4.1.0",
"imgur": "^1.0.2",
"jsonwebtoken": "^8.5.1",
"method-override": "^3.0.0",
"mocha": "^6.0.2",
"multer": "^1.4.3",
"mysql2": "^1.6.4",
"passport": "^0.4.0",
"passport-jwt": "^4.0.0",
"passport-local": "^1.0.0",
"sequelize": "^6.18.0",
"sequelize-cli": "^5.5.0",
"sinon": "^10.0.0",
"sinon-chai": "^3.3.0"

## 開發人員
|    name    | account                |
| ---------- | -------                | 
| Angela       |  https://github.com/AngelaC123 |
| Charles | https://github.com/Kaminoikari |

