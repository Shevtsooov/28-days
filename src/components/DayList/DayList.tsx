'use client'

import days from '../../data/days.json';
import Day from '../Day/Day';
import './DayList.scss';

const DayList = () => {
  return (
    <div className='dayList'>
      {days.map(day => (
        <Day day={day} key={day.id}/>
      ))}
    </div>
  );
};

export default DayList;
