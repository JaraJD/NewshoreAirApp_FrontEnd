import { Observable } from "rxjs";
import { JourneyVmModel } from "../models/journey-vm.model";

export abstract class JourneyRepository {
    abstract GetJourneyAsync( params : {origin : string, destination : string, limit: number}) : Observable<JourneyVmModel>
}