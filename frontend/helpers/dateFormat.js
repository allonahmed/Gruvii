//format date from "yyyy-mm-dd" to ISO date for sorting purposes...
//needed to increment the date by one because date was behind uon conversion

const DateFormat = (date) => {
  return new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000);
};
export default DateFormat;
