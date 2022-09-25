function timer(timeStart, timeNow, pauseSum) {
  const difference = Math.floor((timeNow - timeStart - pauseSum) / 1000);
  // const hours = Math.floor(difference / 3600);
  const minutes = Math.floor((difference % 3600) / 60);
  const seconds = (difference % 3600) % 60;
  const minutesDisplay = minutes >= 10 ? minutes : `0${minutes}`;
  const secondsDisplay = seconds >= 10 ? seconds : `0${seconds}`;
  return `${minutesDisplay} : ${secondsDisplay}`;
}

export default timer;
