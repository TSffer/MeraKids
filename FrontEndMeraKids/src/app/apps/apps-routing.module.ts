import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { ServicesComponent } from './services/services.component';

import { FullComponent } from './layout/full/full.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
		{ path: '', component: BlogComponent },
		{ path: 'blogDetail/:id', component: BlogDetailComponent },
		{ path: 'about', component: AboutComponent },
		{ path: 'services', component: ServicesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
