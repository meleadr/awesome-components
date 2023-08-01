import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
  transform(value: string, limit: number = 50):string {
    if(value.length <= limit){
      return value;
    }
    return value.substring(0, limit) + '...';
  }
}
