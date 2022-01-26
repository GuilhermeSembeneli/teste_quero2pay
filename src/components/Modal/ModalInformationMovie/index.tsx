import { formatterDateAPI } from "helpers/date";
import { Modal } from "..";
import { ModalInformationMovieProps } from "./interface";
import {
  TitleMovie,
  HeaderMovie,
  DescriptionMovie,
  ContainerMovieModal,
  FooterInformation,
} from "./style";

export const ModalInformationMovie: React.FC<ModalInformationMovieProps> = ({
  visible,
  onClose,
  item,
}) => {
  return (
    <Modal visible={visible} onClose={onClose} blockScroll>
      {item && (
        <ContainerMovieModal>
          <HeaderMovie>
            <TitleMovie>{item?.title}</TitleMovie>
            <DescriptionMovie>{item?.overview}</DescriptionMovie>
          </HeaderMovie>

          <FooterInformation>
            <p>Lançamento: {formatterDateAPI(item?.release_date)}</p>
          </FooterInformation>
        </ContainerMovieModal>
      )}
    </Modal>
  );
};
