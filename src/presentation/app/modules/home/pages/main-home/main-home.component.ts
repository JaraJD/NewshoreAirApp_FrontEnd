import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightModel } from 'src/domain/models/flight.model';
import { GetJourneyUseCase } from 'src/domain/use-cases/queries/get-journey.usecase';

@Component({
  selector: 'nsair-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent {

  flights: FlightModel[]
  flightForm: FormGroup;

  constructor(private journeyGet : GetJourneyUseCase){
    this.flightForm = new FormGroup({
      origin: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      destination: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      limit: new FormControl<number>(0, Validators.required),
    });
    this.flights = [];
  }

  send(){
    console.log(this.flightForm.value);
    this.journeyGet.execute(this.flightForm.value).subscribe({
      next: journey => {
      console.log(journey);
      this.flights = journey.flights;
        
      },
      error : err => console.log(err),
      complete : () => {console.log(this.flights)}
    })
  }
}
