import { Link } from 'react-router-dom';
import { WelcomeFooterData } from './footerdata/WelcomeFooterData';

const WelcomeFooter = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <nav className="flex flex-wrap justify-center px-4 py-3">
        {WelcomeFooterData.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="my-1 min-w-0 cursor-pointer pr-[14.5px] text-[13px] leading-4 font-normal tracking-[0.025em] break-words text-[#71767b] hover:underline"
          >
            {item.title}
          </Link>
        ))}
        <span className="my-1 min-w-0 cursor-pointer pr-4 text-[13px] leading-4 font-normal tracking-[0.025em] break-words text-[#71767b] hover:underline">
          &copy; {year} X Corp
        </span>
      </nav>
    </div>
  );
};

export default WelcomeFooter;
