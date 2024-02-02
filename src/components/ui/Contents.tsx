"use client";
import { Layout, Breadcrumb } from "antd";
import UMBreadCrumb from "./UMBreadCrumb";
import Header from "./Header";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content style={{ minHeight: "100vh" }}>
      {/* <Header /> */}

      <div className="m-8">
        <UMBreadCrumb
          items={[
            {
              label: `${base}`,
              link: `/${base}`,
            },
            {
              label: "student",
              link: `/${base}/student`,
            },
          ]}
        />
        {children}
      </div>
    </Content>
  );
};

export default Contents;
