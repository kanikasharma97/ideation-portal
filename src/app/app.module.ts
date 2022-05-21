import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'

import { AppComponent } from './app.component';
import { IdeaListComponent } from './ideas/idea-list/idea-list.component';
import { IdeaCreateComponent } from './ideas/idea-create/idea-create.component';
import { IdeaItemComponent } from './ideas/idea-list/idea-item/idea-item.component';
import { IdeaDetailComponent } from './ideas/idea-detail/idea-detail.component';
import { CommentListComponent } from './ideas/idea-detail/comment-list/comment-list.component';
import { CommentComponent } from './ideas/idea-detail/comment-list/comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaCreateComponent,
    IdeaItemComponent,
    IdeaDetailComponent,
    CommentListComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
