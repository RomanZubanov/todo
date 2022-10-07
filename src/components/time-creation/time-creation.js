import { useState, useEffect } from 'react';
import './time-creation.css';
import { formatDistanceToNow } from 'date-fns';

export default function TimeCreation({ timeTaskCreation }) {
  const [timeCreation, setTimeCreation] = useState(formatDistanceToNow(timeTaskCreation, { includeSeconds: true }));

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeCreation(formatDistanceToNow(timeTaskCreation, { includeSeconds: true }));
    }, 10000);
    return () => clearInterval(timerId);
  }, []);

  return <span className="description">{`Created ${timeCreation} ago`}</span>;
}
