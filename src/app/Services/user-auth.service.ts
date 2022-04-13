import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLoggedSubject: BehaviorSubject<boolean>;//*هنا بيهافيور ساب عشان اديله الداتا البدائية وهيبعتهالي قبل اي حاجة
  constructor() { this.isLoggedSubject = new BehaviorSubject<boolean>(this.isUserLogged) }

  Login(userName: string, password: string) {
    // call login API, and get access token
    let userToken = '12345';
    localStorage.setItem("token", userToken)
    this.isLoggedSubject.next(true);
  }
  Logout() {
    localStorage.removeItem("token");
    this.isLoggedSubject.next(false);
  }

  get isUserLogged(): boolean {
    return (localStorage.getItem("token")) ? true : false;
  }

  getLoggedStatus(): Observable<boolean> {
    //*هنا لازم اخليه اوبزيرفابل عشان محدش يقدر يعدل عليه وهو رايح للهيدر كومب ويغير النيكست وكدة
    //*عشان يشوفه كاوبزيرفير مش كسابجكت
    return this.isLoggedSubject.asObservable();
  }
}
