import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { ContainerHeader, Navigation, QueroTwo } from "./style";
import { useAuth } from "hooks/useAuth";

export default function Header() {
  const router = useRouter();
  const { user } = useAuth();
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

        <Navigation>
          <ul>
            {user?.username ? (
              <li>Olá, {user.username}</li>
            ) : (
              <li>
                <Link href="/login">Login</Link>
              </li>
            )}
          </ul>
        </Navigation>
      </section>
    </ContainerHeader>
  );
}
