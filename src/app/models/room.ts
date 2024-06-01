export class Room {
  description: string;
  roomno: string;
  businessClass: boolean;
  freeFood: boolean;
  directFlight: boolean;

  constructor(
      description: string,
      roomno: string,
      businessClass: boolean = false,
      freeFood: boolean = false,
      directFlight: boolean = false
  ) {
      this.description = description;
      this.roomno = roomno;
      this.businessClass = businessClass;
      this.freeFood = freeFood;
      this.directFlight = directFlight;
  }
}
