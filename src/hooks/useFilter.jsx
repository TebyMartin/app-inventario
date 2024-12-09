import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts, getFilteredBooks } from "../store/Slices/FilterProductoSlice";
import * as XLSX from "xlsx";

export const useFilters = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.filteredBooks);

  // Estado local para la búsqueda
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  
  // Carga los productos cuando el componente se monta
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    // Solo despacha si el valor de búsqueda o filtro cambia
    if (searchQuery && filterType) {
      dispatch(getFilteredBooks({ searchQuery, filterType }));
    }
  }, [searchQuery, filterType, dispatch]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  const exportToExcel = () => {
    if (!data || data.length === 0) {
      alert("No hay datos para exportar");
      return;
    }
  
    const worksheet = XLSX.utils.json_to_sheet(data); // Aquí debe ser data
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Productos");
    XLSX.writeFile(workbook, "productos.xlsx");
  };
  
  return {
    products: data,
    isLoading,
    error,
    handleSearchChange,
    handleFilterTypeChange,
    exportToExcel,
    filterType,
    searchQuery,
  };
};
