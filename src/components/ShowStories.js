import React from 'react';
import Story from './Story';
import '../css/showstories.css'
import useDataFetcher from '../hooks/dataFetcher';

const ShowStories = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type ? type : 'top');
  console.log(stories)

  return (
    <>
      <div className='stories-container-wrapper'>
        {isLoading && <div className='logo'><img src='/assets/rat-malware.jpeg' height='100' width='100' className='rat-malware infinite'/></div>}

        {!isLoading && 
          <div className='stories-container'>
            {stories.map(
              ({ data: story }) => story && <Story key={story.id} story={story} />
            )}
          </div>
        }
      </div>
    </>
  );
};

export default ShowStories;
