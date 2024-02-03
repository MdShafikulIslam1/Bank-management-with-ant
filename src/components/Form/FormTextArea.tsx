import { ReactNode } from "react";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
interface IInput {
  name: string;
  placeHolder?: string;
  value?: string | string[] | undefined;
  label?: string;
  allowClear?: boolean;
}

const FormTextArea = ({
  name,
  placeHolder,
  value,
  label,
  allowClear = true,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            {...field}
            name={name}
            showCount
            maxLength={100}
            style={{ height: 120, marginBottom: 24 }}
            // onChange={onChange}
            placeholder={placeHolder}
            allowClear
          />
        )}
      />
    </>
  );
};

export default FormTextArea;
