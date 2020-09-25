import {Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef} from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'app-permission-picker',
  templateUrl: './permission-picker.component.html',
  styleUrls: ['./permission-picker.component.scss']
})
export class PermissionPickerComponent implements OnInit {

  @ViewChild(MatAutocompleteTrigger, { static: true }) autocomplete: MatAutocompleteTrigger;
  @ViewChild('input') input: ElementRef;
  @ViewChild('button') button: ElementRef;

  @Input() permissions: string[];
  @Input() preSelectedPermission = '';
  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
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
    this.selected.emit(permission);
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
