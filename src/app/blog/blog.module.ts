import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostSnippetComponent } from './post-snippet/post-snippet.component';
import { PostListComponent } from './post-list/post-list.component';



@NgModule({
  declarations: [PostComponent, PostSnippetComponent, PostListComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
