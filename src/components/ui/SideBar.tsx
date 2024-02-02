"use client";
import { sidebarItems } from "@/constant/sidebarItems";
import { getUserInfo } from "@/service/authentication.service";
import { Layout, Menu } from "antd";
import Image from "next/image";
import { useState } from "react";
const { Sider } = Layout;
import logo from "@/assests/images/bank.png";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed)
  // const { role } = getUserInfo() as any;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        right: 0,
        top: 0,
      }}
    >
      <div className="flex items-center gap-4 p-6">
        <Image
          src={logo}
          alt="bank logo"
          height={50}
          width={50}
          className="bg-amber-400 rounded-full overflow-hidden "
        />
        <p className={`text-primary duration-700 ${collapsed && "hidden"}`}>Bangladesh Bank</p>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems("SUPER_ADMIN")}
      />
    </Sider>
  );
};

export default SideBar;
