import HomeNav from './homenav/HomeNav';
import SendPost from './sendpost/SendPost';
import PostList from './feed/PostList';
import useCurrentAccount from 'hooks/useCurrentAccount';
import { MoonLoader } from 'react-spinners';
const Home = () => {
    const {
        account: currentAccount,
        error: accountError,
        isLoading: isLoadingAccount,
    } = useCurrentAccount();
    if (isLoadingAccount) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4a5c687c] transition-opacity duration-300">
                <MoonLoader color="#1d9bf0" size={50} />
            </div>
        );
    }

    if (accountError) {
        return <div>Error: {accountError.message}</div>;
    }

    return (
        <main className="flex w-full flex-col">
            <nav className="sticky flex snap-mandatory scroll-px-4 items-center justify-center border-b border-b-[#2f3336]">
                <div className="flex grow">
                    <HomeNav />
                </div>
            </nav>
            {currentAccount && (
                <>
                    <SendPost
                        currentAccount={currentAccount}
                        accountError={accountError}
                        isLoadingAccount={isLoadingAccount}
                    />
                    <PostList currentAccount={currentAccount} />
                </>
            )}
        </main>
    );
};

export default Home;
