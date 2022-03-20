import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarComponentOptions } from 'ion2-calendar';
import { DataService } from 'src/app/services/data/data.service';
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
  constructor(private router: Router,private dataService:DataService) {}
  onChange(selectedDates) {
    console.log('selecte dates : ' + JSON.stringify(selectedDates));

    this.dateRange = selectedDates;
  }
  ngOnInit() {}
  completeReservation() {
    this.dataService.setDates(this.dateRange);
    this.router.navigateByUrl('/tabs/main/reservation-payment');
  }
}
