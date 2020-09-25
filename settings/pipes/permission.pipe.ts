import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'permission'})
export class PermissionPipe implements PipeTransform {
  transform(memberPermission: number) {
    switch (memberPermission) {
      case 0:
        return 'Admin';
      case 1:
        return 'Member';
      case 2:
        return 'Guest';
      default:
        return '';
    }
  }
}
