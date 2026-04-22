import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../core/services/data.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css'
})
export class PostItemComponent {
  @Input() post!: Post;
  @Output() postClicked = new EventEmitter<Post>();

  selectPost() {
    this.postClicked.emit(this.post);
  }
}
