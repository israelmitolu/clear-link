import Button from "../components/Button";
import CheckItem from "../components/CheckItem";

const CTA = () => {
  return (
    <section className="min-h-[697px] max-w-[1778px] px-6 xl:px-[160px] py-[96px] w-full bg-white relative">
      <div className="w-full md:w-[45%]">
        <h2 className="text-3xl md:text-5xl md:leading-[60px] tracking-[-2%] font-semibold mb-8">
          Ready to clear the path to perfect communication?
        </h2>
        <div className="flex flex-col justify-center gap-5 md:pl-4 mb-10">
          <CheckItem text="30 days free trial" />
          <CheckItem text="Cancel at any time" />
          <CheckItem text="Access to all features" />
          <CheckItem text="Personalized onboarding" />
        </div>

        <div className="flex items-center gap-2">
          <Button
            text="Talk to sales"
            bgColor="bg-[#fff] border border-[#98A2B3]"
            textColor="text-[#101828]"
          />
          <Button
            text="Sign up for free"
            bgColor="bg-[#175CD3]"
            textColor="text-[#fff]"
          />
        </div>
      </div>

      <img
        src="/images/CTA Image.png"
        alt=""
        className="w-full md:w-auto h-auto mt-10 md:mt-0 md:absolute md:top-0 md:right-[-200px]"
      />
    </section>
  );
};

export default CTA;
