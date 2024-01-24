const Footer = () => {
  return (
    <footer className="bg-white w-full ">
      <div className="mx-auto pt-16 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex gap-[10px] items-center cursor-pointer">
              <img src="/icons/Logo.svg" alt="" />
              <span className="text-[#101828] font-semibold text-2xl">
                ClearLink
                <span className="text-[#528BFF]">.</span>
              </span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-[#667085]">Product</p>

              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Overview
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Solutions
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-semibold text-[#667085]">Company</p>

              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Press
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-semibold text-[#667085]">Resources</p>

              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Events
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Help centre
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-semibold text-[#667085]">Legal</p>

              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Terms{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Privacy
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Cookies
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Licenses
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 font-semibold text-lg transition hover:text-gray-600/75"
                    href="/"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="font-semibold text-[#004EEB]">Get the app</p>

              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <img src="/images/Play store.png" alt="Play store" />
                </li>

                <li>
                  <img src="/images/App store.png" alt="App store" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 h-[120px] border-t border-gray-100 pt-12 bg-[#F9FAFB]">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <ul className="mt-4 flex justify-center items-center gap-6 sm:mt-0 sm:justify-start">
              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-[#004EEB]/75"
                >
                  <span className="sr-only">Linkedin</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-[#004EEB]/75"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-[#004EEB]/75"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-[#004EEB]/75"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-[#004EEB]/75"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-400 transition hover:text-[#004EEB]/75"
                >
                  <span className="sr-only">Youtube</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 24 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7609 4.1998C23.7609 4.1998 23.5266 2.54512 22.8047 1.81855C21.8906 0.862305 20.8688 0.857617 20.4 0.801367C17.0438 0.557617 12.0047 0.557617 12.0047 0.557617H11.9953C11.9953 0.557617 6.95625 0.557617 3.6 0.801367C3.13125 0.857617 2.10938 0.862305 1.19531 1.81855C0.473438 2.54512 0.24375 4.1998 0.24375 4.1998C0.24375 4.1998 0 6.14512 0 8.08574V9.90449C0 11.8451 0.239062 13.7904 0.239062 13.7904C0.239062 13.7904 0.473437 15.4451 1.19062 16.1717C2.10469 17.1279 3.30469 17.0951 3.83906 17.1982C5.76094 17.3811 12 17.4373 12 17.4373C12 17.4373 17.0438 17.4279 20.4 17.1889C20.8688 17.1326 21.8906 17.1279 22.8047 16.1717C23.5266 15.4451 23.7609 13.7904 23.7609 13.7904C23.7609 13.7904 24 11.8498 24 9.90449V8.08574C24 6.14512 23.7609 4.1998 23.7609 4.1998ZM9.52031 12.1123V5.36699L16.0031 8.75137L9.52031 12.1123Z"
                      fill="#98A2B3"
                    />
                  </svg>
                </a>
              </li>
            </ul>

            <p className="mt-4 text-base text-[#667085] sm:order-first sm:mt-0">
              &copy; 2023 ClearLink. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
