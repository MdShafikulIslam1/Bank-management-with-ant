"use client";
import { UserOutlined } from "@ant-design/icons";
import { SubmitHandler } from "react-hook-form";
import { Button, message } from "antd";
import Image from "next/image";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useRouter } from "next/navigation";
import logo from "@/assests/images/bank.png";
import { useCreateAccountMutation } from "@/redux/api/authApi";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import FormSelectField from "./FormSelectField";
import { bankTypeOptions } from "@/constant/global";

interface IFormValues {
  id: string;
  password: string;
}

const CreateAccountForm = ({
  setIsModalOpen,
  isModalOpen,
}: {
  setIsModalOpen: (e: boolean) => void;
  isModalOpen: boolean;
}) => {
  const [image, setImage] = useState();
  const [createAccount] = useCreateAccountMutation();

  const router = useRouter();

  const handleUpload = (result: any) => {
    setImage(result?.info?.secure_url);
  };

  const onSubmit: SubmitHandler<IFormValues> = async (data: any) => {
    if (data?.password !== data?.confirm_password) {
      return message.error("Password does not match");
    }
    delete data.confirm_password;
    if (image) {
      data.profile_image = image;
    }
    console.log("account data", data);
    try {
      const res = await createAccount({ ...data }).unwrap();
      if (res?.success) {
        message.success(res?.message);
        router.push("/profile");
        setIsModalOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  return (
    <div className="w-full flex justify-center items-center">
      <div>
        <Image
          src={logo}
          alt="messenger logo"
          height={60}
          width={60}
          className="mx-auto w-auto"
        />
        <h1 className="text-primary text-2xl font-bold my-4 text-center ">
          Create Account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <FormInput
                  required={true}
                  name="full_name"
                  type="text"
                  label="Full Name"
                  size="large"
                  placeHolder="Enter your full name"
                  prefix=<UserOutlined />
                  allowClear={true}
                />
              </div>

              <div className="">
                <FormInput
                  required={true}
                  name="user_name"
                  type="text"
                  label="User Name"
                  placeHolder="Enter username"
                  size="large"
                />
              </div>
              <div className="">
                <FormInput
                  required={true}
                  name="email"
                  type="email"
                  label="Email"
                  placeHolder="Enter your Email"
                  size="large"
                />
              </div>
              <div className="">
                <FormInput
                  required={true}
                  name="password"
                  type="password"
                  label="Password"
                  placeHolder="Enter your Password"
                  size="large"
                />
              </div>
              <div className="">
                <FormInput
                  required={true}
                  name="confirm_password"
                  type="password"
                  label="Confirm Password"
                  placeHolder="Enter Confirm Password"
                  size="large"
                />
              </div>
              <div className="">
                <FormInput
                  required={true}
                  name="primary_phone_number"
                  type="text"
                  label="Phone Number"
                  placeHolder="Enter Contact Number"
                  size="large"
                />
              </div>
              <div className="">
                <FormInput
                  required={true}
                  name="address"
                  type="text"
                  label="Address"
                  placeHolder="Enter your address"
                  size="large"
                />
              </div>
              <div className="">
                <FormSelectField
                  options={bankTypeOptions}
                  name="account_type"
                  size="large"
                  label="Account Type"
                  defaultValue="SAVINGS_ACCOUNT"
                />
              </div>
              <div className="h-20 w-full  flex items-center gap-4">
                <Image
                  src={image || "/default_avatar.png"}
                  alt="default avatar"
                  width={80}
                  height={80}
                />
                <div>
                  <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="kde3v72f"
                  >
                    <Button className="bg-primary">Upload Photo</Button>
                  </CldUploadButton>
                </div>
              </div>
            </div>
            <Button
              className="font-bold bg-primary mt-3"
              block
              color="primary"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountForm;
