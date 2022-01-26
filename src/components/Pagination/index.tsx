import React, { useEffect, useCallback, useState } from "react";
import Navigation from "../../assets/navigation-left.svg";
import { PagesProps, PaginationProps } from "./interface";
import { ContainerPagination, FlexPagination, ItemsPagination } from "./style";

export const Pagination: React.FC<PaginationProps> = ({
  pagination,
  onClick,
}) => {
  const [pages, setPages] = useState<PagesProps>({} as any);

  useEffect(() => {
    let total_pages = pagination?.total_pages || 1;
    let _pagesShow = [] as any;
    let _pages = [] as any;

    for (let i = 1; i <= total_pages; i++) {
      if (i <= 4) _pagesShow = [..._pagesShow, i];

      _pages = [..._pagesShow, i];
    }

    setPages({
      _pagesShow,
      _pages,
    });
  }, [pagination?.total_pages]);

  const backView = () => {
    let _pagesShow = pages._pagesShow;
    const lastPageShow =
      _pagesShow[0] === 1 && _pagesShow[_pagesShow.length - 1] === 4;

    if (lastPageShow) return;

    if (pagination?.current_page > 1) {
      _pagesShow = _pagesShow.map((item) => {
        if (item > 1) return item - 1;
        return 1;
      });
      onClick(pagination?.current_page - 1);
    }
    const filterPagesVisibles = _pagesShow.filter((item) => item);

    setPages((prev) => ({
      ...prev,
      _pagesShow: filterPagesVisibles,
    }));
  };

  const nextView = () => {
    let _pagesShow = pages._pagesShow;
    const lastPageShow = _pagesShow.length - 1;

    if (_pagesShow[lastPageShow] >= pagination?.total_pages) return;

    if (pagination?.current_page < pagination?.total_pages) {
      _pagesShow = _pagesShow.map((item) => {
        if (item < pagination?.total_pages) return item + 1;
        return 1;
      });
      onClick(pagination?.current_page + 1);
    }

    const filterPagesVisibles = _pagesShow.filter((item) => item);

    setPages((prev) => ({
      ...prev,
      _pagesShow: filterPagesVisibles,
    }));
  };

  return (
    <ContainerPagination>
      <FlexPagination>
        <ItemsPagination onClick={backView} hasBorderLeft>
          {" "}
          <img src="/images/navigation-left.svg" alt="Seta esquerda" />{" "}
        </ItemsPagination>
        {pages?._pagesShow?.map((page) => (
          <ItemsPagination
            key={page}
            actived={page === pagination?.current_page}
            onClick={() => onClick(page)}
          >
            {page}
          </ItemsPagination>
        ))}
        <ItemsPagination hasBorderRight onClick={nextView}>
          {" "}
          <img src="/images/navigation-left.svg" alt="Seta Direita" />{" "}
        </ItemsPagination>
      </FlexPagination>
    </ContainerPagination>
  );
};
