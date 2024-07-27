import Image from "next/image";
import { AiFillPieChart } from "react-icons/ai";

const Navigation = () => {
  return (
    <header className="container max-w-4xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User information left side */}
        <div className="flex items-center gap-2">
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            {/* Img */}
            <Image
              className="w-full h-full object-cover"
              src="https://thispersondoesnotexist.com/"
              alt="Profile Pic"
              width={40}
              height={40}
            />
          </div>

          {/* Name */}
          <small>Hi, Bob!</small>
        </div>

        {/* Right side of navigation */}
        <nav className="flex gap-2 items-center">
          <div>
            <AiFillPieChart className="text-2xl text-sky-600" />
          </div>
          <div>
            <button className="btn btn-danger">Sign Out</button>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Navigation;
