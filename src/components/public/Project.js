import React from "react";

export const Project = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-gray-800">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Portfolio Website
          </h3>
          <p className="text-gray-700 mb-2">
            A personal portfolio built using ReactJS and Tailwind CSS with pages
            like Home, About, Projects and Contact.
          </p>
          <p className="text-gray-900 font-medium">
            <strong>Tech Used:</strong> ReactJS, Tailwind CSS
          </p>
        </div>

        
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            To-Do List App
          </h3>
          <p className="text-gray-700 mb-2">
            A simple to-do app where users can add, delete and edit tasks with a
            clean UI.
          </p>
          <p className="text-gray-900 font-medium">
            <strong>Tech Used:</strong> HTML, CSS, JavaScript
          </p>
        </div>

        
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Weather App
          </h3>
          <p className="text-gray-700 mb-2">
            Displays live temperature, humidity & weather using OpenWeather API.
          </p>
          <p className="text-gray-900 font-medium">
            <strong>Tech Used:</strong> JavaScript, OpenWeather API
          </p>
        </div>

        
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Calculator App
          </h3>
          <p className="text-gray-700 mb-2">
            A simple calculator with clean UI and basic arithmetic functions.
          </p>
          <p className="text-gray-900 font-medium">
            <strong>Tech Used:</strong> HTML, CSS, JavaScript
          </p>
        </div>

      </div>
    </div>
  );
};


