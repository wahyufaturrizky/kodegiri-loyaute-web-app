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
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navMenu = [
    {
      label: "Home",
      icon: HomeIcon,
      path: "/",
    },
    {
      label: "History",
      icon: CalendarIcon,
      path: "/history",
    },
    {
      label: "Inbox",
      icon: InboxIcon,
      path: "/inbox",
    },
    {
      label: "Profile",
      icon: ProfileIcon,
      path: "/profile",
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
      {/* Start Header */}
      <div className="bg-white drop-shadow-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-5xl sm:p-6 p-1">
          <div className="flex sm:flex-row gap-4 flex-col items-center justify-between">
            <ImageNext
              src="/logo-white.svg"
              width={156.24}
              height={34}
              priority
              alt="logo"
              className="h-auto w-auto"
            />

            <div className="flex items-center sm:gap-12 gap-4">
              {navMenu.map((item) => (
                <div
                  onClick={() => router.push(item.path)}
                  key={item.label}
                  className="flex group flex-col justify-center items-center sm:gap-2 gap-4 cursor-pointer"
                >
                  {createElement(item.icon, {
                    className:
                      "text-black group-hover:text-blue-primary group-active:text-blue-primary/70 h-auto w-auto",
                  })}

                  <Text
                    label={item.label}
                    className="text-black text-xs sm:text-base group-hover:text-blue-primary group-active:text-blue-primary/70"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <NotifIcon
                style={{
                  color: "black",
                }}
              />

              <div className="flex items-center gap-2">
                <div>
                  <Text
                    label="Good Morning,"
                    className="text-black font-light sm:text-sm text-xs text-right"
                  />
                  <Text
                    label="Wahyu Fatur Rizki"
                    className="text-black font-bold sm:text-base text-sm text-right"
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
      </div>
      {/* End Header */}

      <section>
        <div className="bg-banner-starbuck h-[579px] bg-center"></div>

        <div className="flex justify-center">
          <ImageNext
            src="/content-starbuck.jpg"
            width={994}
            height={1194}
            priority
            alt="avatar"
            className="h-auto w-auto sm:w-[994px] drop-shadow-xl sm:-mt-[300px]"
          />
        </div>
      </section>

      <section className="bg-pattern">
        <div className="sm:mx-auto sm:w-full sm:max-w-7xl p-6">
          <Text
            label=" Don't miss out! Limited time offer inside! "
            className="text-black sm:text-3xl text-xl"
          />
          <Text
            label="Don't miss out! Limited time offer inside!"
            className="text-[#959595] sm:text-base text-xs"
          />

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
        </div>
      </section>

      <section className="bg-footer h-[512px] bg-center"></section>
    </main>
  );
}
