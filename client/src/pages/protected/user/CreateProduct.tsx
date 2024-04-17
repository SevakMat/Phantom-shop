import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import {
  Container,
  Grid,
  Paper,
  Button,
  CardHeader,
  Divider,
  Box,
  CircularProgress,
} from "@mui/material";
import { ProductType } from "../../../store/types/product/product";
import { createOrderEffect } from "../../../store/effects/order/order.effect";
import { useDispatch } from "react-redux";

interface CreateProductProps {
  products: ProductType[];
}

const CreateProduct: React.FC<CreateProductProps> = ({ products }) => {
  const [cartProducts, setCartProducts] = useState<ProductType[]>(products);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setCartProducts(products);
  }, [products]);

  const handleDragEnd = (result: DropResult) => {
    const draggedItem = cartProducts[result.source.index];
    console.log(draggedItem);

    setCartProducts((prevProducts) => {
      const newProducts = [...prevProducts];
      newProducts.splice(result.source.index, 1);
      return newProducts;
    });

    setCartItems((prevCartItems) => [...prevCartItems, draggedItem]);
  };

  const handleCartSubmit = async () => {
    setLoading(true);
    await dispatch(createOrderEffect(cartItems));
    setLoading(false);
  };
  console.log(cartItems);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ height: "300px", overflow: "auto" }}>
            <CardHeader title="All Products" />
            <Divider />
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="products">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {cartProducts.map((product, index) => (
                      <Draggable
                        key={product._id}
                        draggableId={product._id as string}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Paper
                              style={{
                                padding: "10px",
                                margin: "5px",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div>{product.name}</div>
                              <div>{product.price}$</div>
                            </Paper>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            style={{
              height: "300px",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <CardHeader title="Cart" />
              <Divider />
              {cartItems.map((item) => (
                <Paper
                  key={item._id}
                  style={{
                    padding: "10px",
                    margin: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>{item.name}</div>
                  <div>{item.price}$</div>
                </Paper>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: `1px solid black`,
                  borderRadius: "10px",
                  height: "auto",
                  width: 87,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartItems.reduce((acc, item) => acc + item.price, 0)}
              </Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCartSubmit}
                disabled={!cartItems.length}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Buy Products"
                )}
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateProduct;
