import { PostPanelData } from './postpaneldata/PostPanelData';

const PostPanelSettings = ({ account }) => {
  return (
    <div className="absolute right-0 top-0 z-10 flex w-auto max-w-[calc(384px)] flex-col rounded-xl bg-black shadow-morebox">
      <PostPanelData account={account} />
    </div>
  );
};
export default PostPanelSettings;
