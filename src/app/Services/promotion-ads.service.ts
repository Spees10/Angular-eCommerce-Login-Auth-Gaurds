import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList: string[];
  constructor() {
    this.adsList = ["Big Discounts", "Sales Up to 50%", "Check our white friday", "Special white friday Offer up to 70%"]
  }

  getScheduledAds(intervalInSeconds: number): Observable<string> {
    return new Observable<string>((observer) => {  // الأوبسيرفر ده جينيريك علي حسب نوع الداتا اللي هتتبعت

      //*observer.next();//بنبه الأوبسيرف ده إن في حاجة جديدة ببعتها فهنا نيكست مستنية  داتا من نوع سترينج
      //!next here is the person who tells the subscriper that there is a new update to change.
      //*observer.error();//في ايرور حصل
      //*observer.complete();//بنبهه إن الأوبسيرفر بتاعي خلص ومش هيبعت حاجة تاني

      let counter = 0;
      let adsTimer = setInterval(() => {
        if (counter == this.adsList.length) observer.complete();
        if (this.adsList[counter] == "") observer.error("Error Empty ad. in index:" + +(counter));
        //*لو حصل الأيرور فالأوبسيرفر هيقف ومش هيكمل

        observer.next(this.adsList[counter]); //! كدة كل واحد عامل صبصكريب علي الاوبسيرف ده هيتنبه ان في اعلان جديد
        counter++;
      }, intervalInSeconds * 1000);

      //!هنا الفانكشن بتاعت الإنتيرفال هتفضل شغالة حتي لو عرض الإعلانات خلص وده ملوش لازمة
      return { //*فلازم نعمل أنصبصكرب عشان نوقف المشكلة ديتي
        unsubscribe() {
          //will be called:
          //1-Error.
          //2-Complete.
          //3-unsubscripe.
          clearInterval(adsTimer);
          console.log("in Observer Unsubscripe. . . .");
        }
      }
    });
  }

  getSerialAds(): Observable<string> {
    // return of("ad1", "ad2", "ad3"); // take list of items
    return from(this.adsList); // take an array
  }
}
