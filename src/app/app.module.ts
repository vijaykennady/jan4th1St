import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule } from '@angular/forms';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [		
    AppComponent,
    SampleComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    DirectivesComponent,
    NgStyleComponent,
    PipesComponent,
    FormComponent,
    ListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
