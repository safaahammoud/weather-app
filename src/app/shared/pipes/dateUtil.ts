
import { DatePipe } from '@angular/common';

export class DateUtils {
    public static format(date: string | null, format: string, timezone: string): string | null {
      return new DatePipe('en-US').transform(date, format, timezone)?.toString() || '';
    }
}
