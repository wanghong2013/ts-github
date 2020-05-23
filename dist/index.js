"use strict";
/*
 * @Author: your name
 * @Date: 2020-05-17 21:13:54
 * @LastEditTime: 2020-05-23 12:26:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-github/src/index.ts
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubApi_1 = require("./GitHubApi");
var svc = new GitHubApi_1.GitHubApiService();
svc.getUserInfo("wanghong2013", function (user) {
    console.log(user);
    console.log("name:" + user.login);
});
svc.getRepos("wanghong2013", function (repos) {
    console.log(repos);
});
