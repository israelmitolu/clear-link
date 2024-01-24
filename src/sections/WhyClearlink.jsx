import FeatureCard from "../components/FeatureCard";

const WhyClearlink = () => {
  return (
    <section className="px-6 xl:px-[160px] py-10 md:py-[96px] min-h-[983px] max-w-[1778px] w-full bg-white">
      <div className="md:w-[60%] mb-10 md:mb-[80px]">
        <h3 className="text-[#175CD3] font-semibold text-sm md:text-lg ">
          The ClearLink Advantage
        </h3>
        <h2 className="text-[#1D2939] font-semibold text-3xl md:text-5xl md:leading-[60px]">
          Why choose ClearLink?
        </h2>
        <p className="text-[#667085] text-base md:text-xl mt-[14px]">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-[64px]">
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-[40px]">
            <FeatureCard
              icon="/icons/zap.svg"
              heading="Crystal-clear HD video"
              description="No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings."
            />
            <FeatureCard
              icon="/icons/zap-1.svg"
              heading="Noise-canceling audio"
              description="Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations."
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-[40px] mt-[60px]">
            <FeatureCard
              icon="/icons/zap-2.svg"
              heading="Scheduling made easy"
              description="Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place."
            />
            <FeatureCard
              icon="/icons/zap-3.svg"
              heading="Bank-grade security"
              description="Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders."
            />
          </div>
        </div>

        <div className="w-full md:w-auto relative">
          <img src="/images/Why Clearlink.png" alt="" />
          <img
            src="/icons/Hand-drawn arrow.svg"
            alt=""
            className="hidden md:flex absolute top-[-20%] left-[35%] transform translate-x-[-50%] translate-y-[-50%] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyClearlink;
