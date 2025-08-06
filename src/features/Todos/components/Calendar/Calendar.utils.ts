
import Holidays from '../../../../data/holidays.json';


export class CalendarUtils {
       static isHoliday(jDate: string) {
              return Holidays.holidays.includes(jDate)
       }

}