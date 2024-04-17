import { useEffect } from "react";
import { Container, Grid } from "@mui/material";

import { RootState, useAppSelector } from "../../../store";
import CreateProduct from "./CreateProduct";
import { getAllProductsEffect } from "../../../store/effects/product/product.effect";
import { useDispatch } from "react-redux";
import PageTitleWrapper from "../../public/PageTitleWrapper";
import PageHeader from "../../public/pageHeader/PageHeader";

const CreateProductPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsEffect());
  }, []);

  const { products } = useAppSelector((state: RootState) => {
    return state.product;
  });
  return (
    <>
      <PageTitleWrapper>
        <PageHeader title="Buy Product" />
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
            <CreateProduct products={products} />;
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default CreateProductPage;
