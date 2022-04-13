import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NationalID',
})
export class NationalIDPipe implements PipeTransform {
  transform(value: string, format: string): string {
    let bd = value.substring(0, 7);
    if (format == 'FullDate' || format == 'DD,MM,YY') {
      bd = `${bd.substring(5, 7)}-${bd.substring(3, 5)}-19${bd.substring(1, 3)}`;
    } else if (format == 'MM') {
      bd = `Month = ${bd.substring(3, 5)}`;
    } else if (format == 'YY') {
      bd = `Year = 19${bd.substring(1, 3)}`;
    }
    return bd;
  }
}
