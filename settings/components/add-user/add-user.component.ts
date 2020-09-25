import { ConfirmationDialogComponent } from './../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member.model';
import { Permission } from './../../../../models/permission.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Input() members: Member;
  @Output() userAdded = new EventEmitter<Member>();

  closeDialog: Observable<any>;
  isLoading = false;
  checkValidity: boolean;

  selectedMember: Member;
  selectedPermission: Permission;

  constructor(
    private _dialog: MatDialog,
    public dialogRef: MatDialogRef<AddUserComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public data: { members: Member, closeDialog: Observable<any> }) {
    this.members = data.members;
    this.closeDialog = data.closeDialog;
  }

  ngOnInit(): void {
    this.closeDialog.subscribe(() => { this.dialogRef.close(); });
  }

  selectedUsersChange(member: Member) {
    this.selectedMember = member;
  }

  permissionSelected(permission: Permission) {
    this.selectedPermission = permission;
  }

  add() {
    if (!this.selectedPermission || !this.selectedMember) {
      this.checkValidity = true;
      return;
    }
    if (!this.selectedMember.permission) {
      this.selectedMember.permission = { role: this.selectedPermission.id, activated: true };
    }
    this.selectedMember.permission.activated = true;
    this.selectedMember.permission.role = this.selectedPermission.id;
    this.isLoading = true;
    this.userAdded.emit(this.selectedMember);
  }

  closeDial() {
    if (this.selectedMember || this.selectedPermission) {
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

  cancel() {
    this.dialogRef.close();
  }


}
