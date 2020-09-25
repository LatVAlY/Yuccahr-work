import { Member } from 'src/app/models/member.model';
import { Observable } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  members: Member;
  isLoading: boolean;
  closeDialog: Observable<any>;
  deleted = false;
  @Output() userDeleted = new EventEmitter<Member>();

  constructor(public dialogRef: MatDialogRef<DeleteUserComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public data: {members: Member, closeDialog: Observable<any> }) {
      this.members = data.members;
      this.closeDialog = data.closeDialog;
     }

  ngOnInit(): void {
    this.closeDialog.subscribe(() => {this.dialogRef.close(); }
    );
  }

  Delete() {
    this.isLoading = true;
    this.members.permission.role = 3;
    this.userDeleted.emit(this.members);
  }

  cancel() {
    this.dialogRef.close();
  }

}
