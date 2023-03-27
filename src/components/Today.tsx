import React from "react"
import calendarImage from "../assets/images/calendar.png"

const Today = () => {
  const today: Date = new Date()
  const dayOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"]
  const month: number = today.getMonth() + 1
  const date: number = today.getDate()
  const day: string = dayOfWeek[today.getDay()]

  return (
    <div className="container mx-auto pt-[96px]">
      <div className="leading-[64px] text-[46px] font-bold font-GmarketMedium">
        <img className="h-[66px]" src={calendarImage}></img>
        <h1>오늘의 한국외대 글로벌캠퍼스</h1>
        <span>
          {month}월 {date}일 {day}요일 소식입니다.
        </span>
      </div>
    </div>
  )
}
export default Today
