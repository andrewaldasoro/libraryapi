import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckedOutBooksComponent } from './checked-out-books/checked-out-books.component';
import { LibraryMatModule } from '../library-mat.module';
import { CheckedOutRoutingModule } from './checked-out-routing.module';
import { CheckOutPreviousComponent } from './check-out-previous/check-out-previous.component';

@NgModule({
  declarations: [
    CheckedOutBooksComponent,
    CheckOutPreviousComponent
  ],
  imports: [
    CommonModule,
    CheckedOutRoutingModule,
    LibraryMatModule
  ]
})
export class CheckedOutModule { }
