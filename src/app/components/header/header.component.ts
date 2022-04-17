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
  @Input() categoryId:number;
  @Output() navigateTo = new EventEmitter<string>();
  @Output() back = new EventEmitter<string>();
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
    console.log('this.categoryId '+this.categoryId)
    console.log('current route is :  ' + route);
    this.navigateTo.emit(route);
    if(this.categoryId){
      this.router.navigateByUrl(`${route}/${this.categoryId}`);
    }else if( this.categoryId==undefined){
      this.router.navigateByUrl(route);
    }
    
  }

  goBack(value: string) {
    console.log('go back emitted');
      this.back.emit(value);
    }
}
