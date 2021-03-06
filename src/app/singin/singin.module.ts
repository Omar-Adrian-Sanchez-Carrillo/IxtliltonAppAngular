import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SinginRoutingModule } from './singin-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RegistroComponent } from './componentesingin/registro/registro.component';
import { RegComponent } from './componentesingin/reg/reg.component';
import {HeaderSingComponent} from './componentesingin/header-sing/header-sing.component';
import {FooterSingComponent} from './componentesingin/footer-sing/footer-sing.component';

@NgModule({
  declarations: [
    RegistroComponent,
    RegComponent,
    HeaderSingComponent,
    FooterSingComponent,
  ],
  imports: [
    CommonModule,
      RouterModule,
      SinginRoutingModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatSidenavModule,
      MatToolbarModule,
  ]
})
export class SinginModule { }
