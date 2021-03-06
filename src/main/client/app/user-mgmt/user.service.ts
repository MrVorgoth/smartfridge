import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Cookie} from "../general/cookies.service";
import {toPromise} from "rxjs/operator/toPromise";

@Injectable()
export class UserService {
  private users: User[] = [];
  private requiedProducts: RequiedProducts[] = [];
  private sequencer: number = 1;
  private isAuthorized: boolean = false;
  private whoIsLoggedIn: string = "test";
  private headers = new Headers({'Access-Control-Allow-Origin': '*'});
  private postHeaders = new Headers({'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'});

  private getUserUrl: string = "http://localhost:8080/user/all";
  private getRequiedProductsUrl: string = "http://localhost:8080/requiedProduct/all";
  private createUserUrl: string = "http://localhost:8080/user/create";
  private searchUserUrl: string = "http://localhost:8080/user/search";
  private validateUserUrl: string = "http://localhost:8080/user/validate";

  constructor(private http: Http, private router:Router/*, private cookies: Cookie*/) {
  }

  getAllUsers(): Promise<User[]> {
    return this.http.get(this.getUserUrl, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  getAllRequiedProducts(): Promise<RequiedProducts[]> {
    return this.http.get(this.getRequiedProductsUrl, {headers: this.headers})
    .toPromise()
     .then(response => response.json() as RequiedProducts[])
     .catch(this.handleError);
  }

  getAuthorizedStatus() : boolean {
    return this.isAuthorized;
  }

  getwhoIsLoggedIn() : string {
    return this.whoIsLoggedIn;
  }

  setwhoIsLoggedIn(login : string) : void {
    this.whoIsLoggedIn = login;
  }

  createUser(user: User): Promise<any> {
    console.log(JSON.stringify(user));
    return this.http.post(this.createUserUrl, JSON.stringify(user), {headers: this.postHeaders})
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  searchUser(login: string): Promise<User[]> {
    let params = new URLSearchParams();
    params.append("login", login);

    return this.http.get(this.searchUserUrl, {headers: this.headers, search: params})
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  create(): void {
    let args = {};
    args['login'] = 'loginTest';
    args['password'] = 'passwordTest';
    args['name'] = 'nameTest';
    args['surname'] = 'surnameTest';

    this.http.get(this.createUserUrl, {headers: this.headers});
  }

  login(data : User): void {
    this.http.post(this.validateUserUrl, JSON.stringify(data), {headers: this.postHeaders})
      .toPromise()
      .then(response => {
        if (response.status == 200) {
          this.isAuthorized = true;

          this.setwhoIsLoggedIn(JSON.stringify(data.login));
          //console.log("Kto sie zalogowal - " + this.getwhoIsLoggedIn());
          Cookie.set("cookie1", this.getwhoIsLoggedIn());
          this.router.navigate(['/homePage']);
        }
      }).catch(() => {
      console.log('Nieprawidlowe dane logowania');
      //this.router.navigate(['/login']);
      //window.location.href = "/login";
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  };
}

export class User {
  login: String;
  password: String;
  name: String;
  surname: String;
}

export class RequiedProducts {
  quantity: number;
}
