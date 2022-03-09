import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageContainerComponent } from './homepage-container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomepageContainerComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomepageContainerComponent],
})
export class HomepageModule {}
