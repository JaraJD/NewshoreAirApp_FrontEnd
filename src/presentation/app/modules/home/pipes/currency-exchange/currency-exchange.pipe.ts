import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyExchange'
})
export class CurrencyExchangePipe implements PipeTransform {

  transform(price: number, currency: string): unknown {
    switch ( currency ) {
      case 'EUR':
          price = price * 0.93;
          break;
      case 'COP':
          price = price * 4175;
          break;
      default: 
          price = price;
          break;
   }

    return price;
  }

}
