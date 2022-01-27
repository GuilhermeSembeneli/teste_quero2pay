import { CustomSpanMessage } from "components/Button/style";
import { getIn } from "formik";
import { IInputProps } from "interfaces/Components/Input";
import React from "react";
import { ContainerInput } from "./style";

export  const Input: React.FC<IInputProps> = ({
  id,
  type,
  label,
  placeholder,
  form,
  field,
}) => {
  const error = getIn(form?.errors, field?.name);
  return (
    <ContainerInput>
      {label && <label htmlFor={id}>{label}</label>}
      <input type={type} id={id} placeholder={placeholder} {...field} />
      {error && <CustomSpanMessage>{error}</CustomSpanMessage>}
    </ContainerInput>
  );
}
