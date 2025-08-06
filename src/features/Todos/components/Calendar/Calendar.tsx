import type { HTMLAttributes } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker, { type MapDaysProps } from "react-multi-date-picker";
import holidays from "../../../../data/holidays.json";

interface ICalendarProps {
  defaultValue?: string;
}

function Calendar(props: ICalendarProps) {
  const generateHolidayDays = (
    args: MapDaysProps<false, false>
  ): HTMLAttributes<HTMLSpanElement> & {
    disabled?: boolean;
    hidden?: boolean;
  } => {
    const isHolidy = holidays.holidays.includes(args.date.format("YYYY-MM-DD"));
    return {
      disabled: isHolidy,
      title: isHolidy ? "تعطیله" : "",
      style: isHolidy
        ? {
            color: "oklch(63.7% 0.237 25.331)",
            background: "oklch(93.6% 0.032 17.717)",
          }
        : {},
    };
  };
  return (
    <DatePicker
      fullYear
      className="max-h-[350px] overflow-y-auto"
      numberOfMonths={1}
      calendar={persian}
      locale={persian_fa}
      inputClass="border border-gray-300 rounded-lg p-1 w-full"
      mapDays={generateHolidayDays}
      name="date"
      value={props.defaultValue}
    />
  );
}

export default Calendar;
