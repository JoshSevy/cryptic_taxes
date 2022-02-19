import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';
import { TipsComponent } from './shared/tips/tips.component';

const routes: Routes = [
  // { path: '', component: HeaderNavComponent },
  { path: '', component: HomepageContainerComponent },
  { path: 'tips', component: TipsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
