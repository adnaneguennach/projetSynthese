import React, { useState } from "react";
import { useTable } from "react-table";
import Sidebar from "./Sidebar";
import userIcon from "../assets/userIcon.png";
import DashboardCardsMembers from "./DashboardMember";

const Members = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");
  const pageSize = 5;

  const data = React.useMemo(
    () => [
      {
        picture: userIcon,
        fullName: "John Doe",
        dayOfPayment: "2025-01-01",
        duration: "1 year",
      },
      {
        picture: userIcon,
        fullName: "Jane Smith",
        dayOfPayment: "2025-09-15",
        duration: "6 months",
      },
      {
        picture: userIcon,
        fullName: "Jane Smith",
        dayOfPayment: "2025-09-15",
        duration: "6 months",
      },
      {
        picture: userIcon,
        fullName: "Jane Smith",
        dayOfPayment: "2025-09-15",
        duration: "6 months",
      },
      {
        picture: userIcon,
        fullName: "Jane Smith",
        dayOfPayment: "2025-09-15",
        duration: "6 months",
      },
      {
        picture: userIcon,
        fullName: "Jane Smith",
        dayOfPayment: "2025-09-15",
        duration: "6 months",
      },
      {
        picture: userIcon,
        fullName: "Jane Smith",
        dayOfPayment: "2025-09-15",
        duration: "6 months",
      },
      // Add more data here
    ],
    []
  );

  const stats = [
    {
      title: "Total Members",
      value: "582",
      percentage: "2.59%",
      icon: "👥", 
      positive: true,
    },
    {
      title: "Check-ins",
      value: "10",
      percentage: "0.96%",
      icon: "📈", 
      positive: true,
    },
  ];

  const filteredData = data.filter((item) => {
    const matchesSearch = item.fullName.toLowerCase().includes(search.toLowerCase());
    const matchesDateRange =
      (!filterFrom || new Date(item.dayOfPayment) >= new Date(filterFrom)) &&
      (!filterTo || new Date(item.dayOfPayment) <= new Date(filterTo));
    return matchesSearch && matchesDateRange;
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "Picture",
        accessor: "picture",
        Cell: ({ cell: { value } }) => (
          <div className="flex justify-center">
            <img src={value} alt="User" className="w-10 h-10 rounded-full" />
          </div>
        ),
      },
      {
        Header: "Full Name",
        accessor: "fullName",
        Cell: ({ cell: { value } }) => <span className="font-medium text-gray-800">{value}</span>,
      },
      {
        Header: "Day of Payment",
        accessor: "dayOfPayment",
        Cell: ({ cell: { value } }) => <span className="text-gray-600">{value}</span>,
      },
      {
        Header: "Duration",
        accessor: "duration",
        Cell: ({ cell: { value } }) => <span className="text-gray-600">{value}</span>,
      },
      {
        Header: "Action",
        Cell: ({ row }) => (
          <div className="flex gap-2 justify-center">
            <button
              className="px-3 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              onClick={() => console.log("Edit", row.original)}
            >
              Edit
            </button>
            <button
              className="px-3 py-1 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600"
              onClick={() => console.log("Delete", row.original)}
            >
              Delete
            </button>
            <button
              className="px-3 py-1 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600"
              onClick={() => console.log("Print Receipt", row.original)}
            >
              Print Receipt
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: filteredData });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  const pageCount = Math.ceil(rows.length / pageSize);
  const paginatedRows = rows.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handlePageChange = (page) => {
    if (page >= 0 && page < pageCount) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-screen bg-gray-100 text-gray-900">
        <div className="headerContainer h-[7vh] w-full flex justify-end items-center p-4 bg-transparent">
          <div className="profileCont flex gap-2 items-center relative">
            <img src={userIcon} alt="User Icon" className="w-10 h-10 rounded-full" />
            <span className="text-blue-500 font-bold text-[15px]">
              Admin <i className="fa fa-angle-down cursor-pointer" onClick={toggleDropdown}></i>
            </span>
            {dropdownOpen && (
              <div className="absolute top-[3vh] my-2 right-[3vh] bg-white text-black shadow-lg rounded p-2">
                <button
                  className="text-red-500 text-[14px]"
                  onClick={() => console.log("Deconnexion")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        <div>
          <DashboardCardsMembers data={stats} />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-4 justify-end">
            <div className="flex items-center gap-2">
            <label htmlFor="">From : </label>
          <input
              type="date"
              value={filterFrom}
              onChange={(e) => setFilterFrom(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            /></div>
                                <div className="flex items-center gap-2">

                        <label htmlFor="">To : </label>
                        
            <input
              type="date"
              value={filterTo}
              onChange={(e) => setFilterTo(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            /></div>
            <input
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border rounded-lg"
            />
           
          </div>
          <table {...getTableProps()} className="w-full bg-white rounded-lg shadow">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} className="">
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="px-4 py-2 text-left text-md  text-blue-400 border-b text-center"
                    >
                      <span className="font-bold">{column.render("Header")}</span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {paginatedRows.length > 0 ? (
                paginatedRows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="odd:bg-gray-50 even:bg-white hover:bg-gray-100"
                    >
                      {row.cells.map((cell) => (
                        <td
                          {...cell.getCellProps()}
                          className="px-4 py-3 text-sm text-gray-800 border-b text-center"
                        >
                          {cell.render("Cell")}
                        </td>
                      ))}
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={columns.length} className="px-4 py-3 text-center text-gray-500">
                    No data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex justify-center items-center mt-4 gap-4">
            <button
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              Previous
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded-full ${
                    index === currentPage ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
                  } hover:bg-gray-400`}
                  onClick={() => handlePageChange(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageCount - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
