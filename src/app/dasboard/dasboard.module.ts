import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasboardRoutingModule } from './dasboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// material modules
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

import { SideNavContentComponent } from './dashboard/components/side-nav-content/side-nav-content.component';
import { TopNavComponent } from './dashboard/components/top-nav/top-nav.component';
import { MainContentComponent } from './dashboard/components/main-content/main-content.component';

@NgModule({
  declarations: [DashboardComponent, SideNavContentComponent, TopNavComponent, MainContentComponent],
  imports: [
    CommonModule,
    DasboardRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCardModule

  ]
})
export class DasboardModule { }
