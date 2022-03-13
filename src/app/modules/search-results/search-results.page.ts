import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.page.html',
  styleUrls: ['./search-results.page.scss'],
})
export class SearchResultsPage implements OnInit {
  currentlangauge:string='';
  resultItems = [
    {
    name: "عنوان تجريبي",
    rating: '3+',
    id: 1,
    image: "./../../../assets/icon/image.svg",
    city: "الرياض",
    address: "المملكة العربية السعودية",
    price: 1120,
    unit: "ر.س",
    perUnit: "ليلة"  ,
   
  },{
    name: "عنوان تجريبي",
    rating: '3+',
    id: 2,
    image: "./../../../assets/icon/image.svg",
    city: "الرياض",
    address: "المملكة العربية السعودية",
    price: 1120,
    unit: "ر.س",
    perUnit: "ليلة"  ,
   
  },{
    name: "عنوان تجريبي",
    rating: '3+',
    id: 3,
    image: "./../../../assets/icon/image.svg",
    city: "الرياض",
    address: "المملكة العربية السعودية",
    price: 1120,
    unit: "ر.س",
    perUnit: "ليلة"  ,
   
  },{
    name: "عنوان تجريبي",
    rating: '3+',
    id: 4,
    image: "./../../../assets/icon/image.svg",
    city: "الرياض",
    address: "المملكة العربية السعودية",
    price: 1120,
    unit: "ر.س",
    perUnit: "ليلة"  ,
   
  },{
    name: "عنوان تجريبي",
    rating: '3+',
    id: 5,
    image: "./../../../assets/icon/image.svg",
    city: "الرياض",
    address: "المملكة العربية السعودية",
    price: 1120,
    unit: "ر.س",
    perUnit: "ليلة"  ,
   
  },{
    name: "عنوان تجريبي",
    rating: '3+',
    id: 1,
    image: "./../../../assets/icon/image.svg",
    city: "الرياض",
    address: "المملكة العربية السعودية",
    price: 1120,
    unit: "ر.س",
    perUnit: "ليلة"  ,
   
  },{
    name: "عنوان تجريبي",
    rating: '3+',
    id: 1,
    image: "./../../../assets/icon/image.svg",
    city: "الرياض",
    address: "المملكة العربية السعودية",
    price: 1120,
    unit: "ر.س",
    perUnit: "ليلة"  ,
   
  },{
    name: "عنوان تجريبي",
    rating: '3+',
    id: 1,
    image: "./../../../assets/icon/image.svg",
    city: "الرياض",
    address: "المملكة العربية السعودية",
    price: 1120,
    unit: "ر.س",
    perUnit: "ليلة"  ,
   
  }];
  constructor(private langaugeservice:LanguageService) { }

  ngOnInit() {
    this.currentlangauge = this.langaugeservice.getLanguage();
    console.log(this.currentlangauge);
  }

}
