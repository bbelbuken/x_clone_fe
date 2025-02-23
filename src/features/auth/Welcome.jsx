import { FooterData } from 'layout/sidebarRight/utils/footer/footerdata/FooterData';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex h-full flex-auto flex-col">
      <div className="flex min-h-auto flex-auto"></div>
      <div>
        {FooterData.map((item, index) => (
          <Link key={index} to={item.path} className="mb-0">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
