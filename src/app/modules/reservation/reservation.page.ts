import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarComponentOptions } from 'ion2-calendar';
//mport { CalendarComponentOptions } from 'ion2-calendar';
// import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  // date: string;
  // type: 'string';
  // constructor() { }

  dateRange: { from: string; to: string };
  type: 'string';

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    showAdjacentMonthDay: true,
    showMonthPicker: true,
    showToggleButtons: true,
  };
  constructor(private router: Router) {}
  onChange(selectedDates) {
    console.log('selecte dates : ' + JSON.stringify(selectedDates));

    this.dateRange = selectedDates;
    //console.log(this.dateRange)
  }
  ngOnInit() {}
  completeReservation() {
    this.router.navigateByUrl('/tabs/main/reservation-payment');
  }
  //routerLink="/tabs/main/reservation-payment"
}
