import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const DashboardLayout = () => {
  const { logOut } = useContext(AuthContext) || {};
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logOut();
    navigate("/");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-[#dc4b76f5] p-4 flex justify-between items-center">
        <Link className="text-xl font-bold text-white" to={"/dashboard"}>
          Dashboard
        </Link>
        <button onClick={toggleSidebar} className="text-white">
          {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-[15%] bg-[#44468e] min-h-screen md:min-h-[calc(100vh)]`}
      >
        <ul className="space-y-4 items-center p-2 text-black">
          <li className="hidden md:block">
            <Link
              className="text-xl font-bold rounded-md px-5 py-1 uppercase border text-[#B0627A]"
              to={"/dashboard"}
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to={"/dashboard/add-product"}
              className="flex items-center gap-3 bg-[#F8F8EC] rounded-md p-2"
              onClick={() => setSidebarOpen(false)}
            >
              <h1 className="text-md font-bold">Add Product</h1>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/order-list"}
              className="flex items-center gap-3 bg-[#F8F8EC] rounded-md p-2"
              onClick={() => setSidebarOpen(false)}
            >
              <h1 className="text-md font-bold">Order List</h1>
              <FaArrowRight />
            </Link>
          </li>
          <li>
            <Link
              to={"/dashboard/stock"}
              className="flex items-center gap-3 bg-[#F8F8EC] rounded-md p-2"
              onClick={() => setSidebarOpen(false)}
            >
              <h1 className="text-md font-bold">Stock</h1>
              <FaArrowRight />
            </Link>
          </li>

          <li>
            <button
              className="px-8 py-1 mt-10 bg-[#F8F8EC] border"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className={`${
          sidebarOpen ? "hidden md:block" : "block"
        } w-full md:w-[85%] pr-4`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
