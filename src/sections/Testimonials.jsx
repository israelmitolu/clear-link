const Testimonials = () => {
  return (
    <section className="h-[748px] w-full bg-[#F9FAFB] flex items-center justify-between gap-[64px]">
      <div>
        <img
          src="/icons/Shopify.svg"
          alt="SHopify logo"
          className="mb-12 w-[112.79px] h-[32px]"
        />
        <img src="/icons/Stars.svg" alt="5-stars review" />
        <p className="font-medium text-[44px] leading-[60px] my-[48px]">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/images/Avatar.png" alt="Sarah thompson" />
            <div>
              <p className="font-semibold text-xl text-[#101828]">
                Sarah Thompson
              </p>
              <p className="text-lg text-[#475467]">Project Manager, Shopify</p>
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
    </section>
  );
};

export default Testimonials;
