import type { DatePickerProps } from "antd";
import { DatePicker, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

interface IFormDatePicker {
  onChange?: (value1: Dayjs | null, value2: string) => void;
  name: string;
  size?: "large" | "small";
  label?: string;
}
const FormDatePicker = ({ name, size, label, onChange }: IFormDatePicker) => {
  const { control, setValue } = useFormContext();
  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : "";
    setValue(name, dateString);
  };
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            value={dayjs(field.value) || ""}
            size={size}
            onChange={handleOnChange}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
