import { FC, ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import {
  Divider,
  Box,
  FormControl,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  CardHeader,
} from "@mui/material";
import { ProductType } from "../../../../store/types/product/product";

import BulkActions from "./BulkActions";
import SearchProducts from "./SearchProduct";

interface ProductsTableProps {
  className?: string;
  products: ProductType[];
}

interface Filters {
  name?: string;
  price?: string;
}

const applyFilters = (
  products: ProductType[],
  filters: Filters
): ProductType[] => {
  return products.filter((product) => {
    let matches = true;

    if (filters.name && product.name !== filters.name) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  product: ProductType[],
  page: number,
  limit: number
): ProductType[] => {
  return product.slice(page * limit, page * limit + limit);
};

const ProductsTable: FC<ProductsTableProps> = ({ products = [] }) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({});

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== "all") {
      value = e.target.value;
    }

    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   status: value,
    // }));
  };

  const handleFilterChange = (filter: string, value: string): void => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: value,
    }));
  };

  const handleSelectAllProducts = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedProducts(
      event.target.checked
        ? products.map((product) => product._id as string)
        : []
    );
  };

  const handleSelectOneProducts = (
    event: ChangeEvent<HTMLInputElement>,
    productId: string
  ): void => {
    if (!selectedProducts.includes(productId)) {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    } else {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((id) => id !== productId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredProducts = applyFilters(products, filters);
  const paginatedProducts = applyPagination(filteredProducts, page, limit);
  const selectedSomeProducts =
    selectedProducts.length > 0 && selectedProducts.length < products.length;
  const selectedAllProducts = selectedProducts.length === products.length;

  return (
    <Card>
      <CardHeader
        action={
          <>
            <FormControl fullWidth variant="outlined">
              <SearchProducts />
            </FormControl>
          </>
        }
        title="Recent Products"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>price</TableCell>
              <TableCell>actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => {
              const isProductSelected = selectedProducts.includes(
                product._id as string
              );
              return (
                <TableRow
                  hover
                  key={product._id}
                  selected={isProductSelected}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{product._id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>

                  <BulkActions product={product} />
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredProducts.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
};

ProductsTable.defaultProps = {
  products: [],
};

export default ProductsTable;
