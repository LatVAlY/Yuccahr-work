import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Member } from 'src/app/models/member.model';


@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss']
})
export class UserFilterComponent {
  @Input() filteredMembersList: Member[];
  @Output() filteredMembers = new EventEmitter<Member[]>();

  private _filteredMembers: Member[];
  filterValue = '';
  inputValue: string;

  applyFilter(inputValue: string) {
    this.inputValue = inputValue;
    this._filteredMembers = this.filterItems();
    this.filteredMembers.emit(this._filteredMembers);
  }

  filterItems(): Member[] {
    if (!this.inputValue) {
      return this.filteredMembersList;
    }
    return this.filteredMembersList.filter((member) => {
      return this.filterWords(member.realName) || member.realName.toLowerCase().indexOf(this.inputValue.toLowerCase()) === 0;
    });
  }

  filterWords(string: string): boolean {
    const words = string.split(' ');

    const inputWords = this.inputValue.split(' ');
    for (const word of words) {
      if (this.checkBegins(word) || this.checkContains(word, inputWords)) {
        return true;
      }
    }
    return false;
  }

  checkBegins(word: string) {
    if (word.toLowerCase().indexOf(this.inputValue.toLowerCase()) === 0) {
      return true;
    }
  }

  checkContains(word: string, inputWords: string[]) {
    for (const inputWord of inputWords) {
      if (word === inputWord) {
        return true;
      }
    }
  }

}
