import React from "react"

const Today = () => {
  const today: Date = new Date()
  const dayOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"]
  const month: number = today.getMonth() + 1
  const date: number = today.getDate()
  const day: string = dayOfWeek[today.getDay()]

  return (
    <div>
      <h1 className="text-orange-500">오늘의 캠퍼스</h1>
      <h1>오늘의 외상청</h1>
      <h1>
        {month}월 {date}일 {day}요일 소식입니다.
      </h1>
    </div>
  )
}

export default Today
