export class User {
    public name: string;
    public email: string;
    public password: string;

    constructor(login: string, email: string, password: string){
        this.name = login;
        this.email = email;
        this.password = password;
    }
}