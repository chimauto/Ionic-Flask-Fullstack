import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import {Food} from '../../models/food.model';
import {FoodProvider} from '../../providers/food/food'
import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result: any = {};
  essay: any = {};
  chimmy: any = {};
  public food$: Observable<Food>;
  postdata: any = {};
  salsa: Observable<any>;
  mamba: Observable<any>;
  unda: Observable<any>;
  public data2 : string;
  public data3 : string;
  public data4 : string;
  public data5 : string;
  public data6 : string;
  constructor(private FoodProvider: FoodProvider, public navCtrl: NavController,public httpClient: HttpClient,public http: HttpClient) {

  }
  showFood(order:string){
    this.food$ = this.FoodProvider.getFood(order);
  }
  save(){
    let url = 'http://3589765ca901.ngrok.io/insert'
    let postdataset = new FormData();
    postdataset.append('User',this.data2);
    postdataset.append('Recipe',this.data3);
    postdataset.append('Price',this.data4);
    postdataset.append('CookingTime',this.data5);
    postdataset.append('Calories',this.data6);

    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
        if(call.status == 200){
          alert(call.msg);
        }else{
          alert(call.msg);
        }
    });
  }
  getMenu(){
    var url = 'http://3589765ca901.ngrok.io/yet';
    this.salsa = this.http.get(url);
    this.salsa.subscribe(salsa =>{
      this.result = salsa;
    });
  }
  getMax(){
    var maxurl = 'http://3589765ca901.ngrok.io/findmax';
    this.mamba = this.http.get(maxurl);
    this.mamba.subscribe(mamba =>{
      this.essay = mamba;
    });
  }
  showTotal(){
    var totalurl = 'http://3589765ca901.ngrok.io/get';
    this.unda = this.http.get(totalurl);
    this.unda.subscribe(unda =>{
      this.chimmy = unda;
  })
  }
}

