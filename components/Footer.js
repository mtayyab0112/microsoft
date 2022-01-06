import { GlobeIcon } from "@heroicons/react/outline";
const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] h-auto">
      <div className="max-w-screen-2xl mx-5 2xl:mx-auto h-full ">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 space-y-3 ">
          <div className="pt-5">
            <h1 className="font-semibold text-gray-600 my-3">
              Microsoft Store
            </h1>
            <ol className="text-xs space-y-3 text-gray-600">
              <li className=" cursor-pointer hover:underline">
                Account profile
              </li>
              <li className=" cursor-pointer hover:underline">
                Download Center
              </li>
              <li className=" cursor-pointer hover:underline">Returns</li>
              <li className=" cursor-pointer hover:underline">
                Order tracking
              </li>
            </ol>
          </div>
          <div className="pt-5">
            <h1 className="font-semibold text-gray-600 my-3">Education</h1>
            <ol className="text-xs space-y-3 text-gray-600">
              <li className=" cursor-pointer hover:underline">
                Office 365 for schools
              </li>
            </ol>
          </div>
          <div className="pt-5">
            <h1 className="font-semibold text-gray-600 my-3">Enterprise</h1>
            <ol className="text-xs space-y-3 text-gray-600">
              <li className=" cursor-pointer hover:underline">
                Microsoft Azure
              </li>
              <li className=" cursor-pointer hover:underline">
                Microsoft partner resources
              </li>
            </ol>
          </div>
          <div className="pt-5">
            <h1 className="font-semibold text-gray-600 my-3">Developer</h1>
            <ol className="text-xs space-y-3 text-gray-600">
              <li className=" cursor-pointer hover:underline">
                Microsoft Visual Studio
              </li>
              <li className=" cursor-pointer hover:underline">
                Developer Center
              </li>
              <li className=" cursor-pointer hover:underline">Channel 9</li>
              <li className=" cursor-pointer hover:underline">
                Microsoft 365 Dev Center
              </li>
              <li className=" cursor-pointer hover:underline">
                Microsoft 365 Developer Program
              </li>
            </ol>
          </div>
          <div className="pt-5">
            <h1 className="font-semibold text-gray-600 my-3">Company</h1>
            <ol className="text-xs space-y-3 text-gray-600">
              <li className=" cursor-pointer hover:underline">Careers</li>
              <li className=" cursor-pointer hover:underline">
                About Microsoft
              </li>
              <li className=" cursor-pointer hover:underline">Company news</li>
              <li className=" cursor-pointer hover:underline">
                Privacy at Microsoft
              </li>
              <li className=" cursor-pointer hover:underline">Investors</li>
            </ol>
          </div>
        </div>

        <div className="py-10 flex flex-col md:flex-row  justify-between text-gray-600 space-y-3">
          <div className="flex text-xs space-x-3 items-center">
            <GlobeIcon className="h-7" />
            <p className=" cursor-pointer hover:underline">
              English (Pakistan)
            </p>
          </div>

          <div>
            <ol className="text-xs text-gray-600 flex flex-row flex-shrink gap-5 flex-grow flex-wrap items-center">
              <li className=" cursor-pointer hover:underline">
                Contact Microsoft
              </li>
              <li className=" cursor-pointer hover:underline">Privacy</li>
              <li className=" cursor-pointer hover:underline"> Terms of use</li>
              <li className=" cursor-pointer hover:underline">Trademarks</li>
              <li className=" cursor-pointer hover:underline">About our ads</li>
              <li className=" cursor-pointer hover:underline">
                © Microsoft 2022
              </li>
            </ol>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
