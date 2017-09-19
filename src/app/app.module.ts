import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { QRCodeModule } from 'angular2-qrcode';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';


import { AppComponent } from './app.component';
import { MenusupComponent } from './menusup/menusup.component';
import { MenulatComponent } from './menulat/menulat.component';
import { MainComponent } from './main/main.component';
import { LizenzComponent } from './lizenz/lizenz.component';



import { environment } from '../environments/environment';
import { SoftwareComponent } from './software/software.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AktivtagPipe } from './pipes/aktivtag.pipe';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { ClientsComponent } from './clients/clients.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, MdSelectModule, MdTabsModule, MdListModule, MdSidenavModule} from '@angular/material';
import 'hammerjs';
import { DatesPipe } from './pipes/dates.pipe';
import { FechaPipe } from './pipes/fecha.pipe';

import {  MaterialModule, DateAdapter, MdDateFormats, MD_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS} from './myadapter';
import { StatusComponent } from './status/status.component';
import { FilstatusPipe } from './pipes/filstatus.pipe';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { NumstatusPipe } from './pipes/numstatus.pipe';
import { ChronosComponent } from './report/chronos/chronos.component';
import { ChatComponent } from './chat/chat.component';
import { UsereditComponent } from './useredit/useredit.component';
import { HorajsPipe } from './pipes/horajs.pipe';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'index', component: IndexComponent },
  { path: 'main', component: MainComponent },
  { path: 'lizenz', component: LizenzComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'users', component: UsersComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'status', component: StatusComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'upload', component: UploadFormComponent },
  { path: 'useredit', component: UsereditComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MenusupComponent,
    MenulatComponent,
    MainComponent,
    LizenzComponent,
    SoftwareComponent,
    CalendarComponent,
    AktivtagPipe,
    UsersComponent,
    ProjectsComponent,
    TasksComponent,
    ClientsComponent,
    DatesPipe,
    FechaPipe,
    StatusComponent,
    FilstatusPipe,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    DashboardComponent,
    IndexComponent,
    UploadFormComponent,
    NumstatusPipe,
    ChronosComponent,
    ChatComponent,
    UsereditComponent,
    HorajsPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    QRCodeModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    MdButtonModule, 
    MdCheckboxModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    MdTabsModule,
    MdListModule,
    MdSidenavModule
  ],
  exports:[],
  providers: [
        {
            provide: DateAdapter, useClass: AppDateAdapter
        },
        {
            provide: MD_DATE_FORMATS, useValue: APP_DATE_FORMATS
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
