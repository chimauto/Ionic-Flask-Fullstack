import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Food } from '../../models/food.model';
import 'rxjs/add/operator/map';
/*
  Generated class for the FoodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodProvider {
  private foodUrl = "http://3589765ca901.ngrok.io"
  constructor(public http: HttpClient) {
    console.log('Hello FoodProvider Provider');
  }
  getFood(order: string){
    return this.http.get<Food>(this.foodUrl+"/find?number="+order)
  }
}
