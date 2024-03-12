import React from 'react';
import Day from './Day';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WeeklyCalendar = () => {
  const currentDate = new Date();
  const weekStart = currentDate.getDate() - currentDate.getDay();
  const weekDays = daysOfWeek.map((day, index) => new Date(currentDate.setDate(weekStart + index)));

  return (
    <div className="flex flex-wrap justify-around">
      {weekDays.map((day, index) => (
        <Day key={index} date={day} />
      ))}
    </div>
  );
};

export default WeeklyCalendar;