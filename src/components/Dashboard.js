import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const url = "https://klickks-backend-qpwf.onrender.com/";
  const [userData, setUserData] = useState(null);

  const username = Cookies.get("username");

  const onLogout = () => {
    if (Cookies.get("username")) {
      Cookies.remove("username");
      navigate("/login");
    }
  };

  useEffect(() => {
    const onHit = async () => {
      const cookie = Cookies.get("username");
      if (cookie) {
        const response = await fetch(url, { method: "GET" });
        const bod = await response.json();
        console.log(userData);
        setUserData(bod);
      } else {
        navigate("/login");
      }
    };
    onHit();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Welcome, {username}</h1>
        <button
          type="button"
          onClick={onLogout}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg text-center text-white">
          <h2 className="text-xl font-semibold">Active Sessions</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg text-center text-white">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg text-center text-white">
          <h2 className="text-xl font-semibold">Tasks Pending</h2>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg flex-1">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Recent Activity
        </h2>
        <ul className="text-white space-y-3">
          <li className="flex justify-between border-b border-white/30 pb-2">
            <span>Logged in successfully</span>
            <span className="text-sm text-gray-200">2 min ago</span>
          </li>
          <li className="flex justify-between border-b border-white/30 pb-2">
            <span>Viewed analytics dashboard</span>
            <span className="text-sm text-gray-200">10 min ago</span>
          </li>
          <li className="flex justify-between">
            <span>Updated profile settings</span>
            <span className="text-sm text-gray-200">30 min ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
