export class Flight {
    description: string;
    roomNumber: string;
    businessClass: boolean;
    freeFood: boolean;
    directFlight: boolean;
    price: number;
    available: boolean;
    checkInDate: Date;
    checkOutDate: Date;
  
    constructor(
      description: string,
      roomNumber: string,
      businessClass: boolean,
      freeFood: boolean,
      directFlight: boolean,
      price: number,
      available: boolean,
      checkInDate: Date,
      checkOutDate: Date
    ) {
      this.description = description;
      this.roomNumber = roomNumber;
      this.businessClass = businessClass;
      this.freeFood = freeFood;
      this.directFlight = directFlight;
      this.price = price;
      this.available = available;
      this.checkInDate = checkInDate;
      this.checkOutDate = checkOutDate;
    }
  }
  