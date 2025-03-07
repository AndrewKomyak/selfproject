import { Routes } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signin/signup/signup.component';

export const routes: Routes = [
    { path: 'allposts', component: AllPostsComponent },
    { path: 'newpost', component: NewPostComponent },
    { path: 'signin', component: SigninComponent, children: [
        { path: 'signup', component: SignupComponent }
    ]},
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: ''},

];
