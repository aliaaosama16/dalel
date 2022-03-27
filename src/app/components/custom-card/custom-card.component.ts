import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ItemDetails } from 'src/app/models/itemDetails';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {
  currentlangauge: string;
  @Input() cardOpacity:number;
  @Input() itemDetails: ItemDetails;
  @Input() forwardRoute: string;
  @Output() navigateTo = new EventEmitter<string>();

  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentlangauge = this.languageService.getLanguage();
  }

  navigate(route) {
    console.log('all object ' + JSON.stringify(this.itemDetails));
    console.log('current route is :  ' + route);
    this.navigateTo.emit(route);
    this.router.navigate([`/${route}/${this.itemDetails.catID}/${this.itemDetails.id}`]);
  
  }
}
