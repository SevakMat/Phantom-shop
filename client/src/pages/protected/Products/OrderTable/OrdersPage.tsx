import { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState, useAppSelector } from "../../../../store";
import { getAllOrdersEffect } from "../../../../store/effects/order/order.effect";
import OrdersTable from "./OrdersTable";
import OrderPageHeader from "../../../public/pageHeader/PageHeader";
import PageTitleWrapper from "../../../public/PageTitleWrapper";

function OrdersPage() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersEffect());
  }, []);

  const { orders } = useAppSelector((state: RootState) => state.order);

  return (
    <>
      <PageTitleWrapper>
        <OrderPageHeader title="Orders" />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <OrdersTable orders={orders} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default OrdersPage;
