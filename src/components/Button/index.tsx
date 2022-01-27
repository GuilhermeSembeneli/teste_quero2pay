import { ButtonProps } from "./interface";
import { ButtonStyle } from "./style";

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};
