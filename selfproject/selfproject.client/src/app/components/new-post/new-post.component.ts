import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-new-post',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.scss',
  providers: [FormControlName, FormGroupName]
})
export class NewPostComponent {
  newPostForm: FormGroup;

  constructor(private postsService: PostsService,
              private fb: FormBuilder) {
    this.newPostForm = this.fb.group({
      title: '',
      content: '',
      isAnonymous: false
    });
  }

  onSubmit(): void {
    if (this.newPostForm.valid) {
      this.postsService.addNewPost(this.newPostForm.value as Post).subscribe(response => {
        this.newPostForm.reset();
      });
    }
  }
}