import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  storeInfo: StoreData;
  //!في نفس الوقت لو عندي حجات كتيرة معمولها صبصكرايب فالأحسن نخلي الصبصكربشن مصفوفة
  //private subscription!: Subscription;
  private subscriptions!: Subscription[];

  //*عشان سيرفيس لازم نعملها إنجيكشن
  constructor(private promoAds: PromotionAdsService) {
    this.storeInfo = new StoreData('ITI Store', 'https://picsum,photos/350/200', ['Cairo', 'Alex', 'Qena', 'Assuit'])
  }


  ngOnInit(): void {

    //#region First Observable Way (1)
    // let observer = {
    //   next: (data: string) => {
    //     console.log(data);
    //   },
    //   error: (err: string) => {
    //     console.log(err);
    //   },
    //   complete: () => { console.log("Ads Finished"); }
    // }

    // //!هنا الصبصكريب ممكن تاخد فانكشن بس الأفضل والحل التاني انها تاخد أوبجكت
    // let adsSubscription = this.promoAds.getScheduledAds(2).subscribe(observer)//*ممكن نحط الأوبجكت بال3 مفاتيح هنا علطول
    // this.subscriptions.push(adsSubscription)

    // //!هنا هيسيب الكود اللي فوق يشتغل ولما ييجي هنا هيعمل أنصبصكريب وده مكان غلط لانه كود أنسينكرونس
    // // subscription.unsubscribe(); //* Manualy unsubscripe.
    //#endregion

    //#region Secon Observable Way (2)
    // let sub = this.promoAds.getSerialAds().subscribe(ad => {
    //   console.log(ad);
    // });
    // this.subscriptions.push(sub);
    //#endregion

    //#region Filtering on Observables (3)
    let observer = {
      next: (data: string) => {
        console.log(data);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => { console.log("Ads Finished"); }
    }

    //* Pipe here make me before subscripe the observable i can make on him bunch of operators
    //*and return a new observable:
    let FilteredObs = this.promoAds.getScheduledAds(2).pipe(
      filter(ad => ad.includes("friday"))
      , map(ad => "Ad: " + ad)
    ); //! and that what we call Functional Programming(perform tasks with functions filter().map().first()...etc)

    let adsSubscription = FilteredObs.subscribe(observer);
    this.subscriptions.push(adsSubscription)
    //#endregion
  }

  ngOnDestroy(): void {
    //!هنا لازم لازم نعمل أنصبصكرب عشان لما اروح لكومبوننت تاني متفضلش الحاجة شغالة معايا في الباكجراوند
    // this.subscription.unsubscribe();

    for (let sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }

}
