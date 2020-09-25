import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-activated-access',
  templateUrl: './activated-access.component.html',
  styleUrls: ['./activated-access.component.scss']
})
export class ActivatedAccessComponent implements OnInit {

  closeDialog: Observable<any>;
  member: Member;
  isLoading: boolean;
  @Output() accessActivated = new EventEmitter<Member>();

  constructor(public dialogRef: MatDialogRef<ActivatedAccessComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public data: { member: Member, closeDialog: Observable<any> }) {
    this.member = data.member;
    this.closeDialog = data.closeDialog;
  }

  ngOnInit(): void {
    this.closeDialog.subscribe(() => { this.dialogRef.close(); }
    );
  }

  activate() {
    this.isLoading = true;
    this.member.permission.activated = true;
    this.accessActivated.emit(this.member);
  }

  cancel() {
    this.dialogRef.close();
  }
}
