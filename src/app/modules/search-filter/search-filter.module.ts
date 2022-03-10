import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchFilterPageRoutingModule } from './search-filter-routing.module';

import { SearchFilterPage } from './search-filter.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchFilterPageRoutingModule,
    ComponentsModule,
    TranslateModule
  ],
  declarations: [SearchFilterPage]
})
export class SearchFilterPageModule {}
