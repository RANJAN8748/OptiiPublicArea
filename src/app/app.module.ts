import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { RosterComponent } from './roster/roster.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ReportsComponent } from './reports/reports.component';
import { ConfigutarionComponent } from './configutarion/configutarion.component';
import { SessionComponent } from './session/session.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { JobsComponent } from './jobs/jobs.component';
import { ZonesComponent } from './zones/zones.component';
import { WorkingarrangementsComponent } from './workingarrangements/workingarrangements.component';
import { CleannesslevelComponent } from './cleannesslevel/cleannesslevel.component';
import { TranslationsComponent } from './translations/translations.component';
import { InterruptreasonsComponent } from './interruptreasons/interruptreasons.component';
import { NotesComponent } from './notes/notes.component';
import { DeviceComponent } from './device/device.component';
import { PausereasonsComponent } from './pausereasons/pausereasons.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { UserService } from './user.service';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'configuration',
    component: ConfigutarionComponent,
    children: [{
      path: 'configuration/users',
      component: UsersComponent
    },
    {
      path: 'configuration/roles',
      component: RolesComponent
    },
    {
      path: 'configuration/workingarrangements',
      component: WorkingarrangementsComponent
    },
    {
      path: 'configuration/zones',
      component: ZonesComponent
    },
    {
      path: 'configuration/jobs',
      component: JobsComponent
    },
    {
      path: 'configuration/cleannesslevel',
      component: CleannesslevelComponent
    },
    {
      path: 'configuration/translations',
      component: TranslationsComponent
    },
    {
      path: 'configuration/interruptreasons',
      component: InterruptreasonsComponent
    },
    {
      path: 'configuration/notes',
      component: NotesComponent
    },
    {
      path: 'configuration/device',
      component: DeviceComponent
    },
    {
      path: 'configuration/pausereasons',
      component: PausereasonsComponent
    },
    {
      path: 'configuration/qrcode',
      component: QrcodeComponent
    }]
  },
  {
    path: 'viewNotes',
    component: ViewNotesComponent
  },
  {
    path: 'session',
    component: SessionComponent
  },
  {
    path: 'tasklist',
    component: TasklistComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'assingnment',
    component: AssignmentComponent
  },
  {
    path: 'roster',
    component: RosterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LeftPanelComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    RosterComponent,
    AssignmentComponent,
    ReportsComponent,
    ConfigutarionComponent,
    SessionComponent,
    ViewNotesComponent,
    TasklistComponent,
    UsersComponent,
    RolesComponent,
    JobsComponent,
    ZonesComponent,
    WorkingarrangementsComponent,
    CleannesslevelComponent,
    TranslationsComponent,
    InterruptreasonsComponent,
    NotesComponent,
    DeviceComponent,
    PausereasonsComponent,
    QrcodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, {useHash: true}),
    HttpModule
  ],
  providers: [AuthService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
