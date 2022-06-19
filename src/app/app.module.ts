import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatChipsModule} from '@angular/material/chips'
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar'


import { AppComponent } from './app.component';
import { IdeaListComponent } from './ideas/idea-list/idea-list.component';
import { IdeaCreateComponent } from './ideas/idea-create/idea-create.component';
import { IdeaItemComponent } from './ideas/idea-list/idea-item/idea-item.component';
import { IdeaDetailComponent } from './ideas/idea-detail/idea-detail.component';
import { CommentListComponent } from './ideas/idea-detail/comment-list/comment-list.component';
import { CommentComponent } from './ideas/idea-detail/comment-list/comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DateagoPipe } from './dateago.pipe';


const appRoutes: Routes = [
  {
    path: '',
    component: IdeaListComponent
  },
  {
    path: 'idea-create',
    component: IdeaCreateComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    IdeaListComponent,
    IdeaCreateComponent,
    IdeaItemComponent,
    IdeaDetailComponent,
    CommentListComponent,
    CommentComponent,
    HeaderComponent,
    FooterComponent,
    DateagoPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
