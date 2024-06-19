
/**
 * Pagina um array de dados genéricos.
 * @param data Array de dados a ser paginado.
 * @param currentPage Página atual a ser exibida.
 * @param itemsPerPage Quantidade de itens por página.
 * @returns Array dos itens da página atual.
 */

export const paginate = <T>(
  data: T[],
  currentPage: number,
  itemsPerPage: number
): T[] => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  return currentItems;
};

/**
 * Calcula o número total de páginas baseado no número total de itens e itens por página.
 * @param totalItems Número total de itens.
 * @param itemsPerPage Quantidade de itens por página.
 * @returns Número total de páginas.
 */
export const getTotalPages = (
  totalItems: number,
  itemsPerPage: number
): number => {
  return Math.ceil(totalItems / itemsPerPage);
};
