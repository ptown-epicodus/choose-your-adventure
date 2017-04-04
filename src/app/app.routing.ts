import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { StoriesComponent } from './stories/stories.component';




  // {
  //   path: '',
  //   component: StoryComponent
  // }

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },

  {
    path: 'stories',
    component: StoriesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
