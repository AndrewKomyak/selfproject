import { Routes } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'allposts', component: AllPostsComponent },
    { path: 'newpost', component: NewPostComponent },
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: ''},

];
