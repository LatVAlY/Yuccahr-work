import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { Observable, Subject } from 'rxjs';
import { MemberFacade } from 'src/app/facade/member.facade';
import { Member } from 'src/app/models/member.model';
import { AddUserComponent } from './../../components/add-user/add-user.component';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  members: Member[];
  addableMembers: Member[];
  filteredMembersList: Member[];
  filteredMembers: Member[];
  sortState: Sort;
  closeDialog = new Subject();
  closeDialogObservable: Observable<any>;

  constructor(private memberFacade: MemberFacade, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.closeDialogObservable = this.closeDialog.asObservable();
    this.memberFacade.getMembers$().subscribe(
      (members: Member[]) => {
        this.members = members;
        this.filteredMembers = members;
        this.filterMembers();
      }
    );
    this.memberFacade.loadMembers().subscribe();
  }

  onAddUser() {
    const dialog = this._dialog.open(AddUserComponent, {
      minWidth: '350px',
      maxWidth: '350px',
      data: {
        members: this.addableMembers,
        closeDialog: this.closeDialogObservable
      }
    });
    dialog.componentInstance.userAdded.subscribe((member: Member) => {
      this.addNewUser(member);
    });
  }

  addNewUser(member: Member) {
    this.memberFacade.grantPermission(member).subscribe(() => {
      this.closeDialog.next();
    });
  }

  filteredMember(members: Member[]) {
    if (members) {
      this.filteredMembers = members;
    }
  }

  permissionChanged(member: Member) {
    this.memberFacade.grantPermission(member).subscribe(() => {
      this.closeDialog.next();
    });
  }

  accessActivated(member: Member) {
    this.memberFacade.grantPermission(member).subscribe(() => {
      this.closeDialog.next();
    });
  }

  accessDeactivated(member: Member) {
    this.memberFacade.grantPermission(member).subscribe(() => {
      this.closeDialog.next();
    });
  }

  delete(member: Member) {
    this.memberFacade.grantPermission(member).subscribe(() => {
      this.closeDialog.next();
    });
  }

  filterMembers() {
    if (this.filteredMembers) {
      this.filteredMembers = this.filteredMembers.filter(member => member.permission !== null && member.permission.role !== 3);
      this.filteredMembersList = this.filteredMembers;
      this.addableMembers = this.members.filter((member) => !this.filteredMembers.includes(member));
    }
  }
}

