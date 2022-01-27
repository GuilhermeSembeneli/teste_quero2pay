import { useRouter } from "next/dist/client/router";
import React from "react";
import { ContainerHeader, QueroTwo } from "./style";

export default function Header() {
  const router = useRouter();

  const goToTop = () => {
    if (router?.pathname !== "/") return router.push("/");
    
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
          <strong>Aluga</strong>
        </QueroTwo>
      </section>
    </ContainerHeader>
  );
}
