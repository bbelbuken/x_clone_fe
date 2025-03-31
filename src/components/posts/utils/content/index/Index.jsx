import { convertUrlsToLinks } from 'utils/formatBioLinks/FormatBioLinks';

const Index = ({ postContent }) => {
    return (
        <div className="font-twitter max-w-full min-w-0 text-[15px] leading-5 tracking-[0.010em] break-words">
            {convertUrlsToLinks(postContent)}
        </div>
    );
};

export default Index;
