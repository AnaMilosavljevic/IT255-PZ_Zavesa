import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private isHomePage: boolean = true;

  constructor() { }

  setIsHomePage(value: boolean): void {
    this.isHomePage = value;
  }

  getIsHomePage(): boolean {
    return this.isHomePage;
  }
}
