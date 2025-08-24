import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Products {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

export interface SalesSummary {
  salesSummaryId: string;
  totalAmount: number;
  changePercentage?: number;
  date: string;
}

export interface PurchaseSummary {
  PurchaseSummaryId: string;
  totalPurchased: number;
  changePercentage?: number;
  date: string;
}

export interface ExpenseSummary {
  expenseSummaryId: string;
  totalExpense: number;
  date: string;
}

export interface ExpenseByCategorySummary {
  expenseByCategorySummaryId: string;
  category: string;
  amount: number;
  date: string;
}

export interface DashboardMatrics {
  popularProducts: Products[];
  salesSummary: SalesSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  reducerPath: "api",
  tagTypes: ["DashboardMatrics"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMatrics, void>({
      query: () => "/dashboard",
      providesTags: ["DashboardMatrics"],
    }),
  }),
});

export const { useGetDashboardMetricsQuery } = api;
