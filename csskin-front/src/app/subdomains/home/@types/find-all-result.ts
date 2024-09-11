export interface FindAllResultInfoEntity {
  total: number;
  page: number;
  pages: number;
  pageSize: number;
}
export interface FindAllResultEntity<T> {
  data: T[];
  info: FindAllResultInfoEntity;
}
