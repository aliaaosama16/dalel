import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {
  currentlangauge: string;
  @Input() cardOpacity:number;
  @Input() itemDetails: Item;
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
    console.log('custom card : ' + JSON.stringify(this.itemDetails));
    console.log('current route is :  ' + route);
    this.navigateTo.emit(route);
    this.router.navigate([`/${route}/${this.itemDetails.section_id}/${this.itemDetails.id}`]);
  }
}
