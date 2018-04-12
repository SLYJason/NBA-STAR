import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { InputSearchComponent } from './input-search/input-search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InputSearchComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    InputSearchComponent,
    PageNotFoundComponent
  ]
})

export class SharedModule {}
