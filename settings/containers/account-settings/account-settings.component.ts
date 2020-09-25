import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member.model';
import { User } from 'src/app/models/user.model';
import { Workspace } from 'src/app/models/workspace.model';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { UserFacade } from './../../../../facade/user.facade';
import { WorkspaceFacade } from './../../../../facade/workspace.facade';
import { TimezoneConverter } from './../timezoneConv';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  preselectedLanguage: string
  preselectedTmz: String;
  selectedLg: number;
  selectedTmz: number;
  workspace: Workspace;
  isLoading = false;
  pageLeavePermitted = false;
  user: User;
  member: Member[];
  timezoneCon = new TimezoneConverter();

  constructor(
    private _dialog: MatDialog,
    // public dialogRef: MatDialogRef<AccountSettingsComponent>,
    private userFacade: UserFacade,
    private workspaceFacade: WorkspaceFacade) {
  }

  ngOnInit(): void {
    this.userFacade.getUser$().subscribe((user: User) => {
      this.user = user;

      const result = this.timezoneCon.array.find(timezone => this.user.account.timezone === timezone.timezoneID);

      if (result) { this.preselectedTmz = result.id; }
      else { this.preselectedTmz = '+01:00'; }

      this.preselectedLanguage = user.account.language.toString();
    });

    this.workspaceFacade.getWorkspace$().subscribe((workSpace: Workspace) => {
      this.workspace = workSpace;
    });
  }

  selectedLanguage(languageID) {
    this.selectedLg = languageID;
    this.user.account.language = languageID;
  }

  selectedTimezone(select: { id: string, description: string }) {
    const result = this.timezoneCon.array.find(id => select.id === id.id);
    this.user.account.timezone = result.timezoneID;
    this.selectedTmz = result.timezoneID;
  }

  save() {
    this.isLoading = true;
    setTimeout(() => {
      this.userFacade.updateUser(this.user).subscribe();
      this.isLoading = false;
      this.selectedTmz = null;
      this.selectedLg = null;
    }, 500);
  }

  canDeactivate(): boolean {
    const dialogResult = new Observable<boolean>((observer) => {
      if ((this.selectedLg || this.selectedTmz) && !this.pageLeavePermitted) {
        const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
          width: '350px',
          autoFocus: false,
          data: {
            type: 'confirm-cancel'
          }
        });
        dialogRef.afterClosed().subscribe(
          (result) => {
            observer.next(result);
          }
        );
        return dialogResult;
      } else {
        observer.next(true);
      }
    });

    return dialogResult;
  }

}
