import { FlightModel } from "./flight.model";

export interface JourneyVmModel {
    origin: string,
    destination: string,
    price: number,
    flights: FlightModel[],
}