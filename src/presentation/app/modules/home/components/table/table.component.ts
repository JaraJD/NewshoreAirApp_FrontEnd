import { Component, Input } from '@angular/core';
import { FlightModel } from 'src/domain/models/flight.model';
import { GetJourneyUseCase } from 'src/domain/use-cases/queries/get-journey.usecase';

@Component({
  selector: 'nsair-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() flights: FlightModel[];

  constructor(){
    this.flights = [];
  }

}
