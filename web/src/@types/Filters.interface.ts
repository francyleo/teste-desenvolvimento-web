export default interface IFilter {
  name: string;
}

export interface IPagination {
  page: number;
  prevPage: number;
  nextPage: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}
