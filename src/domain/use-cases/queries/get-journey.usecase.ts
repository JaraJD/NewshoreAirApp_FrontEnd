import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { JourneyVmModel } from "src/domain/models/journey-vm.model";
import { JourneyRepository } from "src/domain/repositories/journey.repository";

export class GetJourneyUseCase implements UseCase<{origin : string, destination : string, limit: number}, JourneyVmModel[]>{

    constructor(private repository: JourneyRepository){}

    execute(params : {origin : string, destination : string, limit: number}): Observable<JourneyVmModel[]> {
        return this.repository.GetJourneyAsync(params);
    }

}