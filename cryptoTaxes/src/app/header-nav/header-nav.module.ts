import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderNavComponent } from './header-nav.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { IconComponent } from './icon/icon.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderNavComponent, NavigationBarComponent, IconComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  exports: [HeaderNavComponent],
})
export class HeaderNavModule {}
