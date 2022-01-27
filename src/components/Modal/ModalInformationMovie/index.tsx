import { formatterDateAPI } from "helpers/date";
import { Modal } from "..";
import { getStartUse } from "./helper";
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
  const stars = getStartUse(item?.vote_average ?? 0);
  return (
    <Modal visible={visible} onClose={onClose} blockScroll>
      {item && (
        <ContainerMovieModal>
          <HeaderMovie>
            <TitleMovie>{item?.title}</TitleMovie>
            <DescriptionMovie>
              {item?.overview ||
                `Nenhuma descrição de "${item?.title}" foi encontrado.`}
            </DescriptionMovie>
          </HeaderMovie>

          <FooterInformation>
            <p>Lançamento: {formatterDateAPI(item?.release_date)}</p>

            {!!stars?.length && (
              <p>
                Avaliação:
                {stars?.map((star, index) => (
                  <img src={star} alt="Estrela" key={index} />
                ))}
              </p>
            )}
          </FooterInformation>
        </ContainerMovieModal>
      )}
    </Modal>
  );
};
