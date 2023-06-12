import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FlightModel } from 'src/domain/models/flight.model';
import { GetJourneyUseCase } from 'src/domain/use-cases/queries/get-journey.usecase';
import Swal from 'sweetalert2';

@Component({
  selector: 'nsair-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent {

  flights: FlightModel[]
  flightForm: FormGroup;
  currencySelected: string;
  totalPrice: number;

  constructor(private journeyGet : GetJourneyUseCase){
    this.flightForm = new FormGroup({
      origin: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      destination: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
      limit: new FormControl<number>(0,Validators.required),
      currency: new FormControl<string>('',Validators.required),
    });
    this.flights = [];
    this.currencySelected = '';
    this.totalPrice = 0;
  }

  send(){
    console.log(this.flightForm.value);
    var object = {
      origin: this.flightForm.get('origin')?.value.toUpperCase(),
      destination: this.flightForm.get('destination')?.value.toUpperCase(),
      limit: this.flightForm.get('limit')?.value,
    }
    this.currencySelected = this.flightForm.get('currency')?.value;
    this.journeyGet.execute(object).subscribe({
      next: journey => {
      console.log(journey);
      this.flights = journey.flights;
      this.totalPrice = journey.price;
        
      },
      error : err => {
        console.log(err.error.Message),
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.Message,
          footer: '<a href="home">Please try again</a>'
        })
      },
      complete : () => {console.log(this.flights)}
    })
  }


  get origin() {
    return this.flightForm.get('origin');
  }


}
