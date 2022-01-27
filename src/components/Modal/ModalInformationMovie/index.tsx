import Link from "next/link";
import { Button } from "components/Button";
import { formatterDateAPI } from "helpers/date";
import { Modal } from "..";
import { ModalInformationMovieProps } from "./interface";
import {
  TitleMovie,
  HeaderMovie,
  DescriptionMovie,
  ContainerMovieModal,
  FooterInformation,
  FlexItemsButton,
} from "./style";
import { getStarUse } from "services/star";

export const ModalInformationMovie: React.FC<ModalInformationMovieProps> = ({
  visible,
  onClose,
  item,
  onClickRent,
}) => {
  const stars = getStarUse(item?.vote_average ?? 0);
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
              <p className="stars-avaliate">
                Avaliação:
                {stars?.map((star, index) => (
                  <img src={star} alt="Estrela" key={index} />
                ))}
              </p>
            )}

            <FlexItemsButton>
              <Button
                white
                onClick={onClose}
                top={15}
                bottom={15}
                customWidth="160px"
              >
                Cancelar
              </Button>
              <Link href="/filme" passHref>
                <Button
                  top={15}
                  bottom={15}
                  customWidth="160px"
                  onClick={() => onClickRent(item)}
                >
                  Ver Filme
                </Button>
              </Link>
            </FlexItemsButton>
          </FooterInformation>
        </ContainerMovieModal>
      )}
    </Modal>
  );
};
