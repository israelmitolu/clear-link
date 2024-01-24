import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-[44px] max-w-[1778px] px-6 xl:px-[160px]">
      <div className="max-w-[780px] w-full">
        <h1 className="font-semibold text-5xl md:text-[64px] md:leading-[72px] tracking-[-2%] mb-6">
          Uniting the world,
          <br /> one video call at a time
        </h1>
        <p className="text-[#667085] mb-[48px] text-sm md:text-2xl">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>

        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-5">
          <Button
            bgColor="bg-[#175CD3]"
            textColor="text-[#fff]"
            text="Start your free trial"
          />
          <div className="flex items-center justify-center gap-3 cursor-pointer">
            <img src="/icons/Robot.svg" alt="AI image" />
            <p className="font-semibold text-sm md:text-lg text-[#175CD3]">
              Discover AI assistant
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-12">
          <img src="/images/Avatar group.png" alt="User images" />
          <div>
            <div className="flex items-center">
              <img
                src="/icons/Stars.svg"
                alt="5-star reviews"
                className="w-[116px] h-[20px]"
              />
              <span className="text-[#344054] font-semibold text-sm md:text-base ml-2">
                5.0
              </span>
            </div>
            <p className="text-[#475467] font-medium text-sm md:text-base">
              from 3,000+ reviews
            </p>
          </div>
        </div>
      </div>

      <img
        src="/images/Hero Image.png"
        alt="Hero Image"
        className="w-full h-auto  md:w-[584px] md:h-[488px] object-cover"
      />
    </section>
  );
};

export default Hero;
