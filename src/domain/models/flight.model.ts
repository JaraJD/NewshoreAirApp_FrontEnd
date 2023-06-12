import { TransportModel } from "./transport.model";

export interface FlightModel {
    origin: string,
    destination: string,
    price: number,
    transport: TransportModel,
}