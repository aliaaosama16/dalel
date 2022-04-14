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

  @Input() cardBrightness: string;
  @Input() itemDetails: Item;
  @Input() forwardRoute: string;
  @Output() navigateTo = new EventEmitter<string>();

  constructor(
    private languageService: LanguageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentlangauge = this.languageService.getLanguage();
    console.log('custom card : '+this.cardBrightness);
    this.cardBrightness=`brightness(${this.cardBrightness})`
  }

  navigate(route) {
    this.router.navigateByUrl(
      `/${route}/categories/${this.itemDetails.section_id}/${this.itemDetails.id}`
    );
  }
}
