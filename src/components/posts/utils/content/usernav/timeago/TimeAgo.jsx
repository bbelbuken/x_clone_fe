import { parseISO, formatDistanceToNowStrict } from 'date-fns';

const TimeAgo = ({ postDate }) => {
  let timeAgo = '';
  if (postDate) {
    const date = parseISO(postDate);
    const timePeriod = formatDistanceToNowStrict(date);
    timeAgo = `${timePeriod}`;

    if (timePeriod.includes('minute')) {
      const minutes = timePeriod.split(' ')[0];
      timeAgo = `${minutes}m`;
    } else if (timePeriod.includes('hour')) {
      const hours = timePeriod.split(' ')[0];
      timeAgo = `${hours}h`;
    } else if (timePeriod.includes('day')) {
      const days = timePeriod.split(' ')[0];
      timeAgo = `${days}d`;
    } else if (timePeriod.includes('month')) {
      const months = timePeriod.split(' ')[0];
      timeAgo = `${months}mo`;
    } else if (timePeriod.includes('year')) {
      const years = timePeriod.split(' ')[0];
      timeAgo = `${years}y`;
    }
  }
  return <div className="hover:underline">{timeAgo}</div>;
};

export default TimeAgo;
