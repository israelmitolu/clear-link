const Testimonials = () => {
  return (
    <section className="min-h-[748px] max-w-[1778px] mt-8 md:mt-0 w-full bg-[#F9FAFB] ">
      <div className=" flex flex-col xl:flex-row items-center justify-between gap-[64px] px-6 xl:px-[56px] 2xl:px-[130px] py-6 md:py-[96px]">
        <div>
          <img
            src="/icons/Shopify.svg"
            alt="SHopify logo"
            className="mb-12 w-[112.79px] h-[32px]"
          />
          <img src="/icons/Stars.svg" alt="5-stars review" />
          <p className="font-medium text-3xl md:text-[44px] md:leading-[60px] my-[48px]">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </p>
          <div className="flex md:items-center flex-col md:flex-row justify-between gap-6 md:gap-0">
            <div className="flex items-center gap-4">
              <img src="/images/Avatar.png" alt="Sarah thompson" />
              <div>
                <p className="font-semibold text-base md:text-xl text-[#101828]">
                  Sarah Thompson
                </p>
                <p className="text-sm md:text-lg text-[#475467]">
                  Project Manager, Shopify
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 ">
              <img
                src="/icons/_Testiomonial carousel arrow.svg"
                alt="click left"
                className="w-14 h-14 cursor-pointer"
              />
              <img
                src="/icons/_Testiomonial carousel arrow-1.svg"
                alt="click right"
                className="w-14 h-14 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <img src="/images/Testimonial image.png" alt="Spotify testimonials" />
      </div>
    </section>
  );
};

export default Testimonials;
