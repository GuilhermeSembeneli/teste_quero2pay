import { ButtonProps } from "./interface";
import { ButtonStyle, CustomSpanMessage } from "./style";

export const Button: React.FC<ButtonProps> = ({ children, customMessage, ...rest }) => {
  return (
    <>
      <ButtonStyle {...rest}>{children}</ButtonStyle>
      {customMessage && <CustomSpanMessage>{customMessage}</CustomSpanMessage>}
    </>
  );
};
