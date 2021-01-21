export interface IPaginatedCollection<T> {
  data: T[];
  totalPages: number;
  page: number;
}

export const buildPaginatedCollection = <T>(
  data: T[],
  totalPages: number,
  page: number
): IPaginatedCollection<T> => ({
  data,
  totalPages,
  page
});
