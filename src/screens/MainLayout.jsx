import { FaXTwitter } from "react-icons/fa6";
import { RiHome5Fill } from "react-icons/ri";
import { FaMessage } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavItems = [
  {
    icon: <RiHome5Fill />,
    name: "Home",
    path: "/",
  },
  {
    icon: <FaMessage />,
    name: "Posts",
    path: "/post",
  },
];
function MainLayout() {
  return (
    <div>
      <div className="grid grid-cols-12 h-[100vh] w-screen bg-black px-16">
        <div className="col-span-3  pt-8">
          <FaXTwitter className="lg:text-6xl md:text-6xl max-sm:text-5xl bg-white rounded hover:bg-gray-400 cursor-pointer transition-all" />
          <div className="text-white mt-8 text-2xl font-bold">
            <ul className="">
              {NavItems.map((i) => (
                <NavLink
                  key={i.name}
                  className={({ isActive }) =>
                    `flex justify-start items-center gap-2 ${isActive ? "text-blue-500" : " hover:text-gray-400"} mt-4 `
                  }
                  to={i.path}
                >
                  <span>{i.icon}</span>
                  <span>{i.name}</span>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-9 border-r-2 border-l-2 border-slate-800 overflow-y-auto">
          <ToastContainer />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
