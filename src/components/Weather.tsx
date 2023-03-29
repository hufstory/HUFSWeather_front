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
    <div>
      {data ? (
        <>
          <p className="text-red">Temperature: {data.temp}</p>
          <p>Feels like: {data.feel_temp}</p>
          <p>Humidity: {data.humidity}</p>
          <p>Weather: {data.weather}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Weather
