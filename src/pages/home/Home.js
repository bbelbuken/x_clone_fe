import HomeNav from './homenav/HomeNav';

const Home = () => {
  return (
    <main className="flex w-full flex-col">
      <nav className="sticky flex snap-mandatory scroll-px-4 items-center justify-center border-b border-b-[#2f3336]">
        <div className="flex grow">
          <HomeNav />
        </div>
      </nav>
    </main>
  );
};

export default Home;
