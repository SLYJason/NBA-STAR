import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    PageNotFoundComponent
  ]
})

export class SharedModule {}
