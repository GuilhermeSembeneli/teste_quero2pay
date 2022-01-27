export interface ButtonProps {
  isBold?: boolean;
  customWidth?: string;
  backgroundColor?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  type?: "button" | "submit" | "reset";
  maxWidth?: boolean;
  disabled?: boolean;
  white?: boolean;
  onClick?: () => void;
}
