import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { CircularProgress, Grid, Container } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase/firebase";

export default function ItemListContainer() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { catId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("productos");
    catId
      ? itemsCollection
          .where("category", "==", catId)
          .get()
          .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => doc.data()));
            setLoading(true);
          })
      : itemsCollection
          .where("new", "==", true)
          .get()
          .then((snapshot) => {
            setItems(snapshot.docs.map((doc) => doc.data()));
            setLoading(true);
          });
  }, [catId]);

  return (
    <>
      {loading ? (
        <ItemList array={items} />
      ) : (
        <Grid container justify="center">
          <CircularProgress />
        </Grid>
      )}
    </>
  );
}
