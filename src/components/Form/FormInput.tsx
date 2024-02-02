import { ReactNode } from "react";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  placeHolder?: string;
  value?: string | string[] | undefined;
  id?: string;
  validation?: string;
  label?: string;
  prefix?: ReactNode;
  allowClear?: boolean;
}

const FormInput = ({
  name,
  type,
  size,
  placeHolder,
  value,
  id,
  validation,
  label,
  prefix,
  allowClear,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  // const errorMessages = getErrorMessageByPathname(errors, name);
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              {...field}
              value={value ? value : field.value}
              prefix={prefix}
              placeholder={placeHolder}
              allowClear={allowClear}
            />
          ) : (
            <Input
              type={type}
              size={size}
              {...field}
              value={value ? value : field.value}
              prefix={prefix}
              placeholder={placeHolder}
              allowClear={allowClear}
            />
          )
        }
      />
      {/* <small style={{ color: "red" }}>{errorMessages}</small> */}
    </>
  );
};

export default FormInput;
