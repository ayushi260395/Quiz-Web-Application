import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { ValueComponent } from './value/value.component';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { BackgroundDirective } from './background.directive';


@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    QuizComponent,
    BackgroundDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
