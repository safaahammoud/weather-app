import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateUtil', pure: true})
export class DateUtilPipe implements PipeTransform {
  public transform(
    value: Date | string | number | null | undefined,
    format = 'mediumDate',
    timezone?: string,
    locale: string = 'en-US',
  ): string | null {
    if (value == null || value === '' || value !== value) return null;

    try {
      return formatDate(value, format, locale, timezone);
    } catch (error) {
      throw Error(`InvalidPipeArgument: '${value}'`);
    }
  }
}
