function setCurrentTimePosition() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay()
  const currentHour = currentDate.getHours()
  const currentMin = currentDate.getMinutes()

  // console.log({ currentDay }, { currentHour })
  const $currentTime = document.querySelector('.current-time')
  let $calendar;

  if(document.querySelector('.calendar-week')){
    $calendar = document.querySelector('.calendar-week');
  }else{
    $calendar = document.querySelector('.calendar-day');
  }
  let calendarBlockSize = $calendar.clientHeight
  let calendarInlineSize = $calendar.clientWidth

  const calendarTimezoneCellInlineSize = document.querySelector('.timeZoneCell').clientWidth;
  calendarInlineSize = calendarInlineSize - calendarTimezoneCellInlineSize

  const cellInlineSize = calendarInlineSize / 7;


  // console.log({ calendarBlockSize }, { calendarInlineSize })
  const calendarDayBlockSize = document.querySelector('.calendarDay').clientHeight
  calendarBlockSize = calendarBlockSize - calendarDayBlockSize
  // console.log({ calendarBlockSize })
  const cellBlockSize = calendarBlockSize / 24
  // console.log({ cellBlockSize }, { cellInlineSize })

  $currentTime.style.top = `${cellBlockSize * (currentHour) + calendarDayBlockSize + (cellBlockSize / 60) * currentMin}px`
  $currentTime.style.left = `${cellInlineSize * (currentDay) + calendarTimezoneCellInlineSize + 24}px`
}

window.intervalCurrentTimePosition = null


function intervalCurrentTimePosition(interval = 1000) {
  clearInterval(window.intervalCurrentTimePosition)
  setCurrentTimePosition()
  window.intervalCurrentTimePosition = setInterval(setCurrentTimePosition, interval)
}

export {
  setCurrentTimePosition,
  intervalCurrentTimePosition
}