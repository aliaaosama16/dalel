import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  platform: any;
  favourites: Item[];
  constructor(private util: UtilitiesService) {
    this.platform = this.util.platform;
  }

  ngOnInit() {}
}
