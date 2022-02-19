import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderNavModule } from './header-nav/header-nav.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage-container/homepage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderNavModule, HomepageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
