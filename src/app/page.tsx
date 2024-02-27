"use client";

import ImageNext from "@/components/Image";
import Text from "@/components/Text";
import { CalendarIcon, HomeIcon, InboxIcon, ProfileIcon } from "@/style/icon";
import { createElement } from "react";

export default function Home() {
  const navMenu = [
    {
      label: "Home",
      icon: HomeIcon,
    },
    {
      label: "History",
      icon: CalendarIcon,
    },
    {
      label: "Inbox",
      icon: InboxIcon,
    },
    {
      label: "Profile",
      icon: ProfileIcon,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-section-welcome h-lvh">
        {/* Start Header */}
        <div className="sm:mx-auto sm:w-full sm:max-w-5xl p-6">
          <div className="flex items-center justify-between">
            <ImageNext
              src="/logo.svg"
              width={156.24}
              height={34}
              priority
              alt="logo"
              className="h-auto w-auto"
            />

            <div className="flex items-center gap-12">
              {navMenu.map((item) => (
                <div key={item.label} className="flex flex-col justify-center items-center gap-2">
                  {createElement(item.icon, {
                    className: "text-white hover:text-blue-primary active:text-blue-primary/70",
                  })}

                  <Text label={item.label} className="text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Header */}
      </section>
    </main>
  );
}
