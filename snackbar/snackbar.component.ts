import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Journey } from "src/app/models/journey";
import { NewHire } from "src/app/models/new-hire";
import { CompanyRole } from "src/app/pages/company-roles/models/company-role.model";
import { SnackbarService } from "./snackbar.service";
export interface Actions {
  id: number;
  message: string;
  action: string;
}
@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
  animations: [
    trigger("state", [
      transition(":enter", [
        style({ bottom: "-100px", transform: "translate(50%, 0%) scale(0.3)" }),
        animate(
          "150ms cubic-bezier(0, 0, 0.2, 1)",
          style({
            transform: "translate(50%, 0%) scale(1)",
            opacity: 1,
            bottom: "20px",
          })
        ),
      ]),
      transition(":leave", [
        animate(
          "150ms cubic-bezier(0.4, 0.0, 1, 1)",
          style({
            transform: "translate(50%, 0%) scale(0.3)",
            opacity: 0,
            bottom: "-100px",
          })
        ),
      ]),
    ]),
  ],
})
export class SnackbarComponent implements OnInit, OnDestroy {
  journey: Journey;
  newHire: NewHire;
  action: string;
  show: boolean;
  name: String;
  message: string;
  companyRoles: CompanyRole[];
  role: string;
  subscriptionDeleteJMessage: Subscription;
  subscriptionDuplicateMessage: Subscription;
  subscriptionSolveMessage: Subscription;
  subscriptionDeleteNHMessage: Subscription;
  subscriptionReminderMessage: Subscription;
  subscriptionDeleteCRMessage: Subscription;
  subscriptionMemberMessage: Subscription;
  subscriptionRoleMessage: Subscription;

  constructor(
    private snackbarService: SnackbarService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.subscriptionRoleMessage = this.snackbarService.snackbarStateRoleMessage.subscribe(
      (roleMessage) => {
        this.message = "Message is sent to ";
        this.action = null;
        this.setCompanyRole(
          roleMessage.companyRoles,
          roleMessage.companyRoleId
        );
        this.show = roleMessage.show;
        this.setTime();
      }
    );

    this.subscriptionMemberMessage = this.snackbarService.snackbarStateMemberMessage.subscribe(
      (memberMessage) => {
        this.show = memberMessage.show;
        this.message = "Message is sent to ";
        this.action = null;
        this.setNewHireActivity(memberMessage.newHireActivity);
        this.setTime();
      }
    );

    this.subscriptionDeleteJMessage = this.snackbarService.snackbarStateDeleteJourneyMessage.subscribe(
      (deleteJouneyMessage) => {
        this.message = " and all its data have been deleted.";
        this.action = "UNDO";
        this.setJourneyAction(deleteJouneyMessage.journey);
        this.show = deleteJouneyMessage.show;
        this.setTime();
      }
    );

    this.subscriptionDeleteNHMessage = this.snackbarService.snackbarStateDeleteNewHireMessage.subscribe(
      (deleteNewHireMessage) => {
        this.message = " and all its data have been deleted.";
        this.action = "UNDO";
        this.setNewHire(deleteNewHireMessage.newHire);
        this.show = deleteNewHireMessage.show;
        this.setTime();
      }
    );

    this.subscriptionDeleteCRMessage = this.snackbarService.snackbarStateDeleteCompanyRoleMessage.subscribe(
      (deleteCompanyRoleMessage) => {
        this.message = " has been deleted.";
        this.action = "UNDO";
        this.role = deleteCompanyRoleMessage.companyRole.name;
        this.show = deleteCompanyRoleMessage.show;
        this.setTime();
      }
    );

    this.subscriptionDuplicateMessage = this.snackbarService.snackbarStateDuplicateMessage.subscribe(
      (duplicateMessage) => {
        this.setJourneyAction(duplicateMessage.journey);
        this.message =
          " has been successfully created and is ready to be edited.";
        this.action = "EDIT";
        this.show = duplicateMessage.show;
        this.setTime();
      }
    );

    this.subscriptionSolveMessage = this.snackbarService.snackbarStateSolvedMessage.subscribe(
      (solvedMessage) => {
        this.message = "Issue solved.";
        this.action = "UNDO";
        this.show = solvedMessage.show;
        this.setTime();
      }
    );

    this.subscriptionReminderMessage = this.snackbarService.snackbarStateReminderMessage.subscribe(
      (ReminderMessage) => {
        this.message = "A reminder is set for tomorrow";
        this.action = null;
        this.show = ReminderMessage.show;
        this.setTime();
      }
    );
  }

  showSnackBar(event) {
    this.show = event.show;
  }

  setTime() {
    setTimeout(() => {
      this.show = false;
      this.role = null;
      this.action = null;
    }, 10000);
  }

  setJourneyAction(journey) {
    this.journey = journey;
    this.name = journey.title;
  }

  setNewHire(newHire) {
    this.newHire = newHire;
    this.name = newHire.fullName;
  }

  setNewHireActivity(newHireActivity) {
    this.name = newHireActivity.newHireFullName;
  }

  setCompanyRole(companyRoles, companyRoleId) {
    const companyRoleArry = companyRoles.filter((a) => a.id === companyRoleId);
    this.name = companyRoleArry[0].name;
  }

  ngOnDestroy() {
    this.subscriptionReminderMessage.unsubscribe();
    this.subscriptionSolveMessage.unsubscribe();
    this.subscriptionDuplicateMessage.unsubscribe();
    this.subscriptionDeleteJMessage.unsubscribe();
    this.subscriptionDeleteNHMessage.unsubscribe();
    this.subscriptionDeleteCRMessage.unsubscribe();
    this.subscriptionMemberMessage.unsubscribe();
    this.subscriptionRoleMessage.unsubscribe();
  }

  actionBtn(event) {
    if (this.action === "EDIT") {
      this._router.navigate(["onboarding", "journeys", this.journey.id]);
    } else if (this.action === "UNDO") {
      this.snackbarService.clickEventTrack.next({
        event,
        newHire: this.newHire,
      });
      this.show = false;
    }
  }
}
