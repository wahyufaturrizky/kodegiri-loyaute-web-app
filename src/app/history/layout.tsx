import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "History",
  description: "History page",
};

export default function HistoryLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div>{children}</div>;
}
