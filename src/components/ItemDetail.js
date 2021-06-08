import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import ItemCount from "./ItemCount";
import { useCart } from "../contexts/CartContext";
import { useState } from "react";

export default function ItemDetail({ img, description, name, precio, array }) {
  const [show, setShow] = useState(true);
  const cart = useCart();

  const onAdd = (value) => {
    setShow(false);
    cart.addItem({ item: { array }, quantity: { value } });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Box mt={6}>
          <img src={img} alt="imagen de producto" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box mt={6}>
          <Typography variant="h3" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h4" gutterBottom>
            ${precio}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {description}
          </Typography>
          <Box mt={6}>
            <ItemCount stock={10} initial={1} funcion={onAdd} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
