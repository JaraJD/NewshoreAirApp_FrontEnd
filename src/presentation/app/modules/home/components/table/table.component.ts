import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FlightModel } from 'src/domain/models/flight.model';
@Component({
  selector: 'nsair-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
  
})
export class TableComponent {
  @Input() flights: FlightModel[];
  @Input() currencySelected: string;
  @Input() totalPrice: number;


  constructor(private currencyPipe: CurrencyPipe){
    this.flights = [];
    this.currencySelected = '';
    this.totalPrice = 0;
  }

}
