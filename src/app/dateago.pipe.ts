

import { Pipe, PipeTransform } from '@angular/core';
// @ts-ignore
import moment from "moment"

@Pipe({
  name: 'dateago'
})
export class DateagoPipe implements PipeTransform {

  transform(value: any): string {
    if (value) {
      return moment(value).fromNow()
    }
    return ''
  }

}
