import { TwitterSVG } from 'components/icons/TwitterSVG';
import { FooterData } from 'layout/sidebarRight/utils/footer/footerdata/FooterData';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <main className="relative flex h-full flex-auto flex-col">
      <div className="flex min-h-auto flex-auto">
        <div className="absolute top-0 right-0 bottom-0 left-0 flex min-h-45 flex-auto justify-center p-0">
          <TwitterSVG className="max-h-[380px]" />
        </div>
        <div></div>
      </div>

      <div className="">
        {FooterData.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="my-0.5 min-w-0 cursor-pointer pr-3 text-[13px] leading-4 font-normal tracking-[0.015em] break-words text-[#71767b] hover:underline"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Welcome;
