import dayjs from 'dayjs';
const dayStrings = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const greeting = name =>
  'Welcome, ' + name + '. What a nice ' + dayStrings[dayjs().day() - 1];

export default greeting;
