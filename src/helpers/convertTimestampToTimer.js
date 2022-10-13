function convertTimestampToTimer(timeStart, timeNow, pauseSum, timeLeft) {
  const difference =
    timeLeft > 0
      ? timeLeft - Math.floor((timeNow - timeStart - pauseSum) / 1000)
      : Math.floor((timeNow - timeStart - pauseSum) / 1000);
  if (difference < 0) {
    return 'end';
  }
  let hours = Math.floor(difference / 3600) % 24;
  let minutes = Math.floor((difference / 60) % 60);
  let seconds = difference % 60;

  minutes = `${minutes}`.padStart(2, '0');
  seconds = `${seconds}`.padStart(2, '0');
  hours = hours > 0 ? `${hours} : ` : '';
  return `${hours}${minutes} : ${seconds}`;
}

export default convertTimestampToTimer;
