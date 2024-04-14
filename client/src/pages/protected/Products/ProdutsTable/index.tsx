import { Grid, Container } from "@mui/material";

import ProductsContainer from "./ProductsContainer";
import PageTitleWrapper from "../../../public/PageTitleWrapper";
import ProductPageHeader from "./ProductPageHeader";

function Products() {
  return (
    <>
      <PageTitleWrapper>
        <ProductPageHeader />
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
            <ProductsContainer />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Products;
