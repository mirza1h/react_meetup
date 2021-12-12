import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setDataLoaded] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://teak-optics-306211-default-rtdb.firebaseio.com/meetups.json', {
      method: 'GET'
    }).then((response) => {
      return response.json();
    }).then((data) => {
      const meetupData = [];

      for (const key in data) {
        const meetup = {
          id: key.id,
          ...data[key]
        }
        meetupData.push(meetup);
      }

      setIsLoading(false);
      setDataLoaded(meetupData);
    })
  }, []);


  if (isLoading) {
    return <div>
      <p>Loading...</p>
    </div>
  }

  return (
    <div>
      <h1>
        All Meetups
      </h1>
      <MeetupList data={loadedData} />
    </div>
  );
}

export default AllMeetupsPage;
