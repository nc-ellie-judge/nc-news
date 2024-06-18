export const FriendlyDate = ({ created_at }) => {
  const d = new Date(created_at);
  const weekDays = ["Sun", "Mon", "Tues", "Weds", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Oct",
    "Nov",
    "Dec",
  ];

  const weekDay = weekDays[d.getUTCDay()];

  const date = d.getUTCDate();
  const year = d.getUTCFullYear();
  const month = months[d.getMonth()];

  const friendlyDate = weekDay + " " + date + " " + month + " " + year;

  return (
    <time pubdate="pubdate" dateTime="" title="">
      {friendlyDate}
    </time>
  );
};
