import { NotificationsSettingsComponent } from './containers/notifications-settings/notifications-settings.component';
import { BillingsSettingsComponent } from './containers/billings-settings/billings-settings.component';
import { AccountSettingsComponent } from './containers/account-settings/account-settings.component';
import { UserManagementComponent } from './containers/user-management/user-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from 'src/app/guards/can-deactivate.guard';


const routes: Routes = [
  {
    path: 'user-management',
    component: UserManagementComponent
  },
  {
    path: 'account',
    component: AccountSettingsComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  // {
  //   path: 'billing',
  //   component: BillingsSettingsComponent
  // },  
  // {
  //   path: 'notifications',
  //   component: NotificationsSettingsComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
