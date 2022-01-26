import React from "react";
import { ContainerHeader, QueroTwo } from "./style";

export default function Header() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ContainerHeader>
      <section>
        <QueroTwo onClick={goToTop}>
          <h5>Quero</h5>
          <span>2</span>
          <strong>Ingressos</strong>
        </QueroTwo>
      </section>
    </ContainerHeader>
  );
}
