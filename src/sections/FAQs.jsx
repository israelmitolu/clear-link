import FAQItem from "../components/FAQItem";

const FAQs = () => {
  return (
    <section className="py-[96px] min-h-[912px] w-full bg-white flex items-start justify-between gap-[96px]">
      <div>
        <h3 className="text-[#175CD3] font-semibold text-lg ">Support</h3>
        <h2 className="text-[#1D2939] font-semibold text-5xl leading-[60px]">
          FAQs
        </h2>
        <p className="text-[#667085] text-xl mt-[14px]">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please{" "}
          <u className="cursor-pointer">chat to our friendly team.</u>
        </p>
      </div>

      <div className="w-full">
        <div className="flow-root">
          <div className="-my-8 divide-y divide-gray-100">
            <FAQItem
              isOpen={true}
              title="How many participants can join a ClearLink video conference?"
              description="ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
            />

            <FAQItem
              title="Can I use ClearLink on multiple devices?"
              description="ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
            />

            <FAQItem
              title="Is ClearLink compatible with other video conferencing platforms? "
              description="ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
            />

            <FAQItem
              title="How does ClearLink ensure the security of my video conferences?"
              description="ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
            />

            <FAQItem
              title="Do I need to download any software to use ClearLink?"
              description="ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
            />

            <FAQItem
              title="What kind of customer support does ClearLink provide?"
              description="ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
