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

  const category = [
    {
      label: "All",
      icon: "/ic-food.svg",
    },
    {
      label: "Groceries",
      icon: "/ic-groceries.svg",
    },
    {
      label: "Beverages",
      icon: "/ic-beverages.svg",
    },
    {
      label: "Beverages",
      icon: "/ic-beverages.svg",
    },
    {
      label: "Beverages",
      icon: "/ic-beverages.svg",
    },
    {
      label: "Beverages",
      icon: "/ic-beverages.svg",
    },
  ];

  const itemReward = [
    {
      merchant: "/starbuck.png",
      merchantTitle: "Starbucks",
      title: "Monday Mood Booster Starbucks",
      point: 250,
    },
    {
      merchant: "/kfc.png",
      merchantTitle: "KFC",
      title: "KFC Value Serbu",
      point: 172,
    },
    {
      merchant: "/segari.png",
      merchantTitle: "Segari",
      title: "Poromo PASTISEGAR",
      point: 104,
    },
    {
      merchant: "/domino.png",
      merchantTitle: "Domino’s Pizza",
      title: "Domino’s: All i want for Christmas",
      point: 53,
    },
    {
      merchant: "/hokben.png",
      merchantTitle: "HokBen",
      title: "HokBen: Pay Day",
      point: 147,
    },
    {
      merchant: "/paper.png",
      merchantTitle: "Paper Lunch",
      title: "SENIN HEMAT",
      point: 104,
    },
    {
      merchant: "/matahari.png",
      merchantTitle: "Matahari",
      title: "Weekend SALE!",
      point: 74,
    },
    {
      merchant: "/kopken.png",
      merchantTitle: "Kopi Kenangan",
      title: "HARMANAS",
      point: 87,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-section-welcome bg-center sm:h-[689px] h-[380px]">
        {/* Start Header */}
        <div className="sm:mx-auto sm:w-full sm:max-w-5xl sm:p-6 p-1">
          <div className="flex sm:flex-row gap-4 flex-col items-center justify-between">
            <ImageNext
              src="/logo.svg"
              width={156.24}
              height={34}
              priority
              alt="logo"
              className="h-auto w-auto"
            />

            <div className="flex items-center sm:gap-12 gap-4">
              {navMenu.map((item) => (
                <div
                  key={item.label}
                  className="flex group flex-col justify-center items-center sm:gap-2 gap-4 cursor-pointer"
                >
                  {createElement(item.icon, {
                    className:
                      "text-white group-hover:text-blue-primary group-active:text-blue-primary/70 h-auto w-auto",
                  })}

                  <Text
                    label={item.label}
                    className="text-white text-xs sm:text-base group-hover:text-blue-primary group-active:text-blue-primary/70"
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
                    className="text-white font-light sm:text-sm text-xs text-right"
                  />
                  <Text
                    label="Wahyu Fatur Rizki"
                    className="text-white font-bold sm:text-base text-sm text-right"
                  />
                </div>

                <ImageNext
                  src="/place-holder-avatar.png"
                  width={48}
                  height={48}
                  priority
                  alt="avatar"
                  className="sm:h-[48px] h-[32px] w-auto"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End Header */}

        <div className="flex flex-col sm:mt-10 mt-2 items-center">
          <div className="flex items-center gap-1">
            <Text label="Welcome to" className="text-white text-2xl sm:text-7xl" />

            <Text label="Loyauté" className="text-blue-primary text-2xl sm:text-7xl" />
          </div>

          <Text
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            className="text-white text-center text-[10px] sm:text-base sm:mx-auto sm:w-full sm:max-w-lg sm:mt-6 mt-1"
          />

          <div className="flex items-center sm:gap-8 gap-2 sm:mt-12 mt-4">
            <Button
              type="button"
              onClick={() => {}}
              icon={<PlayStoreIcon />}
              label="Play Store"
              className="flex gap-2 border border-white justify-center items-center rounded-full sm:px-6 px-4 py-1.5 sm:text-lg text-xs text-white shadow-sm hover:border-blue-primary/70 active:border-blue-primary/90 hover:text-blue-primary/70 active:text-blue-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />

            <Button
              type="button"
              onClick={() => {}}
              icon={<AppleIcon />}
              label="Apps Store"
              className="flex gap-2 border border-white justify-center items-center rounded-full sm:px-6 px-4 py-1.5 sm:text-lg text-xs text-white shadow-sm hover:border-blue-primary/70 active:border-blue-primary/90 hover:text-blue-primary/70 active:text-blue-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
          </div>
        </div>
      </section>

      <section className="bg-pattern">
        <div className="sm:mx-auto sm:w-full sm:max-w-7xl p-6">
          <Text label="Latest Promo 🔥" className="text-black sm:text-3xl text-xl" />
          <Text
            label="Don't miss out! Limited time offer inside!"
            className="text-[#959595] sm:text-base text-xs"
          />
        </div>

        <div className="relative sm:h-[300px] h-auto">
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
            <Text label="Popular Merchant" className="text-black sm:text-3xl text-xl" />
            <Text label="view more" className="text-blue-link sm:text-base text-xs" />
          </div>

          <div className="flex items-center sm:mt-12 mt-6 justify-between">
            {merchant.map((item) => (
              <ImageNext
                key={item}
                alt="merchant"
                className="h-auto sm:w-auto w-[30px]"
                width={100}
                height={100}
                priority
                src={item}
              />
            ))}
          </div>

          <Text label="Popular Rewards" className="text-black sm:text-3xl text-xl sm:mt-12 mt-6" />
          <Text
            label="Explore our latest popular rewards!"
            className="text-[#959595] sm:text-base text-xs"
          />

          <div className="flex flex-wrap gap-6 sm:mt-12 mt-4">
            {category.map((item) => (
              <div
                key={item.label}
                className={`${
                  item.label === "All" ? "bg-blue-primary text-white" : "bg-[#F6F7FB] text-black"
                } rounded-full py-2 px-4  `}
              >
                <Text label={item.label} className="sm:text-base text-xs font-light" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 mt-12">
            {itemReward.map((item, index) => (
              <div key={item.title}>
                <ImageNext
                  alt="merchant"
                  width={228}
                  height={228}
                  priority
                  className="sm:h-[228px] h-auto w-auto"
                  src={`/reward-0${index + 1}.png`}
                />

                <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-2 gap-1.5 mt-4">
                  <ImageNext
                    alt={item.merchantTitle}
                    width={24}
                    height={24}
                    priority
                    className="h-[24px] w-auto rounded-full"
                    src={item.merchant}
                  />

                  <Text label={item.merchantTitle} className="text-black font-light text-xs" />
                </div>

                <Text label={item.title} className="text-black sm:text-base text-xs mt-2" />

                <Text
                  label="Point earned"
                  className="text-[#979797] sm:text-base text-xs mt-2 font-light"
                />

                <div className="flex items-center gap-2 mt-1">
                  <ImageNext
                    alt={item.merchantTitle}
                    width={19}
                    height={19}
                    priority
                    className="sm:h-[19px] h-[12px] w-auto"
                    src="/ic-point.svg"
                  />

                  <Text
                    label={String(item.point)}
                    className="text-black sm:text-base text-xs font-light"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-instant h-[512px] bg-center"></section>

      <section className="bg-footer h-[512px] bg-center"></section>
    </main>
  );
}
