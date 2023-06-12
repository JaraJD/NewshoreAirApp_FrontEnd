import { NgModule } from "@angular/core";
import { JourneyRepository } from "src/domain/repositories/journey.repository";
import { GetJourneyUseCase } from "src/domain/use-cases/queries/get-journey.usecase";
import { JourneyImplementationRepository } from "./journey/journey-implementation.repository";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

const getJourneyUseCaseFactory = 
(userRepo: JourneyRepository) => new GetJourneyUseCase(userRepo);
export const getJourneyUseCaseProvider = {
    provide: GetJourneyUseCase,
    useFactory: getJourneyUseCaseFactory,
    deps: [JourneyRepository],
};

@NgModule({
    declarations: [],
    providers: [
    getJourneyUseCaseProvider,
        { provide: JourneyRepository, useClass: JourneyImplementationRepository},

    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class DataModule { }