'use client'
import Link from 'next/link';
import './Day.scss';

interface DayProps {
  day: {
    id: string,
    name: string,
    videos: 
      {
        id: string,
        name: string,
        link: string,
      }[],
  }
}

const Day: React.FC<DayProps> = ({ day: { id, name, videos} }) => {
  return (
    <Link className='day' href={`/days/${id}`}>
      {name}
    </Link>
  );
};

export default Day;
