import RepostedBy from './utils/repostedBy/RepostedBy';
import Content from './utils/content/Content';
import AccountIMG from './utils/accountimg/AccountIMG';
import { useAccounts } from 'hooks/useAccounts';
import { Link } from 'react-router-dom';

const Post = ({ post, postId }) => {
  const allAccounts = useAccounts();
  const account = allAccounts.find((account) => account.id === post.userId);
  const hasReposted = () => post.reactions.reposts.repost > 0;

  return (
    <Link to={`/${account.username}/status/${postId}`}>
      <div
        className="transition-colors-feed hover:box-shadow-feedbox border-b border-b-[#2f3336] hover:bg-[#ffffff08]"
        key={post.id}
      >
        <article className="flex shrink grow cursor-pointer flex-col px-4">
          {hasReposted() && <RepostedBy account={account} />}
          <div className={`flex ${hasReposted() ? 'mt-[1px]' : 'mt-[11px]'}`}>
            <AccountIMG account={account} />
            <Content
              account={account}
              postId={post.id}
              postContent={post.content}
              postDate={post.date}
              postIMG={post.media.image}
              postVideo={post.media.video}
              postReactions={post.reactions}
            />
          </div>
        </article>
      </div>
    </Link>
  );
};

export default Post;
