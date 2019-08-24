import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cnt = 0;
  public counter() {
    console.log('Counter called', this.cnt++);
    // throw new Error("Method not implemented.");
  }

  getCounter() {
    return this.cnt;
  }

  constructor() { }
}
