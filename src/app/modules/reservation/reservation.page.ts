import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  dateRange: { from: string; to: string; };
  type: 'string';
  
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    showToggleButtons:true,
    showMonthPicker:true
  };
 
  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }


  reloadSource(){
  }

}
