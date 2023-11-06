import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  constructor() { }

  sendNumbersGivenRange(minRange:number, maxRange:number){
    return new Observable<number>(subscriber => {
      let sentNumber = minRange


      setInterval(() => {
        if (sentNumber === maxRange) {
          subscriber.complete()
        }
        subscriber.next(++sentNumber)
      }, 1000)
    })
  }

  convertNumbersToAscii(){
    return this.sendNumbersGivenRange(65, 90).pipe(map(number => String.fromCharCode(number)))
  }
}
