import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="flex items-center justify-center gap-[44px]">
      <div className="max-w-[780px] w-full">
        <h1 className="font-semibold text-[64px] leading-[72px] tracking-[-2%] mb-6">
          Uniting the world,
          <br /> one video call at a time
        </h1>
        <p className="text-[#667085] mb-[48px]">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>

        <div className="flex items-center gap-5">
          <Button
            bgColor="bg-[#175CD3]"
            textColor="text-[#fff]"
            text="Start your free trial"
          />
          <div className="flex items-center justify-center gap-3 cursor-pointer">
            <img src="/icons/Robot.svg" alt="AI image" />
            <p className="font-semibold text-lg text-[#175CD3]">
              Discover AI assistant
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-12">
          <img src="/images/Avatar group.png" alt="User images" />
          <div>
            <div className="flex items-center">
              <img
                src="/icons/Stars.svg"
                alt="5-star reviews"
                className="w-[116px] h-[20px]"
              />
              <span className="text-[#344054] font-semibold text-base ml-2">
                5.0
              </span>
            </div>
            <p className="text-[#475467] font-medium text-base">
              from 3,000+ reviews
            </p>
          </div>
        </div>
      </div>

      <img
        src="/images/Hero Image.png"
        alt="Hero Image"
        className="w-[584px] h-[488px] object-cover"
      />
    </section>
  );
};

export default Hero;
