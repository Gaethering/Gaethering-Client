// TODO: 실시간 업데이트 기능 추가

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const isDay = (time: number) => Math.abs(time) >= DAY;
const isHour = (time: number) => Math.abs(time) >= HOUR;
const isMinute = (time: number) => Math.abs(time) >= MINUTE;

const getDays = (time: number) => Math.round(time / DAY);
const getHours = (time: number) => Math.round(time / HOUR);
const getMinutes = (time: number) => Math.round(time / MINUTE);
const getSeconds = (time: number) => Math.round(time / SECOND);

function useRelativeTime(time: string, locale = 'ko-KR'): string {
  const date = parseInt(time);
  const now = Date.now();
  const relativeTime = date - now;

  const timeFormat = (value: number, unit: Intl.RelativeTimeFormatUnit) =>
    new Intl.RelativeTimeFormat(locale, { style: 'short' }).format(value, unit);

  if (isDay(relativeTime)) {
    return timeFormat(getDays(relativeTime), 'day');
  }

  if (isHour(relativeTime)) {
    return timeFormat(getHours(relativeTime), 'hour');
  }

  if (isMinute(relativeTime)) {
    return timeFormat(getMinutes(relativeTime), 'minute');
  }

  return timeFormat(getSeconds(relativeTime), 'second');
}

export default useRelativeTime;
