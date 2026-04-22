import { Component } from '@angular/core';
import { DataService, Post } from '../../core/services/data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts: Post[] = [];
  selectedPost?:Post;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe({
      next: (response) => {
        this.posts = response.slice(0, 10);
      },
      error: (error) => {
        console.error('Error al obtener posts:', error);
      }
    });
  }

  onPostSelected(selectedPost: Post) {
    this.selectedPost = selectedPost;

    setTimeout(() => {
      const element = document.getElementById('post-detail');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}
