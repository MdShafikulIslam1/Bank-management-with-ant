"use client";

import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { Button, message } from "antd";
import { SubmitHandler } from "react-hook-form";

interface FieldValues {
  email: string;
  newPassword: string;
}

const ResetPassword = ({ searchParams }: any) => {
  const { email, token } = searchParams;
  const [resetPassword] = useResetPasswordMutation();

  const defaultValues: {
    email: string;
    newPassword: string;
  } = {
    email: email,
    newPassword: "",
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    try {
      const res = await resetPassword({
        email: data.email,
        newPassword: data.newPassword,
        token,
      }).unwrap();
      if (res.success) {
        message.success(res.message);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <div className="my-3">
          <FormInput
            required={true}
            name="email"
            type="Email"
            label="User Email"
            placeHolder="Enter Correct Email"
            size="large"
          />
        </div>
        <div className="my-3">
          <FormInput
            required={true}
            name="newPassword"
            type="password"
            label="New Password"
            placeHolder="Enter New Password"
            size="large"
          />
        </div>
        <Button
          className="font-bold"
          block
          color="primary"
          type="primary"
          htmlType="submit"
        >
          Reset Password
        </Button>
      </Form>
    </div>
  );
};

export default ResetPassword;
