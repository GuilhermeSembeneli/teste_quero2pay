import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./interface";
import { ContainerModal, ModalContent, ModalCartContent } from "./style";
import { scroller, Element } from "react-scroll";
import { FakePromise } from "helpers/promise";

export const Modal: React.FC<ModalProps> = ({
  isCart,
  onClose,
  visible,
  maxWidth,
  children,
  blockScroll,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const ref = useRef(null) as any;

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    scroller.scrollTo("myModal", {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -150,
    });

    if (visible)
      FakePromise(100).then(
        () => (document.body.style.overflow = blockScroll ? "hidden" : "auto")
      );

    if (!visible) document.body.style.overflow = "auto";
  }, [visible]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref?.current?.contains(event.target)) {
        document.body.style.overflow = "auto";
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const Content = (
    <ContainerModal isCart={isCart} blockScroll={blockScroll}>
      {isCart ? (
        <ModalCartContent ref={ref}>{children}</ModalCartContent>
      ) : (
        <ModalContent ref={ref} maxWidth={maxWidth}>
          <Element name="myModal">{children}</Element>
        </ModalContent>
      )}
    </ContainerModal>
  );

  if (isBrowser && visible) {
    return ReactDOM.createPortal(Content, document.getElementById("__next")!);
  } else {
    return null;
  }
};
