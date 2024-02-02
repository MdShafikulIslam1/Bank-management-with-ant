"use client";
import { UserOutlined } from "@ant-design/icons";
import { SubmitHandler } from "react-hook-form";
import { Row, Col, Button, message } from "antd";
import Image from "next/image";
import loginImage from "../../assests/images/login-image.png";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/service/authentication.service";
import logo from "@/assests/images/bank.png";
import { useCallback, useState } from "react";

interface IFormValues {
  id: string;
  password: string;
}
type Variant = "LOGIN" | "REGISTER";

const LoginPage = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);
  const onSubmit: SubmitHandler<IFormValues> = async (data: any) => {
    try {
      console.log("login data", data);
      // const res = await userLogin({ ...data }).unwrap();
      // if (res?.accessToken) {
      //   message.success("User logged in successfully");
      //   router.push("/profile");
      // }
      // storeUserInfo({ accessToken: res?.accessToken });
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-2 items-center justify-center h-screen w-full p-4 bg-background">
      <div className="flex justify-center items-center w-full">
        <Image src={loginImage} alt="login image" width={500} priority />
      </div>
      <div className="w-full flex justify-center md:justify-start items-center">
        <div>
          <Image
            src={logo}
            alt="messenger logo"
            height={100}
            width={100}
            className="mx-auto w-auto"
          />
          <h1 className="text-primary text-2xl font-bold my-4 text-center ">
            Sign in your account
          </h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <FormInput
                  name="user_name"
                  type="text"
                  label="User Name"
                  size="large"
                  placeHolder="Enter your username"
                  prefix=<UserOutlined />
                  allowClear={true}
                />
              </div>

              <div className="my-3">
                <FormInput
                  name="password"
                  type="password"
                  label="User Password"
                  placeHolder="Enter Correct Password"
                  size="large"
                />
              </div>

              <div className="flex justify-end mb-2">
                <span className="underline text-primary text-end cursor-pointer">
                  Forgot Password ?
                </span>
              </div>
              <Button
                className="font-bold"
                block
                color="primary"
                type="primary"
                htmlType="submit"
              >
                Login
              </Button>
            </Form>
            <div className="mt-6 ">
              <div className="relative ">
                <div className="absolute flex items-center inset-0">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-background px-2 text-gray-500">
                    Or Continue with
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2 px-2 text-gray-500 ">
              <div>
                {variant === "LOGIN"
                  ? "New to Bangladesh Bank ?"
                  : "Already have an account"}
              </div>
              <div
                className="cursor-pointer underline text-primary"
                onClick={toggleVariant}
              >
                {variant === "LOGIN" ? "Create a new account" : "Login"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
