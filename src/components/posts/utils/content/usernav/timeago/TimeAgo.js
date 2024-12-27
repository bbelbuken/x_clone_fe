import { parseISO, formatDistanceToNowStrict } from 'date-fns';

const TimeAgo = ({ postDate }) => {
  let timeAgo = '';
  if (postDate) {
    const date = parseISO(postDate);
    const timePeriod = formatDistanceToNowStrict(date);
    timeAgo = `${timePeriod} ago`;
  }
  return <div className="hover:underline">{timeAgo}</div>;
};

export default TimeAgo;
