/*
 * @Author: your name
 * @Date: 2020-05-17 21:13:54
 * @LastEditTime: 2020-05-23 12:26:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-github/src/index.ts
 */ 

import {GitHubApiService} from './GitHubApi'
import {User} from "./User";
import {Repo} from "./Repo";

let svc:GitHubApiService = new GitHubApiService();

svc.getUserInfo("wanghong2013",(user:User)=>{
    console.log(user);
    console.log("name:"+ user.login)
})


svc.getRepos("wanghong2013", (repos: Repo[]) => {
    console.log(repos);
  })