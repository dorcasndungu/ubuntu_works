import { Component } from '@angular/core';
import { CommentComponent } from '../components/comment/comment.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommentComponent, PostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
