"use client";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector, useDebounced } from "@/redux/hook";
import { useAllDepositQuery } from "@/redux/api/depositApi";
import BankTable from "@/components/ui/BankTable";
import ModalUi from "@/components/ui/ModalUi";
import DepositForm from "@/components/Form/DepositForm";
import { setOpen } from "@/redux/feature/modal/modalSlice";
import { BiPlus } from "react-icons/bi";
import { useAllDWithdrawQuery } from "@/redux/api/withdrawApi";
import WithDrawForm from "@/components/Form/WithDrawForm";

const WithdrawPage = () => {
  const open = useAppSelector((state) => state.modal.open);
  const dispatch = useAppDispatch();
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  // query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const { data: response, isLoading } = useAllDWithdrawQuery({ ...query });
  console.log("response: ", response);

  const columns = [
    {
      title: "Withdraw Amount",
      dataIndex: "amount",
    },
    {
      title: "Rest Amount",
      dataIndex: "rest_amount",
    },
    {
      title: "CreatedAt",
      dataIndex: "created_at",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button
              onClick={() => console.log(data)}
              type="primary"
              className="bg-primary"
            >
              <EyeOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "home",
            link: "/profile",
          },
        ]}
      />
      <div className="flex justify-between mb-4">
        <h1 className="text-xl text-primary font-bold">Deposit History</h1>
        <Button
          className="bg-primary text-white hover:scale-105"
          type="text"
          onClick={() => dispatch(setOpen(true))}
          icon=<BiPlus className="inline-flex justify-center items-center font-bold text-xl" />
        >
          WithDraw
        </Button>
        <ModalUi isOpen={open} showOkButton={false} showCancelButton={false}>
          <WithDrawForm />
        </ModalUi>
      </div>
      <BankTable
        loading={isLoading}
        columns={columns}
        dataSource={response?.data || []}
        pageSize={size}
        totalPages={response?.meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default WithdrawPage;
