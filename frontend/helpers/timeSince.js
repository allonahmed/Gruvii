//From stackOverFlow... calculates the time from now, to the date inputed

const TimeSince = (dateString) => {
  let year = dateString.substring(0, 4);
  let month = dateString.substring(5, 7);
  let day = dateString.substring(8, 12);

  let time = new Date(year, month - 1, day);
  let time_formats = [
    [60, "s", 1], // 60
    [120, "1m", "1m"], // 60*2
    [3600, "m", 60], // 60*60, 60
    [7200, "1hr", "1hr"], // 60*60*2
    [86400, "hr", 3600], // 60*60*24, 60*60
    [172800, "1d", "1d"], // 60*60*24*2
    [604800, "d", 86400], // 60*60*24*7, 60*60*24
    [1209600, "1w", "1w"], // 60*60*24*7*4*2
    [2419200, "w", 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, "1mo", "1mo"], // 60*60*24*7*4*2
    [29030400, "mo", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, "1y", "1y"], // 60*60*24*7*4*12*2
    [2903040000, "y", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
    [58060800000, "centuries", 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];

  let today = new Date().getTime() / 1000;
  let seconds = Math.abs(today - time.getTime() / 1000),
    token = "",
    list_choice = 1;

  if (seconds == 0) {
    return "";
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = "";
    list_choice = 2;
  }
  let i = 0,
    format;
  while ((format = time_formats[i++]))
    if (seconds < format[0]) {
      if (typeof format[2] == "string") return format[list_choice];
      else
        return Math.floor(seconds / format[2]) + "" + format[1] + " " + token;
    }
  return time.toString;
};

export { TimeSince };
