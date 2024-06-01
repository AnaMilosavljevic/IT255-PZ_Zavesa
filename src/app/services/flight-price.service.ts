import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class FlightPriceService {
    constructor() { }

    calculatePrice(numberOfFlights: number): number {
        return numberOfFlights;
    }
}
