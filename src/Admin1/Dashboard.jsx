import React, { useEffect, useState } from "react";
import { FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const [stats, setStats] = useState({ orders: 0, products: 0, users: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState({
    line: { labels: [], datasets: [] },
    bar: { labels: [], datasets: [] },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await axios.get("http://localhost:5000/api/users/allusers");
        setStats({ users: usersRes.data.length || 0 });
      } catch (err) {
        console.error("Error fetching data:", err.message);
        setError("⚠️ Failed to load data. Please check the API connection.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin height="50" width="50" color="blue" ariaLabel="loading" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-5 text-lg font-semibold">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-4xl font-bold mb-8 text-center mt-6">📊 Admin Dashboard</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Orders", value: stats.orders, icon: <FaShoppingCart />, color: "bg-blue-600" },
          { title: "Products", value: stats.products, icon: <FaBox />, color: "bg-green-600" },
          { title: "Users", value: stats.users, icon: <FaUsers />, color: "bg-orange-600" },
        ].map((card, index) => (
          <div
            key={index}
            className={`p-6 shadow-lg rounded-xl flex items-center space-x-4 ${card.color} text-white transition-transform transform hover:scale-105`}
          >
            <div className="text-5xl">{card.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-3xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">📈 Orders Over Time</h3>
          <Line data={chartData.line} />
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">📊 Product Sales</h3>
          <Bar data={chartData.bar} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
