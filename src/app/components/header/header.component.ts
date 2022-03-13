import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() isEditable: boolean;
  @Input() isMain: boolean;
  @Input() forwardRoute: string;
  @Input() backwardRoute: string;
  @Output()  navigateTo = new EventEmitter<string>()
  constructor(private menuCtrl: MenuController, private router: Router) {}

  ngOnInit() {}

  openMenu() {
    this.menuCtrl.open();
  }

  navigate(route) {
    console.log('current route is :  '+route);
    this.navigateTo.emit(route);
    this.router.navigateByUrl(route);
  }
}
