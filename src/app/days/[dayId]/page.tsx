import days from '../../../data/days.json';
import './DayPage.scss';

const DayPage = ({
  params,
}: {
  params: {
    dayId: string;
  };
}) => {

  const day = days.find(dayFromData => dayFromData.id === params.dayId);

  return (
    <div className='dayPage'>
      <h1 className='dayPage__title'>{day?.name}</h1>
      {day?.videos.map(video => (
        <div key={video.id} className='video'>
          <h3>{video.name}</h3>
          <iframe src={video.link} className='video__frame'></iframe>
        </div>
      ))}
    </div>
  );
};

export default DayPage;
