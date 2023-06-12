import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JourneyVmModel } from "src/domain/models/journey-vm.model";
import { JourneyRepository } from "src/domain/repositories/journey.repository";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class JourneyImplementationRepository extends JourneyRepository {


    constructor(private http: HttpClient ){
        super();
    }

    GetJourneyAsync(params : {origin : string, destination : string, limit: number}): Observable<JourneyVmModel> {
        return this.http.get<JourneyVmModel>(`${environment.url_backend_newshoreAir}/${params.origin}/${params.destination}/${params.limit}`);
    }

}