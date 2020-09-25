import { ConfirmationDialogComponent } from './../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member.model';
import { Permission } from './../../../../models/permission.model';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-change-permission',
  templateUrl: './change-permission.component.html',
  styleUrls: ['./change-permission.component.scss']
})
export class ChangePermissionComponent implements OnInit {
  permissions: Permission[] = [
    { id: 0, name: 'admin' },
    { id: 1, name: 'member' },
    { id: 2, name: 'guest' },
    { id: 3, name: 'no-access' }
  ];
  isLoading = false;
  checkValidity: boolean;
  closeDialog: Observable<any>;
  selectedPermission: Permission;
  member: Member;
  permission: Permission;

  @Output() permissionChanged = new EventEmitter<Member>();

  constructor(
    private _dialog: MatDialog,
    public dialogRef: MatDialogRef<ChangePermissionComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public data: { member: Member, closeDialog: Observable<any> }) {
    this.member = data.member;
    this.closeDialog = data.closeDialog;
  }

  ngOnInit(): void {
    this.closeDialog.subscribe(() => { this.dialogRef.close(); }
    );
  }


  change() {
    if (!this.member.permission) {
      this.member.permission = { role: this.selectedPermission.id, activated: true };
    }
    this.member.permission.role = this.selectedPermission.id;
    this.isLoading = true;
    this.permissionChanged.emit(this.member);
  }

  closeDial() {
    if (this.selectedPermission) {
      const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
        width: '350px',
        autoFocus: false,
        data: {
          type: 'confirm-cancel'
        }
      });
      dialogRef.afterClosed().subscribe(
        (result) => {
          result ? this.dialogRef.close() : dialogRef.close();
        }
      );
    } else {
      this.dialogRef.close();
    }
  }

  permissionSelected(permission: Permission) {
    this.selectedPermission = permission;
  }

}
