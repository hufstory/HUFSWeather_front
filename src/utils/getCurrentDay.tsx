export const getCurrentDay = () => {
  const getNextDays = (numDays: number): string[] => {
    const dayOfWeekEng: string[] = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thr",
      "Fri",
      "Sat",
    ];
    const today: number = new Date().getDay();
    const nextDays: string[] = [];

    for (let i = 1; i <= numDays; i++) {
      const nextDay = (today + i) % 7;
      nextDays.push(dayOfWeekEng[nextDay]);
    }

    return nextDays;
  };

  const today: Date = new Date();
  const year: number = today.getFullYear();
  const dayOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  const month: number = today.getMonth() + 1;
  const date: number = today.getDate();
  const day: string = dayOfWeek[today.getDay()];
  const nextDays: string[] = getNextDays(3);

  return {
    year,
    dayOfWeek,
    month,
    date,
    day,
    nextDays,
  };
};
