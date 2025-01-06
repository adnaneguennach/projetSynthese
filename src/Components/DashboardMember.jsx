import React from 'react'

const DashboardCardsMembers = (props) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-100">
        {props.data.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
              {stat.icon}
            </div>
            <h3 className="text-xl font-semibold mt-3">{stat.value}</h3>
            <p className="text-sm text-gray-500">{stat.title}</p>
            <div
              className={`text-sm font-medium mt-2 ${
                stat.positive ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.percentage}{" "}
              <span>{stat.positive ? "▲" : "▼"}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default DashboardCardsMembers;