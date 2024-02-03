"use client";
import { UserOutlined } from "@ant-design/icons";
import { SubmitHandler } from "react-hook-form";
import { Button, message, Modal } from "antd";
import Image from "next/image";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/service/authentication.service";
import logo from "@/assests/images/bank.png";
import {
  useCreateAccountMutation,
  useLoginMutation,
} from "@/redux/api/authApi";
import { CldUploadButton } from "next-cloudinary";
import { HiPhoto } from "react-icons/hi2";
import { useEffect, useState } from "react";

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
  const [image, setImage] = useState("/default_avatar.png");
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
    data.profile_image = image;
    try {
      const res = await createAccount({ ...data }).unwrap();
      if (res?.success) {
        message.success(res?.message);
        router.push("/profile");
      }
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setIsModalOpen(false);
    }
  };
  return (
    <div>
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

              <div className="my-3">
                <FormInput
                  required={true}
                  name="user_name"
                  type="text"
                  label="User Name"
                  placeHolder="Enter username"
                  size="large"
                />
              </div>
              <div className="my-3">
                <FormInput
                  required={true}
                  name="email"
                  type="email"
                  label="Email"
                  placeHolder="Enter your Email"
                  size="large"
                />
              </div>
              <div className="my-3">
                <FormInput
                  required={true}
                  name="password"
                  type="password"
                  label="Password"
                  placeHolder="Enter your Password"
                  size="large"
                />
              </div>
              <div className="my-3">
                <FormInput
                  required={true}
                  name="confirm_password"
                  type="password"
                  label="Confirm Password"
                  placeHolder="Enter Confirm Password"
                  size="large"
                />
              </div>
              <div className="my-3">
                <FormInput
                  required={true}
                  name="primary_phone_number"
                  type="text"
                  label="Phone Number"
                  placeHolder="Enter Contact Number"
                  size="large"
                />
              </div>
              <div className="h-20 w-full my-3 flex items-center gap-4">
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
              <Button
                className="font-bold bg-primary"
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
    </div>
  );
};

export default CreateAccountForm;
