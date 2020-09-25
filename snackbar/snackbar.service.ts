import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Journey } from "src/app/models/journey";
import { NewHire } from "src/app/models/new-hire";
import { NewHireActivity } from "src/app/models/new-hire-activity.model";
import { CompanyRole } from "src/app/pages/company-roles/models/company-role.model";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  public clickEventTrack = new Subject<any>();
  public clickEventTrackState = this.clickEventTrack.asObservable();

  private snackbarSubject = new Subject<any>();
  public snackbarState = this.snackbarSubject.asObservable();

  private snackbarSubjectRoleMessage = new Subject<any>();
  public snackbarStateRoleMessage = this.snackbarSubjectRoleMessage.asObservable();

  private snackbarSubjectMemberMessage = new Subject<any>();
  public snackbarStateMemberMessage = this.snackbarSubjectMemberMessage.asObservable();

  private snackbarSubjectDuplicateMessage = new Subject<any>();
  public snackbarStateDuplicateMessage = this.snackbarSubjectDuplicateMessage.asObservable();

  private snackbarSubjectDeleteJourneyMessage = new Subject<any>();
  public snackbarStateDeleteJourneyMessage = this.snackbarSubjectDeleteJourneyMessage.asObservable();

  private snackbarSubjectDeleteNewHireMessage = new Subject<any>();
  public snackbarStateDeleteNewHireMessage = this.snackbarSubjectDeleteNewHireMessage.asObservable();

  private snackbarSubjectDeleteCompanyRoleMessage = new Subject<any>();
  public snackbarStateDeleteCompanyRoleMessage = this.snackbarSubjectDeleteCompanyRoleMessage.asObservable();

  private snackbarSubjectSolvedMessage = new Subject<any>();
  public snackbarStateSolvedMessage = this.snackbarSubjectSolvedMessage.asObservable();

  private snackbarSubjectReminderMessage = new Subject<any>();
  public snackbarStateReminderMessage = this.snackbarSubjectReminderMessage.asObservable();
  constructor() {}

  showRoleMessage(companyRoleId: number, companyRoles: CompanyRole[]) {
    this.snackbarSubjectRoleMessage.next({
      show: true,
      companyRoleId,
      companyRoles,
    });
  }

  showMemberMessage(newHireActivity: NewHireActivity) {
    this.snackbarSubjectMemberMessage.next({
      show: true,
      newHireActivity,
    });
  }

  showDeleteJourneyMessage(journey: Journey) {
    this.snackbarSubjectDeleteJourneyMessage.next({
      show: true,
      journey,
    });
  }

  showDeleteCompanyRoleMessage(companyRole: CompanyRole) {
    this.snackbarSubjectDeleteCompanyRoleMessage.next({
      show: true,
      companyRole,
    });
  }

  showDeleteNewHireMessage(newHire: NewHire) {
    this.snackbarSubjectDeleteNewHireMessage.next({
      show: true,
      newHire,
    });
  }

  showSolvedMessage(activityId: number) {
    this.snackbarSubjectSolvedMessage.next({
      show: true,
      activityId,
    });
  }

  showDuplicateMessage(journey: Journey) {
    this.snackbarSubjectDuplicateMessage.next({
      show: true,
      journey,
    });
  }

  showReminderMessage() {
    this.snackbarSubjectReminderMessage.next({ show: true });
  }
}
