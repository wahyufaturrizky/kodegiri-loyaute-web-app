import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Voucher Detail",
  description: "Voucher Detail page",
};

export default function VoucherDetailLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <div>{children}</div>;
}
