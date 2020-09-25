import { PermissionPipe } from './pipes/permission.pipe';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './containers/user-management/user-management.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { ChangePermissionComponent } from './components/change-permission/change-permission.component';
import { DeactivateAccessComponent } from './components/deactivate-access/deactivate-access.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserPickerComponent } from './components/user-picker/user-picker.component';
import { PermissionPickerComponent } from './components/permission-picker/permission-picker.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { ActivatedAccessComponent } from './components/activated-access/activated-access.component';
import { AccountSettingsComponent } from './containers/account-settings/account-settings.component';
import { BillingsSettingsComponent } from './containers/billings-settings/billings-settings.component';
import { NotificationsSettingsComponent } from './containers/notifications-settings/notifications-settings.component';
import { LanguagePickerComponent } from './components/language-picker/language-picker.component';


@NgModule({
  declarations: [
    UserManagementComponent,
    UserListComponent,
    UserFilterComponent,
    ChangePermissionComponent,
    DeactivateAccessComponent,
    AddUserComponent,
    UserPickerComponent,
    PermissionPickerComponent,
    DeleteUserComponent,
    ActivatedAccessComponent,
    PermissionPipe,
    AccountSettingsComponent,
    BillingsSettingsComponent,
    NotificationsSettingsComponent,
    LanguagePickerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
