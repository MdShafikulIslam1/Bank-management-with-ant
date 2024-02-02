import { ReactNode } from "react";
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPathname } from "@/utils/schemaValidation";
type ISelectOptions = {
  label: string;
  value: string;
};
interface IInput {
  name: string;
  size?: "large" | "small";
  placeHolder?: string;
  value?: string | string[] | undefined;
  label?: string;
  defaultValue?: string;
  options: ISelectOptions[];
}

const FormSelectField = ({
  name,
  size,
  placeHolder = "select",
  value,
  defaultValue,
  label,
  options,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessages = getErrorMessageByPathname(errors, name);
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Select
            style={{
              width: "100%",
            }}
            defaultValue={defaultValue}
            value={value}
            size={size}
            onChange={onChange}
            showSearch
            placeholder={placeHolder}
            options={options}
          />
        )}
      />
      <small style={{ color: "red" }}>{errorMessages}</small>
    </>
  );
};

export default FormSelectField;
