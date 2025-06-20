"use client";
import { usePathname } from "@/i18n/routing";
import { PropsWithChildren } from "react";

const BookingNavbarTop = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  if (pathname.includes("/booking") && !pathname.includes("/bookings")) {
    if (
      !pathname.includes("your-details") &&
      !pathname.includes("confirmation")
    ) {
      return (
        <div className="z-50 md:sticky top-[76px] md:top-[55px] py-3 md:shadow-md bg-background w-full border-b shadow-sm">
          <div className="container w-full py-3">{children}</div>
        </div>
      );
    }
  }
  return null;
};
export default BookingNavbarTop;
