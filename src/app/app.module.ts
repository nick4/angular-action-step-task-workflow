import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TaskCardListComponent } from './task-card-list/task-card-list.component';
import { StepCardListComponent } from './step-card-list/step-card-list.component';
import { ActionCardListComponent } from './action-card-list/action-card-list.component';
import { WorkflowCardListComponent } from './workflow-card-list/workflow-card-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule, MatInputModule, MatSelectModule} from '@angular/material';
import {StepService} from './step.service';
import {ActionService} from './action.service';
import {TaskService} from './task.service';
import {WorkflowService} from './workflow.service';
import {HttpModule} from '@angular/http';
import { ActionDialogComponent } from './action-dialog/action-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { SignupComponent } from './signup/signup.component';
import { ActionNewComponent } from './action-new/action-new.component';
import {AuthService} from './services/auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        TopMenuComponent,
        TaskCardListComponent,
        StepCardListComponent,
        WorkflowCardListComponent,
        ActionCardListComponent,
        ActionDialogComponent,
        SignupComponent,
        ActionNewComponent

    ],
    entryComponents: [ActionDialogComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        AppRoutingModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        HttpModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatMomentDateModule,
        HttpClientModule

    ],
    providers: [StepService, ActionService, TaskService, WorkflowService, AuthService, HttpClient],
    bootstrap: [AppComponent]
})
export class AppModule {
}
