import { Button } from "components/Button";
import { ModalInformationMovie } from "components/Modal/ModalInformationMovie";
import React, { useState } from "react";
import { ResultMovie } from "services/movies/interface";
import { MoviesBox } from "./style";

interface IMovies {
  item: ResultMovie;
  onClick: (item: ResultMovie) => void;
}

export default function Movies({ item, onClick }: IMovies) {
  return (
    <>
      <MoviesBox onClick={() => onClick(item)}>
        <img
          src={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
          alt={item.title}
        />
        <div className="about-more">
          <Button>Saiba Mais</Button>
        </div>
      </MoviesBox>
    </>
  );
}
