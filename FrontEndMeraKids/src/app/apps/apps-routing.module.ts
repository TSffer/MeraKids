import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { ServicesComponent } from './services/services.component';

import { FullComponent } from './layout/full/full.component';
import { RightslawComponent } from './rightslaw/rightslaw.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
	{
		path: '',
		component: FullComponent,
		children: [
			{ path: '', component: BlogComponent },
			{ path: 'blogDetail/:id', component: BlogDetailComponent },
			{ path: 'about', component: AboutComponent },
			{ path: 'services', component: ServicesComponent},
			{ path: 'rightslaw', component: RightslawComponent},
			{ path: 'contact', component: ContactComponent}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
