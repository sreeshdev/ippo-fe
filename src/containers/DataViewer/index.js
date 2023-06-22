import React, { useEffect, useState } from "react";
import { services } from "../../services";
import "./styles.scss";
import { toast } from "react-toastify";
const DataViewer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTestData();
  }, []);

  const getTestData = () => {
    //Get Data from Backend
    services.getTestData(
      {},
      () => {},
      handleGetSuccess,
      handleError,
      () => {}
    );
  };

  const handleGetSuccess = (data) => {
    setData(data.data);
  };

  const handleError = (error) => {
    toast.error(error.response.data.message);
  };

  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Password</th>
            <th>Type</th>
            <th>Required Length</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ value, type, requiredLength }) => (
            <tr>
              <td>{value}</td>
              <td>{type}</td>
              <td>{requiredLength}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataViewer;
