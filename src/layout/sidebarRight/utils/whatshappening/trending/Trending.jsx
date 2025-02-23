import { trendingData } from './trendingData/trendingData';
import { numberFormat } from 'utils/formatPostCount/FormatPostCount';

export const Trending = trendingData.slice(0, 4).map((item, index) => {
  if (item.isPromoted) {
    return {
      path: item.path,
      content: (
        <div className="h-auto w-[348px] hover:bg-[#ffffff09]">
          <div className="relative flex grow flex-col px-4 py-3 outline-none transition-colors">
            <div className="m-w-0 m-[1px] break-words text-[15px] font-bold leading-5 text-[#e7e9ea]">
              <span>{item.title}</span>
            </div>
            <div className="m-w-0 m-[1px] text-[15px] font-light leading-5 tracking-wide text-[#71767b]">
              <span>{item.content}</span>
            </div>
            <div className="mt-[2px] flex min-w-0 justify-start break-words text-[13px] font-light leading-5 text-[#71767b]">
              <div className="row flex items-center justify-start">
                <svg viewBox="0 0 24 24" fill="#71767b" width={13} height={13}>
                  <path d="M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z"></path>
                </svg>
                <span className="ml-1">{item.promotedBy}</span>
              </div>
            </div>
          </div>
        </div>
      ),
    };
  }

  return {
    path: item.path,
    content: (
      <div className="block h-auto w-[348px]">
        <div className="flex flex-col px-4 py-3 transition-colors hover:bg-[#ffffff09]">
          <div className="flex shrink flex-row items-baseline">
            <div className="min-w-0 break-words text-[13px] font-light leading-4 tracking-normal text-[#71767b]">
              <span>{item.title}</span>
            </div>
          </div>
          <div className="text=[15px] min-w-0 break-words font-bold leading-6 text-[#e7e9ea]">
            <span>{item.content}</span>
          </div>
          <div className="mt-[2px] min-w-0 break-words text-[12px] font-light leading-4 text-[#71767b]">
            <span>{numberFormat(item.postCount) + '\nposts'}</span>
          </div>
        </div>
      </div>
    ),
  };
});
