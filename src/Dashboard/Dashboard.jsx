import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="bg-cover bg-center min-h-screen w-full mx-auto  p-6 flex rounded-lg shadow-md items-center">
      <main className="flex-1 md:p-6 bg-[#44468e]">
        <header className="flex flex-col md:flex-row justify-center items-center mb-6">
          <h2 className="md:text-2xl text-xl font-semibold mb-4 md:mb-0 text-center uppercase">
            Admin Panel
          </h2>
        </header>
        <section className="md:p-4 p-2 rounded-md shadow-md mb-6 text-center border bg-[#B0627A] text-white">
          <h3 className="text-xl font-semibold mb-4">Admin Information</h3>
          <p className="text-md">Name: Avee Chawdhury</p>
          <p className="text-md">Email: admin@gmail.com</p>
          <p className="text-md">Role: Admin</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
