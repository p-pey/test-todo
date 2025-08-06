import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

function Calendar() {
  return (
    <DatePicker
      fullYear
      className="max-h-[350px] overflow-y-auto"
      numberOfMonths={1}
      calendar={persian}
      locale={persian_fa}
      mapDays={() => {
        return {
          disabled: true,
          title: "تعطیل",
          style: {
            background: "red",
            color: "white",
          },
        };
      }}
    />
  );
}

export default Calendar;
