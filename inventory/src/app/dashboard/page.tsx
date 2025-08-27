"use client";
import React from "react";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import CardExpenseSummary from "./CardExpenseSummary";
import StatCard from "./StatCard";
import { CheckCircle, Package, Tag, TrendingDown, TrendingUp } from "lucide-react";

const Dashboaard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Customer & Expenses"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2023"
        detals={[
          {
            title: "New Customers",
            amunt: 345,
            IconComponant: TrendingUp,
            changePercentage: 4.07,
          },
          {
            title: "Expenses",
            amunt: "$4,300",
            IconComponant: TrendingDown,
            changePercentage: -2.07,
          },
        ]}
      />
      <StatCard
        title="Due & Pending Orders"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2023"
        detals={[
          {
            title: "Dues",
            amunt: 250,
            IconComponant: TrendingUp,
            changePercentage: 131,
          },
          {
            title: "Pending Orders",
            amunt: "147",
            IconComponant: TrendingDown,
            changePercentage: -39,
          },
        ]}
      />
      <StatCard
        title="Sales & Discount"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29 October 2023"
        detals={[
          {
            title: "Sales",
            amunt: 1000.00,
            IconComponant: TrendingUp,
            changePercentage: 20,
          },
          {
            title: "Discount",
            amunt: "$300",
            IconComponant: TrendingDown,
            changePercentage: -57,
          },
        ]}
      />
    </div>
  );
};

export default Dashboaard;
