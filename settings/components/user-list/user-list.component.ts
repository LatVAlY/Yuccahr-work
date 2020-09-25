import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member.model';
import { Permission } from './../../../../models/permission.model';
import { DeactivateAccessComponent } from './../deactivate-access/deactivate-access.component';
import { ChangePermissionComponent } from './../change-permission/change-permission.component';
import { Sort, MatSort } from '@angular/material/sort';
import { Component, Input, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteUserComponent } from '../delete-user/delete-user.component';
import { ActivatedAccessComponent } from '../activated-access/activated-access.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnChanges {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() closeDialog: Observable<any>;
  @Output() permissionChanged = new EventEmitter<Member>();
  @Output() userDeactivated = new EventEmitter<Member>();
  @Output() userActivated = new EventEmitter<Member>();
  @Output() deleteMember = new EventEmitter<Member>();
  @Input() filteredMembers;

  sortedData: Member[];
  dataSourceMembers: MatTableDataSource<Member>;
  pageSize = 20;
  sortState: Sort;
  permission: Permission[];
  displayedColumns: string[] = ['realName', 'account', 'access', 'action'];
  filterValue = '';

  constructor(private _dialog: MatDialog) { }

  ngOnChanges() {
    this.updateDataSource(this.filteredMembers);
    this.sortState = this.sort;
  }

  updateDataSource(members: Member[]) {
    this.dataSourceMembers = new MatTableDataSource(members);
    this.dataSourceMembers.sort = this.sort;
    this.dataSourceMembers.paginator = this.paginator;
  }

  onChangePermission(member: Member) {
    const dialog = this._dialog.open(ChangePermissionComponent, {
      width: '350px',
      data: {
        member,
        closeDialog: this.closeDialog
      }
    });
    dialog.componentInstance.permissionChanged.subscribe((members: Member) => {
      this.permissionChanged.emit(members);
    });
  }

  onDeactivateAccess(member: Member) {
    const dialog = this._dialog.open(DeactivateAccessComponent, {
      width: '350px',
      autoFocus: false,
      data: {
        member,
        closeDialog: this.closeDialog
      }
    });
    dialog.componentInstance.userDeactivated.subscribe((members: Member) => {
      this.userDeactivated.emit(members);
    });
  }

  onActivateAccess(member: Member) {
    const dialog = this._dialog.open(ActivatedAccessComponent, {
      width: '350px',
      autoFocus: false,
      data: {
        member,
        closeDialog: this.closeDialog
      }
    });
    dialog.componentInstance.accessActivated.subscribe((members: Member) => {
      this.userActivated.emit(members);
    });
  }

  onDelete(members: Member) {
    const dialog = this._dialog.open(DeleteUserComponent, {
      width: '350px',
      autoFocus: false,
      data: {
        members,
        closeDialog: this.closeDialog
      }
    });
    dialog.componentInstance.userDeleted.subscribe((memberDeleted: Member) => {
      this.deleteMember.emit(memberDeleted);
    });
  }
}
