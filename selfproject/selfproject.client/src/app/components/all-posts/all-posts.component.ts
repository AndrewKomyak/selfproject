import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-posts',
  imports: [CommonModule],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.scss'
})
export class AllPostsComponent implements OnInit {

  posts: Post[];
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    })
  }
}
