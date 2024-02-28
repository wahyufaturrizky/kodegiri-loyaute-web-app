"use client";

import Button from "@/components/Button";
import ImageNext from "@/components/Image";
import Text from "@/components/Text";
import {
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  NotifIcon,
  ProfileIcon,
  PlayStoreIcon,
  AppleIcon,
} from "@/style/icon";
import { createElement } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

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

  const merchant = [
    "/pizza.png",
    "/starbuck.png",
    "/mcd.png",
    "/domino.png",
    "/kfc.png",
    "/hokben.png",
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
                <div
                  key={item.label}
                  className="flex group flex-col justify-center items-center gap-2 cursor-pointer"
                >
                  {createElement(item.icon, {
                    className:
                      "text-white group-hover:text-blue-primary group-active:text-blue-primary/70",
                  })}

                  <Text
                    label={item.label}
                    className="text-white group-hover:text-blue-primary group-active:text-blue-primary/70"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <NotifIcon />

              <div className="flex items-center gap-2">
                <div>
                  <Text
                    label="Good Morning,"
                    className="text-white font-light text-sm text-right"
                  />
                  <Text
                    label="Wahyu Fatur Rizki"
                    className="text-white font-bold text-base text-right"
                  />
                </div>

                <ImageNext
                  src="/place-holder-avatar.png"
                  width={48}
                  height={48}
                  priority
                  alt="avatar"
                  className="h-[48px] w-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Header */}

        <div className="flex flex-col mt-40 items-center">
          <div className="flex items-center gap-1">
            <Text label="Welcome to" className="text-white text-7xl" />

            <Text label="Loyauté" className="text-blue-primary text-7xl" />
          </div>

          <Text
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            className="text-white text-center sm:mx-auto sm:w-full sm:max-w-lg mt-6"
          />

          <div className="flex items-center gap-8 mt-12">
            <Button
              type="button"
              onClick={() => {}}
              icon={<PlayStoreIcon />}
              label="Play Store"
              className="flex gap-2 border border-white justify-center items-center rounded-full px-6 py-1.5 text-lg text-white shadow-sm hover:border-blue-primary/70 active:border-blue-primary/90 hover:text-blue-primary/70 active:text-blue-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />

            <Button
              type="button"
              onClick={() => {}}
              icon={<AppleIcon />}
              label="Apps Store"
              className="flex gap-2 border border-white justify-center items-center rounded-full px-6 py-1.5 text-lg text-white shadow-sm hover:border-blue-primary/70 active:border-blue-primary/90 hover:text-blue-primary/70 active:text-blue-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
          </div>
        </div>
      </section>

      <section className="bg-pattern">
        <div className="sm:mx-auto sm:w-full sm:max-w-7xl p-6">
          <Text label="Latest Promo 🔥" className="text-black text-3xl" />
          <Text
            label="Don't miss out! Limited time offer inside!"
            className="text-[#959595] text-base"
          />
        </div>

        <div className="relative h-[300px]">
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={30}
          >
            {[1, 2, 3, 4].map((item) => (
              <SwiperSlide key={item}>
                <ImageNext alt="asds" width={800} height={400} priority src="/img-starbuck.jpg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section>
        <div className="sm:mx-auto sm:w-full sm:max-w-5xl p-6">
          <div className="flex items-center justify-between">
            <Text label="Popular Merchant" className="text-black text-3xl" />
            <Text label="view more" className="text-blue-link text-base" />
          </div>

          <div className="flex items-center mt-12 justify-between">
            {merchant.map((item) => (
              <ImageNext key={item} alt="merchant" width={100} height={100} priority src={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
