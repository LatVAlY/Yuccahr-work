import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Member } from 'src/app/models/member.model';


@Component({
  selector: 'app-user-picker',
  templateUrl: './user-picker.component.html',
  styleUrls: ['./user-picker.component.scss']
})
export class UserPickerComponent implements OnInit {

  form: FormGroup;
  @ViewChild(MatAutocompleteTrigger, { static: true }) autocomplete: MatAutocompleteTrigger;
  @Input() checkValidity: boolean;
  @Input() members: Member;
  @Input() color = 'gray';
  @Input() selectedMembers: Member[];
  @Input() disabled: boolean;
  @Output() selected = new EventEmitter<Member>();


  constructor() { }

  ngOnInit(): void { }

  select(members: Member) {
    this.selected.emit(members);
  }
  selectMemberClick(event: MatAutocompleteSelectedEvent): void {
    this.selectMembers(event.option.value);
  }
  selectMembers(members: Member): void {
    this.selectedMembers.push(members);
  }

  togglePanel() {
    if (!this.autocomplete.panelOpen && !this.disabled) {
      this.openPanel();
    } else {
      this.closePanel();
    }
  }

  openPanel() {
    setTimeout(_ => this.autocomplete.openPanel());
  }

  closePanel() {
    setTimeout(_ => this.autocomplete.closePanel());
  }

  displayMembers(members: Member) {
    return members.realName;
  }

}
