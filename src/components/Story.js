import React from 'react';
import '../css/story.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer" className='story-link'>
    {title}
  </a>
);

const Story = ({ story: { id, by, title, kids, time, url } }) => {
  return (
    <div className='story'>
      <div className="story-title">
        <Link url={`/post/${id}`} title={title} className='story-link'/>
      </div>
      <div className="story-info">
        <FontAwesomeIcon icon={faUser} className='icon'/>
        {' '}
        <span className='story-link'>
          by{' '}
          <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
        </span>

        {' '}|{' '}

        <FontAwesomeIcon icon={faCalendarDay} className='icon'/>
        {' '}
        <span className='story-link'>
          {new Date(time * 1000).toLocaleDateString('en-US', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>

        {' '}|{' '}

        <FontAwesomeIcon icon={faComment} className='icon'/>
        {' '}
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
            className='story-link'/>
        </span>
      </div>
    </div>
  );
};

export default Story;
