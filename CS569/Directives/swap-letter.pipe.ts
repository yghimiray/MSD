import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'swapLetter',
  pure: false
})
export class SwapLetterPipe implements PipeTransform {

  transform(value: string, toReplace: string, replaceBy :string): unknown {
    let newValue: string =""
    // const v : string = value
    // console.log(toReplace)
    for(let i=0; i< value.length; i++){
      if(value[i]===toReplace){
        newValue = newValue + replaceBy
      }else{
        newValue = newValue + value[i]
      }
    }
    return newValue;
  }

}
