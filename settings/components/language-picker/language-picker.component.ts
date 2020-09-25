import { MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { DropdownComponent } from 'src/app/shared/helpers/dropdown.component';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent extends DropdownComponent implements OnInit {

  @ViewChild(MatAutocompleteTrigger, { static: true }) autocompleteTrigger: MatAutocompleteTrigger;
  @ViewChild(MatAutocomplete) autocomplete: MatAutocomplete;
  @ViewChild('input') input: ElementRef;
  @ViewChild('button') button: ElementRef;

  @Input() preselection: string;
  @Output() selection = new EventEmitter<number>();

  languages: { id: string, language: string }[];
  selectedLanguage: { id: string, language: string } = { id: '', language: '' };
  selectedIndex: number;
  languageControl = new FormControl();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.languages = [
      { id: '0', language: 'English (US)' },
      { id: '1', language: 'German (DE)' },
      { id: '2', language: 'French (FR)' },
      { id: '3', language: 'Dutch' },
      { id: '4', language: 'Spanish (SP)' }
    ];

    if (this.preselection === '-1') {
      this.preselection = '0';
    }

    this.selectedIndex = this.languages.findIndex(language => language.id === this.preselection);
    this.selectedLanguage = this.languages[this.selectedIndex];

    this.languageControl.setValue(this.selectedLanguage);
  }

  isFocused(): boolean {
    return super.isFocused(this.autocompleteTrigger, this.input, this.button);
  }

  selected(selection: MatAutocompleteSelectedEvent) {
    this.selectedLanguage = selection.option.value;
    this.selectedIndex = this.languages.findIndex(language => language.id === this.selectedLanguage.id);
    this.emit();
  }

  emit() {
    if (this.selectedLanguage) {
      this.selection.emit(Number(this.selectedLanguage.id));
    }
  }

  displayLanguages(language: { id: string, language: string }) {
    return language.language;
  }
}
