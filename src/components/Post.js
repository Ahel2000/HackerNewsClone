import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { BASE_API_URL } from '../util/constants';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import '../css/post.css'

const Link = ({ url, title }) => (
    <a href={url} target="_blank" rel="noreferrer" className='story-link'>
      {title}
    </a>
  );

const Test=()=>{
    const matches = useParams();
    console.log(matches)

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [by, setBy] = useState("")
    const [score, setScore] = useState(0)
    const [time, setTime] = useState(0)
    const [url, setUrl] = useState("")

    axios.get(`${BASE_API_URL}/item/${matches.id}.json`)
        .then(res => {
            console.log(res.data)
            setTitle(res.data.title)
            setText(res.data.text)
            setBy(res.data.by)
            setScore(res.data.score)
            setTime(res.data.time)
            setUrl(res.data.url)
        }).catch(err => {
            console.log(err)
        })

        
    return (
        <>
            <div className="story-wrapper">
                <div className='logo'><img src='/assets/rat-malware.jpeg' height='100' width='100' className='rat-malware'/></div>
                <h1 className="story-title">{title}</h1>
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
                </div>
                <br/>
                <br/>
                <p>{text}</p>
                
            </div>
            <br/>
            <br/>
        </>
    )
}

export default Test;