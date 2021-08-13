export type PaginatedQuery = {
  from: number;
  size: number;
};

export type Pagination = {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
};
