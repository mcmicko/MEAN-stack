import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import {Post} from '../posts/post.model';
import { PostService } from '../posts/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

}
