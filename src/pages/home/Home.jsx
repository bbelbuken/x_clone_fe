import HomeNav from './homenav/HomeNav';
import useCurrentAccount from 'hooks/useCurrentAccount';
import LoadingSpinner from 'components/loading/LoadingSpinner';
const Home = () => {
    const {
        account: currentAccount,
        error: accountError,
        isLoading: isLoadingAccount,
    } = useCurrentAccount();

    if (accountError) {
        return <div>Error: {accountError.message}</div>;
    }

    return (
        <main className="flex w-full flex-col">
            {isLoadingAccount && <LoadingSpinner />}
            <nav className="sticky flex snap-mandatory scroll-px-4 items-center justify-center">
                <div className="flex grow">
                    <HomeNav
                        currentAccount={currentAccount}
                        accountError={accountError}
                        isLoadingAccount={isLoadingAccount}
                    />
                </div>
            </nav>
        </main>
    );
};

export default Home;
