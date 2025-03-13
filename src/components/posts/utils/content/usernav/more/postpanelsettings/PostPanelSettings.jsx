import { PostPanelData } from './postpaneldata/PostPanelData';

const PostPanelSettings = ({
    account,
    post,
    currentAccount,
    currentAccountReposted,
}) => {
    return (
        <div className="box-shadow-morebox absolute top-0 right-0 z-10 flex w-auto max-w-[calc(384px)] flex-col rounded-xl bg-black">
            <PostPanelData
                accounts={account}
                post={post}
                currentAccount={currentAccount}
                currentAccountReposted={currentAccountReposted}
            />
        </div>
    );
};
export default PostPanelSettings;
