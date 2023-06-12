import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightModel } from 'src/domain/models/flight.model';
import { GetJourneyUseCase } from 'src/domain/use-cases/queries/get-journey.usecase';

@Component({
  selector: 'nsair-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  flightForm: FormGroup;
  @Output()
  flights = new EventEmitter<FlightModel[]>();

  constructor(){
    this.flightForm = new FormGroup({
      origin: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      destination: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      limit: new FormControl<number>(0, Validators.required),
    });
  }

  send(){
    console.log(this.flightForm.value);
    this.flights = this.flightForm.value;
    this.flights.emit(this.flightForm.value);
    
  }
}
