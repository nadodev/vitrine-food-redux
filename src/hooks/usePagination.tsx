import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { foods } from "../data/Food";
import { paginate } from "../utils/paginationUtils";

export const usePagination = (itemsPerPage: number = 8) => {
  const history = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const pageParam = queryParams.get("page");
  const currentPage = parseInt(pageParam ?? "1", 10);

  const totalItems = foods.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage); 

  const currentItems = paginate(foods, currentPage, itemsPerPage);

  const handlePageClick = (pageNumber: number) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", pageNumber.toString());
    history({ search: searchParams.toString() });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", currentPage.toString());
    history({ search: searchParams.toString() });
  }, [currentPage, history, location.search]);

  return { currentPage, totalPages, currentItems, handlePageClick };
};
