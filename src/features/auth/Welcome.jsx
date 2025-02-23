import { TwitterSVG } from 'components/icons/TwitterSVG';
import { FooterData } from 'layout/sidebarRight/utils/footer/footerdata/FooterData';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <main className="flex h-full flex-auto flex-col">
      <div className="flex min-h-auto flex-auto">
        <div className="flex min-h-45 flex-auto justify-center p-0">
          <TwitterSVG className="h-1/2 max-h-[380px] max-w-full p-6" />
        </div>

        <div className="flex min-w-45 justify-center p-4">
          <div className="w-full max-w-[760px] min-w-[437px] p-5">
            <div className="my-12 min-w-0 text-[72px] leading-[77px] text-[#e7e9ea]">
              <span className="font-twitter font-twitter-bold break-words">
                Happening now
              </span>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="">
        <nav className="flex flex-wrap justify-center px-4 py-3">
          {FooterData.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="my-0.5 min-w-0 cursor-pointer pr-3 text-[13px] leading-4 font-normal tracking-[0.015em] break-words text-[#71767b] hover:underline"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
};

export default Welcome;
