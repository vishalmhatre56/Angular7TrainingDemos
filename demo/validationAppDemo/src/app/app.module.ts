import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './componentsAndModules/heroes/heroes.module';
import { PageNotFoundComponent } from './componentsAndModules/page-not-found/page-not-found.component';
import { DynamicFormQuestionComponent } from './componentsAndModules/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './componentsAndModules/dynamic-form/dynamic-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { ComposeMessageTwoComponent } from './compose-message-two/compose-message-two.component';
import { AuthModule } from './componentsAndModules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    ComposeMessageTwoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }