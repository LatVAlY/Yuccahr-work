import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { TimezoneDefinitions } from './timezone-definitions';

@Component({
  selector: 'app-timezone-picker',
  templateUrl: './timezone-picker.component.html',
  styleUrls: ['./timezone-picker.component.scss']
})
export class TimezonePickerComponent implements OnInit {

  @ViewChild(MatAutocompleteTrigger, { static: true }) autocompleteTrigger: MatAutocompleteTrigger;
  @ViewChild(MatAutocomplete) autocomplete: MatAutocomplete;
  @ViewChild('input') input: ElementRef;
  @ViewChild('button') button: ElementRef;

  @Input() color = 'white';
  @Input() preselection: string;
  @Output() selection = new EventEmitter<{ id: string, description: string }>();

  timezoneDefinitions = new TimezoneDefinitions();
  timezones: { id: string, description: string }[];
  selectedTimezone: { id: string, description: string } = { id: '', description: '' };
  selectedIndex: number;
  timezoneControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.timezones = this.timezoneDefinitions.timezones;
    if (this.preselection) {
      this.selectedIndex = this.timezones.findIndex(timezone => timezone.id === this.preselection);
      this.selectedTimezone = this.timezones[this.selectedIndex];
    }
    this.timezoneControl.setValue(this.selectedTimezone);
  }

  isFocused(): boolean {
    if (this.autocompleteTrigger && this.autocompleteTrigger.panelOpen) {
      return true;
    }
    if (this.input && this.button) {
      return document.activeElement === this.input.nativeElement ||
        document.activeElement === this.button.nativeElement;
    }
    return false;
  }

  selected(selection: MatAutocompleteSelectedEvent) {
    this.selectedTimezone = selection.option.value;
    this.selectedIndex = this.timezones.findIndex(timezone => timezone.id === this.selectedTimezone.id);
    this.emit();
  }

  emit() {
    if (this.selectedTimezone) {
      this.selection.emit(this.selectedTimezone);
    }
  }

  togglePanel() {
    if (!this.autocompleteTrigger.panelOpen) {
      this.openPanel();
    } else {
      this.closePanel();
    }
  }

  openPanel() {
    if (!this.autocompleteTrigger.panelOpen) {
      setTimeout(_ => {
        this.autocompleteTrigger.openPanel();
      });
      if (this.preselection) {
        setTimeout(_ => {
          this.autocomplete.panel.nativeElement.scrollTop = 32 * (this.selectedIndex - 3.5);
        });
      }
    }
  }

  closePanel() {
    setTimeout(_ => this.autocompleteTrigger.closePanel());
  }

  displayTimezone(timezone: { id: string, description: string }) {
    return timezone.description;
  }

}
