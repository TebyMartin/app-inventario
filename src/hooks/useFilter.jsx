import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProducts, getFilteredProductos } from "../store/Slices/FilterProductoSlice";
import * as XLSX from "xlsx";

export const useFilters = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.filteredProductos);

  
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
   
    if (searchQuery && filterType) {
      dispatch(getFilteredProductos({ searchQuery, filterType }));
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
  
    const worksheet = XLSX.utils.json_to_sheet(data); 
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
