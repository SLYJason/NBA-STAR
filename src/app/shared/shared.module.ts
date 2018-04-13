import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { FooterComponent } from './footer/footer.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    IconComponent,
    InputSearchComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    IconComponent,
    InputSearchComponent,
    FooterComponent,
    PageNotFoundComponent
  ]
})

export class SharedModule {}
