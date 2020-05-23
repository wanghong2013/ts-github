/*
 * @Author: your name
 * @Date: 2020-05-17 21:41:43
 * @LastEditTime: 2020-05-23 12:31:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-github/src/GitHubApi.ts
 */ 
import * as request from 'request';
import {User} from "./User";
import {Repo} from "./Repo";

const options = {
    headers: {
        'User-Agent': 'request'
    },
    json:true
};

export class GitHubApiService{
    getUserInfo(userName:string,cb:(user:User)=>any){
        request.get(`https://api.github.com/users/`+ userName,options,(error:any,response:any,body:any)=>{
            // console.log(body);
            // let user = new User(JSON.parse(body));
            let user = new User(body)
            // console.log(user,'user')
            cb(user);
        })

    }
    getRepos(userName: string, cb: (repos: Repo[]) => any) {
        request.get("https://api.github.com/users/" + userName + "/repos", options, (error: any, response: any, body: any) => {
       
            // console.log(typeof body);
            // let data = JSON.parse(body);
            
          let repos: Repo[] = body.map((repo: any) => new Repo(repo));
          cb(repos);
        })
      }
}
