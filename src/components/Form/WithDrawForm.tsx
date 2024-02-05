"use client";
import { SubmitHandler } from "react-hook-form";
import { Button, message } from "antd";
import Image from "next/image";
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import logo from "@/assests/images/bank.png";
import { useAppDispatch } from "@/redux/hook";
import { setOpen } from "@/redux/feature/modal/modalSlice";
import { useAddWithdrawMutation } from "@/redux/api/withdrawApi";

interface IFormValues {
  amount: string;
}

const WithDrawForm = () => {
  const dispatch = useAppDispatch();
  const [addWithdraw] = useAddWithdrawMutation();

  const onSubmit: SubmitHandler<IFormValues> = async (data: any) => {
    try {
      const res = await addWithdraw({ ...data }).unwrap();
      if (res?.success) {
        message.success(res?.message);
        dispatch(setOpen(false));
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
          Withdraw
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div className="">
              <div className="">
                <FormInput
                  required={true}
                  name="amount"
                  type="number"
                  label="Amount(TK)"
                  placeHolder="Enter Amount"
                  size="large"
                />
              </div>
            </div>
            <Button
              className="font-bold bg-primary mt-3"
              block
              color="primary"
              type="primary"
              htmlType="submit"
            >
              Withdraw
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default WithDrawForm;
