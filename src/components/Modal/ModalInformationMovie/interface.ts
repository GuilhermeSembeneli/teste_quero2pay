import { ResultMovie } from "services/movies/interface";
import { ModalProps } from "../interface";

export interface ModalInformationMovieProps extends ModalProps {
  item?: ResultMovie;
}

export interface ContentListProps {
  hasScroll?: boolean;
}
