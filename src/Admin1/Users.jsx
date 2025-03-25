import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../config"; // Import BASE_URL
import Navbar from "./Navbar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/api/users/allusers`);
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setError("⚠️ Failed to fetch users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const openUserModal = (user) => {
    setUserDetails(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUserDetails(null);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">👥 Users</h2>

      {/* Loading & Error Messages */}
      {loading ? (
        <p className="text-center text-gray-400">Loading users...</p>
      ) : error ? (
        <p className="text-center text-red-400">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-gray-800 text-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Full Name</th>
                <th className="p-3 text-left">Username</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-700 hover:bg-gray-700 transition"
                  >
                    <td className="p-3">{user.id}</td>
                    <td className="p-3">{user.fullName}</td>
                    <td className="p-3">{user.userName}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.phone || "N/A"}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => openUserModal(user)}
                        className="bg-blue-600 text-white px-3 py-1 rounded-lg 
                        hover:bg-blue-700 transition-all"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4 text-gray-400">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for Viewing User Details */}
      {isModalOpen && userDetails && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-96 shadow-lg border border-gray-700">
          <Navbar title="👥 User Management" />
            <p><strong>ID:</strong> {userDetails.id}</p>
            <p><strong>Full Name:</strong> {userDetails.fullName}</p>
            <p><strong>Username:</strong> {userDetails.userName}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Phone:</strong> {userDetails.phone || "N/A"}</p>
            <p><strong>Address:</strong> {userDetails.address || "N/A"}</p>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={closeModal}
                className="bg-red-600 text-white px-4 py-2 rounded-lg 
                hover:bg-red-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
