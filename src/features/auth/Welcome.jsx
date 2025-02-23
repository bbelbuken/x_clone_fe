import { FooterData } from 'layout/sidebarRight/utils/footer/footerdata/FooterData';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex h-full flex-auto flex-col">
      <div className="flex min-h-auto flex-auto"></div>
      <div>
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
    </div>
  );
};

export default Welcome;
