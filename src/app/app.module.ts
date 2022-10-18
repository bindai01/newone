import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { StudentComponent } from './student/student.component';
import { Student2Component } from './student2/student2.component';
import { Student3Component } from './student3/student3.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipe } from './custom.pipe';
import { ReactiveForm2Component } from './reactive-form2/reactive-form2.component';
import { CustDirectiveDirective } from './cust-directive.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { Practice1Component } from './practice1/practice1.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { Cust2dDirectiveDirective } from './cust2d-directive.directive';
import { Practice2Component } from './practice2/practice2.component';
import { ServiceComponent } from './service/service.component';
import { HttpClientModule } from '@angular/common/http';
import { FormtaskComponent } from './formtask/formtask.component';
import { RsjxOperatorComponent } from './rsjx-operator/rsjx-operator.component';
import { PracticeServiceComponent } from './practice-service/practice-service.component';
import { PromisesComponent } from './promises/promises.component';
import { Promis2Component } from './promis2/promis2.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    StudentComponent,
    Student2Component,
    Student3Component,
    TemplateFormComponent,
    ReactiveFormsComponent,
    PipeComponent,
    CustomPipe,
    ReactiveForm2Component,
    CustDirectiveDirective,
    LifecycleComponent,
    Practice1Component,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    Cust2dDirectiveDirective,
    Practice2Component,
    ServiceComponent,
    FormtaskComponent,
    RsjxOperatorComponent,
    PracticeServiceComponent,
    PromisesComponent,
    Promis2Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
