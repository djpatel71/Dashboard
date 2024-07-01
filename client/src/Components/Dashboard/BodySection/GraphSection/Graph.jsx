import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";
import "./Graph.css";

const Graph = () => {
  const chartRef = useRef(null);
  const [originalEarningsData, setOriginalEarningsData] = useState([]);
  const [filteredEarningsData, setFilteredEarningsData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    fetch("data.json")
     .then((response) => response.json())
     .then((data) => {
        setOriginalEarningsData(data);
        setFilteredEarningsData(data);
      });
  }, []);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: filteredEarningsData.map((data) => data.date),
        datasets: [
          {
            label: "Earnings",
            data: filteredEarningsData.map((data) => data.earning),
            borderColor: "hsl(94, 59%, 35%)",
            backgroundColor: "rgba(52, 152, 219, 0.2)",
            animation: {
              duration: 1000, // 1 second animation
              easing: "easeInOutQuart",
            },
          },
        ],
      },
      options: {
        animation: {
          duration: 1000, // 1 second animation
          easing: "easeInOutQuart",
        },
        tooltips: {
          enabled: true,
          callbacks: {
            label: (tooltipItem, data) => {
              const label = data.datasets[0].label;
              const value = tooltipItem.yLabel;
              return `${label}: ${value}`;
            },
          },
        },
      },
    });
  }, [filteredEarningsData]);

  const handleFilter = () => {
    const filtered = originalEarningsData.filter((data) => {
      const date = new Date(data.date);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
    setFilteredEarningsData(filtered);
  };

  return (
    <div className="activitySection">
      <div className="EarningsGraph">
        <h2>Client Earnings</h2>
        <div>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <button onClick={handleFilter}>Filter</button>
        </div>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default Graph;