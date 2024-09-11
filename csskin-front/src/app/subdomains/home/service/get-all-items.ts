/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/app/shared/config/axios/api";
import { FilterProps } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { FindAllResultEntity } from "../@types/find-all-result";
import { ItemsEntity } from "../@types/items";

export const GetAllItems = async (props: FilterProps) => {
  const { data } = await api.get<FindAllResultEntity<ItemsEntity>>("/items", {
    params: props,
  });
  return data;
};

export default function useGetItems(props: any) {
  const query = useQuery({
    queryKey: ["items", props],
    queryFn: () => GetAllItems(props),
  });

  useEffect(() => {
    query.refetch();
  }, [props, query]);

  return query;
}
