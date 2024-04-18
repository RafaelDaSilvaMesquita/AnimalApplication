import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/multiselect';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DropdownModule} from 'primeng/dropdown';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalService } from './service/animal.service';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserDetailsComponent,
    AnimalFormComponent,
    AnimalListComponent,
    AnimalDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    AccordionModule,
    DropdownModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToastModule
  ],
  providers: [UserService, AnimalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
