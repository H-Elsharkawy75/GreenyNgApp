import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterstrng: string, prodctName: string): any[] {
    const Result:any = [];
    if(!value || filterstrng ==='' || prodctName===''){
      return value;
    }
    value.forEach((a:any) => {
      if(a[prodctName].trim().toLowerCase().includes(filterstrng.toLowerCase())){
        Result.push(a);
      }
    });
    return Result;
  }

}
