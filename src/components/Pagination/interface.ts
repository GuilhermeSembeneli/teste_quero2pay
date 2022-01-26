export interface PaginationState {
  current_page: number;
  per_page: number;
  total_pages: number;
}

export interface PaginationProps {
  pagination: PaginationState;
  onClick: (args0: number) => void;
}

export interface PagesProps {
  _pagesShow: number[];
  _pages: number[];
}

export interface PaginationPropsStyle {
  actived?: boolean;
  hasBorderRight?: boolean;
  hasBorderLeft?: boolean;
}
