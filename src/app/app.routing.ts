
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';




  // {
  //   path: '',
  //   component: StoryComponent
  // }

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
