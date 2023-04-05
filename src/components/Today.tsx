import React from "react"
import calendarImage from "../assets/images/calendar.png"

const Today = () => {
  const today: Date = new Date()
  const dayOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"]
  const month: number = today.getMonth() + 1
  const date: number = today.getDate()
  const day: string = dayOfWeek[today.getDay()]

  return (
    <div className="container mt-[27px]">
      <div className="bg-[#3F97FF] shadow-default h-[78px] rounded-today mx-5 text-[16px] leading-6 text-white flex justify-start items-center">
        <div className="py-4 pl-9">
          <h1 className=" font-GmarketSansMedium">오늘의 모현</h1>
          <span className=" font-GmarketSansLight">
            {month}월 {date}일 {day}요일 소식
          </span>
        </div>
      </div>
    </div>
  )
}
export default Today
