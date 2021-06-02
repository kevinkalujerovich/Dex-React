import  { useState ,useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {Container,CircularProgress,Box} from '@material-ui/core';
import data from '../data.json';
import { useParams } from "react-router-dom";



 export default function ItemDetailContainer(){
 
const [array, setArray] = useState([]);
const { Id } = useParams();

useEffect(() => {
  const getItems = new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  getItems.then(res => {
          setArray(res.filter(i => i.id === Id));
        })
}, [Id]);
  return (
 <Container>
   {array.length > 0?
 array.map((item) =>{
   return (
    <ItemDetail key={item.id} description={item.description} name={item.name} img={item.img} precio={item.precio}></ItemDetail>
   )}):<Box ><CircularProgress mx="auto"/></Box>}
  </Container>);
 }
