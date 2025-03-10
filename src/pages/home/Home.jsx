import HomeNav from './homenav/HomeNav';
import SendPost from './sendpost/SendPost';
import PostList from './feed/PostList';
import useCurrentAccount from 'hooks/useCurrentAccount';

const Home = () => {
    const currentAccountData = useCurrentAccount();
    const {
        account: currentAccount,
        error: accountError,
        isLoading: isLoadingAccount,
    } = currentAccountData;
    return (
        <main className="flex w-full flex-col">
            <nav className="sticky flex snap-mandatory scroll-px-4 items-center justify-center border-b border-b-[#2f3336]">
                <div className="flex grow">
                    <HomeNav />
                </div>
            </nav>
            <SendPost
                currentAccount={currentAccount}
                accountError={accountError}
                isLoadingAccount={isLoadingAccount}
            />
            <PostList currentAccount={currentAccount} />
        </main>
    );
};

export default Home;
