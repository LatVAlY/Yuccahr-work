import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Permission } from './../../../../models/permission.model';

@Component({
  selector: 'app-permission-picker-user',
  templateUrl: './permission-picker.component.html',
  styleUrls: ['./permission-picker.component.scss']
})
export class PermissionPickerComponent implements OnInit {

  permission: Permission[] = [
    { id: 0, name: 'Admin' },
    { id: 1, name: 'Member' },
    { id: 2, name: 'Guest' },
    { id: 3, name: 'no-access' }
  ];

  @ViewChild(MatAutocompleteTrigger, { static: true }) autocomplete: MatAutocompleteTrigger;
  @ViewChild('input') input: ElementRef;
  @ViewChild('button') button: ElementRef;

  @Input() checkValidity: boolean;
  @Input() preSelectedPermission = '';
  @Output() selected = new EventEmitter<Permission>();
  filteredPermission: Permission[];

  constructor() {
  }

  ngOnInit(): void {
    this.filteredPermission = this.permission;
    this.filteredPermission = this.filteredPermission.filter(permission => permission.id !== 3);
  }

  isFocused(): boolean {
    if (this.autocomplete && this.autocomplete.panelOpen) {
      return true;
    }
    if (this.input && this.button) {
      return document.activeElement === this.input.nativeElement ||
        document.activeElement === this.button.nativeElement;
    }
    return false;
  }

  permissionSelected(permission: string) {
    const p = this.filteredPermission.find(f => f.name === permission);
    this.selected.emit(p);
  }

  togglePanel() {
    if (!this.autocomplete.panelOpen) {
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

}

