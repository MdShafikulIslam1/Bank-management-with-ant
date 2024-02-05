"use client";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import { useForgotPasswordMutation } from "@/redux/api/authApi";
import { Button, message } from "antd";
import { SubmitHandler } from "react-hook-form";

type FieldValues = {
  email: string;
};

const ForgotPassword = () => {
  const [forgotPassword] = useForgotPasswordMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await forgotPassword({ email: data.email }).unwrap();
      if (res.success) {
        message.success(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Form submitHandler={onSubmit}>
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
        <Button
          className="font-bold"
          block
          color="primary"
          type="primary"
          htmlType="submit"
        >
          Continue
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
