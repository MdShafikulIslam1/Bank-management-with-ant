"use client";

import { Button, Result, Row } from "antd";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <Row
      justify={"center"}
      align={"middle"}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary">
            <Link href={"/profile"}>Back Home</Link>
          </Button>
        }
      />
    </Row>
  );
};

export default ErrorPage;
