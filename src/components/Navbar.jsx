import Navlink from "./Navlink";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="md:h-[84px] w-[90%] max-w-[1778px] mx-auto rounded-[100px] bg-[#F2F4F7] border border-[#D0D5DD] py-4 px-8 flex items-center justify-between mt-[40px] mb-[40px] md:mb-[100px]">
      <div className="flex gap-[10px] items-center cursor-pointer">
        <img src="/icons/Logo.svg" alt="" />
        <span className="text-[#101828] font-semibold text-lg md:text-2xl">
          ClearLink
          <span className="text-[#528BFF]">.</span>
        </span>
      </div>

      <ul className="hidden md:flex items-center gap-10">
        <Navlink text="Products" hasDropdown />
        <Navlink text="Solutions" hasDropdown />
        <Navlink text="Resources" hasDropdown />
        <Navlink text="Pricing" />
      </ul>

      <div className="hidden md:flex items-center gap-2">
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
    </nav>
  );
};

export default Navbar;
