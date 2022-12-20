function getTime(time: number) {
  const date = new Date(time);

  return date.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default getTime;
