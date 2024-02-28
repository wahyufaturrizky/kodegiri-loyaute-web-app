"use client";

import ImageNext from "@/components/Image";
import Text from "@/components/Text";
import {
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  NotifIcon,
  ProfileIcon,
  SettingIcon,
} from "@/style/icon";
import { createElement } from "react";
import { useRouter } from "next/navigation";
import type { TableProps, TabsProps } from "antd";

import { Table, Tabs } from "antd";

interface DataType {
  title: string;
  img: string;
  date: string;
  time: string;
  point: number;
}

export default function History() {
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

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Merchant",
      dataIndex: "title",
      key: "title",
      render: (title, record: DataType) => (
        <div className="flex gap-2 items-center">
          <ImageNext
            src={record.img}
            width={40}
            height={40}
            priority
            alt="avatar"
            className="h-auto w-auto"
          />
          <Text label={title} className="font-semibold" />
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => text,
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (text) => text,
    },
    {
      title: "Earned Points",
      dataIndex: "point",
      key: "point",
      render: (text) => (
        <Text
          label={`+${text} Point`}
          className="text-[#39B963] inline-block py-1.5 px-6 rounded-full bg-[#F0FAF3]"
        />
      ),
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: () => <SettingIcon />,
    },
  ];

  const data: DataType[] = [
    {
      title: "Starbucks",
      img: "/img-starbucks.svg",
      date: "25 December 2023",
      time: "10:24",
      point: 50,
    },
    {
      title: "Circooles",
      img: "/img-circooles.svg",
      date: "25 December 2023",
      time: "10:24",
      point: 50,
    },
    {
      title: "Command+R",
      img: "/img-command.svg",
      date: "25 December 2023",
      time: "10:24",
      point: 50,
    },
    {
      title: "Hourglass",
      img: "/img-hourglass.svg",
      date: "25 December 2023",
      time: "10:24",
      point: 50,
    },
    {
      title: "Layers",
      img: "/img-layers.svg",
      date: "25 December 2023",
      time: "10:24",
      point: 50,
    },
    {
      title: "Quotient",
      img: "/img-quotient.svg",
      date: "25 December 2023",
      time: "10:24",
      point: 50,
    },
    {
      title: "Sisyphus",
      img: "/img-sisyphus.svg",
      date: "25 December 2023",
      time: "10:24",
      point: 50,
    },
  ];

  const onChangeTab = (key: string) => {
    console.log(key);
  };

  const itemsTab: TabsProps["items"] = [
    {
      key: "1",
      label: "Earned",
      children: (
        <Table
          title={() => {
            return (
              <div>
                <Text label="Company List Lorem Ipsum" className="text-black text-lg" />
                <Text label="These companies consecture ipsum" className="text-black text-xs" />
              </div>
            );
          }}
          columns={columns}
          dataSource={data}
          scroll={{ x: 900 }}
        />
      ),
    },
    {
      key: "2",
      label: "Reedem",
      children: (
        <Table
          title={() => {
            return (
              <div>
                <Text label="Company List Lorem Ipsum" className="text-black text-lg" />
                <Text label="These companies consecture ipsum" className="text-black text-xs" />
              </div>
            );
          }}
          columns={columns}
          dataSource={data}
        />
      ),
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
        <div className="sm:mx-auto sm:w-full sm:max-w-5xl p-6">
          <Text label="Point History" className="text-black sm:text-3xl text-xl" />
          <Text
            label="View your earned and reedemed point"
            className="text-[#959595] sm:text-base text-xs"
          />

          <Tabs defaultActiveKey="1" items={itemsTab} onChange={onChangeTab} />
        </div>
      </section>

      <section className="bg-footer h-[512px] bg-center"></section>
    </main>
  );
}
