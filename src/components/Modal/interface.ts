export interface ModalProps {
  onClose: () => void;
  visible: boolean;
  isCart?: boolean;
  maxWidth?: "md" | "sm";
  blockScroll?: boolean;
}

export interface StyleModalProps {
  isCart?: boolean;
  blockScroll?: boolean;
  maxWidth?: "md" | "sm";
}
