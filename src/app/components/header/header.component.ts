import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentLanguage: string;
  @Input() title: string;
  @Input() isEditable: boolean;
  @Input() isMain: boolean;
  @Input() forwardRoute: string;
  @Input() backwardRoute: string;
  @Output() navigateTo = new EventEmitter<string>();
  constructor(
    private menuCtrl: MenuController,
    private language: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentLanguage=this.language.getLanguage();
  }

  openMenu() {
    this.menuCtrl.open();
  }

  navigate(route) {
    console.log('current route is :  ' + route);
    this.navigateTo.emit(route);
    this.router.navigateByUrl(route);
  }
}
