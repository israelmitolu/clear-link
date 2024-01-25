const Companies = () => {
  return (
    <div className="px-6 xl:px-[56px] 2xl:px-[130px] min-h-[313px] max-w-[1778px] w-full mt-10 md:mt-[96px] py-[96px] flex flex-col items-center justify-center">
      <p className="font-medium text-md 2xl:text-lg text-[#475467] text-center ">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="mt-12 flex items-center justify-center flex-wrap gap-[69px]">
        <img
          src="/icons/Shopify.svg"
          alt="Shopify"
          className="w-[100px] h-auto md:w-auto"
        />
        <img
          src="/icons/Coinbase.svg"
          alt="Coinbase"
          className="w-[100px] h-auto md:w-auto"
        />
        <img
          src="/icons/Dropbox.svg"
          alt="Dropbox"
          className="w-[100px] h-auto md:w-auto"
        />
        <img
          src="/icons/Intercom.svg"
          alt="Intercom"
          className="w-[100px] h-auto md:w-auto"
        />
        <img
          src="/icons/Marvel.svg"
          alt="Marvel"
          className="w-[100px] h-auto md:w-auto"
        />
        <img
          src="/icons/Automattic.svg"
          alt="Automattic"
          className="w-[100px] h-auto md:w-auto"
        />
      </div>
    </div>
  );
};

export default Companies;
