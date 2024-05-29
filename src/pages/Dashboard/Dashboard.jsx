import React from "react";
import Card from "../../components/Card";
import RecentOrdersTable from "../../components/RecentOrdersTable";
import SalesMetrics from "../../components/SalesMetrics";
import BestSellers from "../../components/BestSellers";
import OrdersAnalytics from "../../components/OrdersAnalytics";

const Dashboard = () => {
  return (
    <div className="flex-grow p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="">
          <Card
            color="#77B1FF"
            progress={90}
            colorSecond="#F4F7FE"
            number={1000}
            title="Total Buyers"
          />
        </div>
        <div className="">
          <Card
            color="#F70000"
            progress={60}
            colorSecond="#FFF2F2"
            number={500}
            title="Total Sellers"
          />
        </div>
        <div className="">
          <Card
            color="#FEB6B7"
            progress={70}
            colorSecond="#FEB6B74F"
            number="$45,000"
            title="Total Revenue"
          />
        </div>
      </div>
      <div className="flex items-start gap-x-4 w-full">
      <OrdersAnalytics/>
      <BestSellers/>
      </div>
      <div className="flex items-start gap-x-4 w-full">
      <RecentOrdersTable/>
      <SalesMetrics/>
      </div>

    </div>
  );
};

export default Dashboard;
