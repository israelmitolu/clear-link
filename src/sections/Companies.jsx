const Companies = () => {
  return (
    <div className="h-[313px] w-full mt-[96px] py-[96px] flex flex-col items-center justify-center">
      <p className="font-medium text-md 2xl:text-lg text-[#475467]">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="mt-12 flex items-center justify-center max-sm:flex-wrap gap-[69px]">
        <img src="/icons/Shopify.svg" alt="Shopify" />
        <img src="/icons/Coinbase.svg" alt="Coinbase" />
        <img src="/icons/Dropbox.svg" alt="Dropbox" />
        <img src="/icons/Intercom.svg" alt="Intercom" />
        <img src="/icons/Marvel.svg" alt="Marvel" />
        <img src="/icons/Automattic.svg" alt="Automattic" />
      </div>
    </div>
  );
};

export default Companies;
