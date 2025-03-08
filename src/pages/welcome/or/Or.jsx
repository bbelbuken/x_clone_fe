const Or = () => {
    return (
        <div className="my-1 flex w-[300px] max-w-[380px]">
            <div className="-mx-1 my-1 flex items-center justify-center">
                <div className="m-w-0 mx-1 flex h-[1px] w-[135px] items-center justify-center bg-[#2f3336]"></div>
                <div
                    className={`mx-1 ${location.pathname == '/' ? 'text-[15px]' : 'text-[16px]'}`}
                >
                    or
                </div>
                <div className="m-w-0 mx-1 flex h-[1px] w-[135px] items-center justify-center bg-[#2f3336]"></div>
            </div>
        </div>
    );
};

export default Or;
