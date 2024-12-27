import RepostedBy from './utils/repostedBy/RepostedBy';
import Content from './utils/content/Content';
import AccountIMG from './utils/accountimg/AccountIMG';
import { useAccounts } from 'hooks/useAccounts';

const Post = ({ post, postId }) => {
  const allAccounts = useAccounts();
  const account = allAccounts.find((account) => account.id === postId);

  return (
    <div className="border-b border-b-[#2f3336]" key={post.id}>
      <article className="flex shrink grow cursor-pointer flex-col px-4">
        <RepostedBy account={account} />

        <div className="flex">
          <AccountIMG account={account} />
          <Content
            content={post.content}
            account={account}
            postDate={post.date}
          />
        </div>
      </article>
    </div>
  );
};

export default Post;
