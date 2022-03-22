import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarComponentOptions } from 'ion2-calendar';
import { DataService } from 'src/app/services/data/data.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
//mport { CalendarComponentOptions } from 'ion2-calendar';
// import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  platform: any;
  dateRange: { from: string; to: string };
  type: 'string';

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    showAdjacentMonthDay: true,
    showMonthPicker: true,
    showToggleButtons: true,
  };
  constructor(
    private router: Router,
    private dataService: DataService,
    private util: UtilitiesService
  ) {
    this.platform = this.util.platform;
  }
  onChange(selectedDates) {
    console.log('selecte dates : ' + JSON.stringify(selectedDates));

    this.dateRange = selectedDates;
  }
  ngOnInit() {}
  completeReservation() {
    console.log('selecte dates : ' + JSON.stringify(this.dateRange));
    if (this.dateRange == undefined) {
      this.util.showMessage('please choose from and to dates');
    } else {
      this.dataService.setDates(this.dateRange);
      this.router.navigateByUrl('/tabs/main/reservation-payment');
    }
  }
}
