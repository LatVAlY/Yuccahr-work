import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-deactivate-access',
  templateUrl: './deactivate-access.component.html',
  styleUrls: ['./deactivate-access.component.scss']
})
export class DeactivateAccessComponent implements OnInit {
  closeDialog: Observable<any>;
  member: Member;
  isLoading: boolean;
  @Output() userDeactivated = new EventEmitter<Member>();

  constructor(public dialogRef: MatDialogRef<DeactivateAccessComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public data: {member: Member, closeDialog: Observable<any> }) {
      this.member = data.member;
      this.closeDialog = data.closeDialog;
     }

  ngOnInit(): void {
    this.closeDialog.subscribe(() => {this.dialogRef.close(); }
    );
  }

  deactivate() {
    this.isLoading = true;
    this.member.permission.activated = false;
    this.userDeactivated.emit(this.member);
  }

  cancel() {
    this.dialogRef.close();
  }

}
