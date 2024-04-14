import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";
import { ProductType } from "../../../store/types/product/product";
import { createOrderEffect } from "../../../store/effects/order/order.effect";
import { useDispatch } from "react-redux";

interface CreateProductProps {
  products: ProductType[];
}

const CreateProduct: React.FC<CreateProductProps> = ({ products }) => {
  const [cartProducts, setCartProducts] = useState<ProductType[]>(products);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setCartProducts(products);
  }, [products]);

  const handleDragEnd = (result: DropResult) => {
    const draggedItem = cartProducts[result.source.index];
    setCartProducts((prevProducts) => {
      const newProducts = [...prevProducts];
      newProducts.splice(result.source.index, 1);
      return newProducts;
    });

    setCartItems((prevCartItems) => [...prevCartItems, draggedItem]);
  };

  const handleCartSubmit = () => {
    dispatch(createOrderEffect(cartItems));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Drag and Drop Example
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper style={{ height: "300px" }}>
            <Typography variant="h5" gutterBottom>
              Products
            </Typography>
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
        <Grid item xs={6}>
          <Paper style={{ height: "300px" }}>
            <Typography variant="h5" gutterBottom>
              Cart
            </Typography>
            {cartItems.map((item) => (
              <>
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
              </>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCartSubmit}
            disabled={!cartItems.length}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateProduct;
