export class User{
    login:string;
    fullNAME:string;
    reportCount:string;
    followers:string;

    constructor(userResponse:any) {
        this.login = userResponse.login;
        this.fullNAME =userResponse.name;
        this.reportCount = userResponse.public_repos;
        this.followers = userResponse.following;
    }

}
