import {
  AppstoreAddOutlined,
  AreaChartOutlined,
  CarOutlined,
  ExperimentOutlined,
  EyeOutlined,
  FileAddOutlined,
  HistoryOutlined,
  OrderedListOutlined,
  ReadOutlined,
  ScheduleOutlined,
  SettingOutlined,
  ShopOutlined,
  SolutionOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";
import {
  FaCog,
  FaCreditCard,
  FaExchangeAlt,
  FaEye,
  FaHandHoldingUsd,
  FaHome,
  FaKey,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import {
  MdAccountBalanceWallet,
  MdCompareArrows,
  MdMoneyOff,
} from "react-icons/md";

export const sidebarItems = (role: string) => {
  const className = "text-xl font-semibold";
  //............default.......................
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: (
        <Link href={`/${role}/overview`} className={className}>
          Home
        </Link>
      ),
      icon: <FaHome size={20} />,
      key: `/${role}/overview`,
    },
    {
      label: (
        <Link href={`/overview`} className={className}>
          Overview
        </Link>
      ),
      icon: <FaEye size={20} />,
      key: `overview`,
    },
    {
      label: (
        <Link href={`/deposit`} className={className}>
          Deposit
        </Link>
      ),
      icon: <MdAccountBalanceWallet size={20} />,
      key: "deposit",
    },
    {
      label: (
        <Link href={`/withdraw`} className={className}>
          Withdraw
        </Link>
      ),
      icon: <MdMoneyOff size={20} />,
      key: "withdraw",
    },
    {
      label: (
        <Link href={`/transfer-money`} className={className}>
          Transfer Money
        </Link>
      ),
      icon: <FaExchangeAlt size={20} />,
      key: "transfer-money",
    },
    {
      label: (
        <Link href={`/loan`} className={className}>
          Loan
        </Link>
      ),
      icon: <FaHandHoldingUsd size={20} />,
      key: "loan",
    },
    {
      label: (
        <Link href={`/card`} className={className}>
          Card
        </Link>
      ),
      icon: <FaCreditCard size={20} />,
      key: "card",
    },
    {
      label: <span className={className}>Setting</span>,
      key: "settings",
      icon: <FaCog size={20} />,
      children: [
        {
          label: (
            <Link href={"/profile"} className={className}>
              Profile
            </Link>
          ),
          key: "profile",
          icon: <FaUser size={20} />,
        },
        {
          label: (
            <Link href={"/change-password"} className={className}>
              Change Password
            </Link>
          ),
          key: "changePassword",
          icon: <FaKey size={16} />,
        },
      ],
    },
    {
      label: (
        <Link href={`/logout`} className={className}>
          Logout
        </Link>
      ),
      icon: <FaSignOutAlt size={20} />,
      key: "logout",
    },
  ];
  //... (other items)

  //.............Manager.......................
  const managerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/addVehicle`}>Add Vehicle</Link>,
      icon: <FileAddOutlined />,
      key: `/${role}/addVehicle`,
    },
    {
      label: <Link href={`/${role}/vehicleList`}>Vehicle List</Link>,
      icon: <UnorderedListOutlined />,
      key: `/${role}/vehicleList`,
    },
    {
      label: <Link href={`/${role}/addDriver`}>Add Driver</Link>,
      icon: <UserAddOutlined />,
      key: `/${role}/addDriver`,
    },
    {
      label: <Link href={`/${role}/driverList`}>Driver List</Link>,
      icon: <OrderedListOutlined />,
      key: `/${role}/driverList`,
    },
    {
      label: <Link href={`/${role}/createTrip`}>Create Trip</Link>,
      icon: <CarOutlined />,
      key: `/${role}/createTrip`,
    },
    {
      label: <Link href={`/${role}/manageFuel`}>Manage Fuel</Link>,
      icon: <ExperimentOutlined />,
      key: `/${role}/manageFuel`,
    },

    {
      label: "Inventory",
      key: "inventory",
      icon: <ShopOutlined />,
      children: [
        {
          label: <Link href={`/${role}/tools`}>Tools</Link>,
          key: "tools",
        },
        {
          label: <Link href={`/${role}/furniture`}>Furniture</Link>,
          key: "furniture",
        },
        {
          label: <Link href={`/${role}/vehicleWheels`}>Vehicle Wheels</Link>,
          key: "vehicleWheels",
        },
        {
          label: <Link href={`/${role}/others`}>Others</Link>,
          key: "others",
        },
      ],
    },
  ];

  //.........Driver........................
  const driverSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/tripHistory`}>Trip History</Link>,
      icon: <HistoryOutlined />,
      key: `/${role}/tripHistory`,
    },
    {
      label: "Trip Schedule",
      key: "tripSchedule",
      icon: <ScheduleOutlined />,
      children: [
        {
          label: <Link href={`/${role}/completeTrip`}>Complete Trip</Link>,
          key: "completeTrip",
        },
        {
          label: <Link href={`/${role}/upComingTrip`}>Up Coming Trip</Link>,
          key: "upComingTrip",
        },
        {
          label: <Link href={`/${role}/onGoingTrip`}>On-Going Trip</Link>,
          key: "onGoingTrip",
        },
      ],
    },

    {
      label: "Driver History",
      key: "driverHistory",
      icon: <SolutionOutlined />,
      children: [
        {
          label: <Link href={`/${role}/totalTrip`}>Total trip</Link>,
          key: "totalTrip",
        },
        {
          label: <Link href={`/${role}/shifting`}>Shifting</Link>,
          key: "shifting",
        },
        {
          label: <Link href={`/${role}/holyday`}>Holyday</Link>,
          key: "holyday",
        },
        {
          label: <Link href={`/${role}/salaryStatus`}>Salary Status</Link>,
          key: "salaryStatus",
        },
      ],
    },

    {
      label: <Link href={`/${role}/inventoryRequest`}>Inventory Request</Link>,
      icon: <ShopOutlined />,
      key: `/${role}/inventoryRequest`,
    },
  ];

  //.............Super admin.......................
  const superAdminSidebarItems: MenuProps["items"] = [
    // ...managerSidebarItems,
    // ...driverSidebarItems,
    // ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/roleManage`}>Role Manage</Link>,
      icon: <AppstoreAddOutlined />,
      key: `/${role}/roleManage`,
    },
    {
      label: <Link href={`/${role}/viewProfile`}>View Profile</Link>,
      icon: <EyeOutlined />,
      key: `/${role}/viewProfile`,
    },
  ];

  // if (role === "SUPER_ADMIN") return superAdminSidebarItems;
  // // else if (role === USER_ROLE.MANAGER) return managerSidebarItems;
  // // else if (role === USER_ROLE.DRIVER) return driverSidebarItems;
  // else {
  //   defaultSidebarItems;
  // }

  return defaultSidebarItems;
};
