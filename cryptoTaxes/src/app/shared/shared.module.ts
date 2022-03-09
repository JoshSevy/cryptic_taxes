import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { TipsComponent } from './tips/tips.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, TipsComponent],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, TipsComponent],
})
export class SharedModule {}
