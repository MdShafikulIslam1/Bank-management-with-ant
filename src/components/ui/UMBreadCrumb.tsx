import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Link from "next/link";

interface IBreadCrumbItems {
  label: string;
  link: string;
}
[];
const UMBreadCrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  const breadCrumbItems = [
    {
      title: (
        <Link href={"/"}>
          <UserOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];
  return (
    <Breadcrumb
      style={{
        margin: "1rem 0rem",
      }}
      items={breadCrumbItems}
    />
  );
};

export default UMBreadCrumb;
