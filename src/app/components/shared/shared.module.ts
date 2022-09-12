import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { CheckboxCmpComponent } from './checkbox-cmp/checkbox-cmp.component';
import { ModalCmpComponent } from './modal-cmp/modal-cmp.component';



@NgModule({
  declarations: [
    MenuHeaderComponent,
    MenuSidebarComponent,
    PageHeaderComponent,
    LoaderComponent,
    CheckboxCmpComponent,
    ModalCmpComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    FontAwesomeModule,
    MenuHeaderComponent,
    MenuSidebarComponent,
    PageHeaderComponent,
    LoaderComponent,
    CheckboxCmpComponent,
    ModalCmpComponent
  ]
})
export class SharedModule { }
