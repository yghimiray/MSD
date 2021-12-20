import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonepipe'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, ext: string): unknown {
    let phone : string = value;
    let regexp = /\d/g
    const newPhone : any = phone.match(regexp)
    return ext+newPhone.join('');
  }
  
}
