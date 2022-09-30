import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { HealthProviderComponent } from './health-provider/health-provider.component';
import { AddProviderComponent } from './health-provider/add-provider/add-provider.component';
import { ActionProviderComponent } from './health-provider/action-provider/action-provider.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NotificationsComponent,
    HealthProviderComponent,
    AddProviderComponent,
    ActionProviderComponent,
    AdminUsersComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
