import { FC, ChangeEvent, useState } from "react";

import PropTypes from "prop-types";
import {
  Divider,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  CardHeader,
} from "@mui/material";
import { OrderType } from "../../../../store/types/order/order";

interface OrdersTableProps {
  className?: string;
  orders: OrderType[];
}

interface Filters {
  user?: string;
  totalAmount?: number;
}

const applyFilters = (orders: OrderType[], filters: Filters): OrderType[] => {
  return orders.filter((order) => {
    let matches = true;

    if (filters.totalAmount && order.totalAmount !== filters.totalAmount) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  order: OrderType[],
  page: number,
  limit: number
): OrderType[] => {
  return order.slice(page * limit, page * limit + limit);
};

const OrdersTable: FC<OrdersTableProps> = ({ orders = [] }) => {
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({});

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredOrders = applyFilters(orders, filters);
  const paginatedOrders = applyPagination(filteredOrders, page, limit);
  const selectedSomeOrders =
    selectedOrders.length > 0 && selectedOrders.length < orders.length;

  console.log(orders);

  return (
    <Card>
      <CardHeader title="Recent Products" />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedOrders.map((order) => {
              const isOrderSelected = selectedOrders.includes(
                order._id as string
              );
              return (
                <TableRow
                  hover
                  key={order._id}
                  selected={isOrderSelected}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{order._id}</TableCell>
                  <TableCell>{order.user}</TableCell>
                  <TableCell>{order.totalAmount}</TableCell>
                  <TableCell>{`${
                    new Date(order.date).getMonth() + 1
                  }/${new Date(order.date).getDate()}/${new Date(
                    order.date
                  ).getFullYear()}`}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredOrders.length}
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

OrdersTable.propTypes = {
  orders: PropTypes.array.isRequired,
};

OrdersTable.defaultProps = {
  orders: [],
};

export default OrdersTable;
