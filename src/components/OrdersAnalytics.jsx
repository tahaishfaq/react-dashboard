import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from "chart.js";

// Register the necessary components with ChartJS
ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const OrdersAnalytics = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Dataset 1",
                data: [40, 35, 50, 75, 60, 80, 70],
                borderColor: "#36A2EB",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                fill: true,
                tension: 0.4,
            },
            {
                label: "Dataset 2",
                data: [30, 25, 40, 60, 50, 65, 55],
                borderColor: "#FFA31A",
                backgroundColor: "rgba(255, 165, 26, 0.2)",
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title: (context) => {
                        const date = context[0].label;
                        return `Date: ${date}`;
                    },
                    label: (context) => {
                        const value = context.raw;
                        return `Value: $${value.toFixed(2)}`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 120,
            },
        },
    };

    return (
        <div className="w-2/3 px-4 py-4 mt-4 bg-white rounded-xl font-poppins">
            <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
            <Line data={data} options={options} />
        </div>

    );
};

export default OrdersAnalytics;
