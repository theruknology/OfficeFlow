import React from "react";

const CompletedTable = (props) => {
  return (
    <table className="w-full sm:w-[500px] rounded-md overflow-hidden shadow-lg">
      <thead className="bg-gray-800 text-white font-normal text-sm">
        <tr>
          <th className="p-4 font-normal">Completed Tasks</th>
          <th className="p-4 font-normal">Date Completed</th>
          <th className="p-4 font-normal">Delete</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {props.data.map((item) => {
          const date = new Date(item.date);
          return (
            <tr key={item.id}>
              <td className="p-4">{item.title}</td>
              <td className="p-4">
                {date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
              <td className="p-4">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => {
                    props.onDelete(item.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17 4H3c-.55 0-1 .45-1 1v1h16V5c0-.55-.45-1-1-1zM7 15a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1zm5 0a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CompletedTable;
