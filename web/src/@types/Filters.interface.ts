export default interface IFilter {
  page: number;
  limit: number;
  name: string;
}

export interface IPagination {
  prevPage: number | null;
  nextPage: number | null;
  totalPages: number | null;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}
