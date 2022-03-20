import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = [];
  private dates = { from: '', to: '' };

  constructor() {}

  setData(id, data) {
    console.log(JSON.stringify(data));
    this.data[id] = data;
  }

  getData(id) {
    return this.data[id];
  }

  setDates(dates) {
    this.dates = dates;
    console.log('selected dates '+JSON.stringify(dates))
  }

  getDates() {
    return this.dates;
  }
}
