import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDate'
})
export class ChangeDatePipe implements PipeTransform {

  transform(value: any): any {
    const currentDate = new Date().getFullYear()
    const dateOfBirth = new Date(value).getFullYear();
    const age = currentDate - dateOfBirth
    return age;
  }

}
