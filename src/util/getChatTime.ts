function getChatTime(time: number | string) {
  const date = new Date(time);
  const now = new Date();
  if (now.toDateString() === date.toDateString()) {
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  } else {
    return date.toLocaleDateString('ko-KR', {
      dateStyle: 'short',
      timeStyle: 'medium',
    });
  }
}

export default getChatTime;
