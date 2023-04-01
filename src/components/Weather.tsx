import React, { useEffect, useState } from "react"
import axios from "axios"

const Weather = () => {

  // TypeScript 특징 상으로 현재 백엔드가 JS로 구성되어있어서 직접 타입 설정
  const [data, setData] = useState<{
    temp: number
    feel_temp: number
    humidity: number
    weather: string
  } | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001") // 백엔드한테서 포트 3001번 주소로 받아올 예정
        console.log(response.data[0])
        setData(response.data[0])
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="container mt-[27px]">
      <div className="bg-[#F5F5F5] h-[78px] rounded-today mx-5 text-[16px] leading-6 text-black flex justify-start items-center">
        <div className="py-4 pl-9">
          {data ? (
            <>
              <p>현재기온: {data.temp}</p>
              <p>체감온도: {data.feel_temp}</p>
              <p>습도: {data.humidity}</p>
              <p>날씨: {data.weather}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Weather




