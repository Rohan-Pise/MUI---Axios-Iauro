import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { CardContent, Grid  } from '@mui/material';
import Cards from './Cards';
import { DataGrid } from '@mui/x-data-grid';

 function Content() {
  const [data,setData] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setData(response.data);
    }

    fetchData();
  },[]);
  return (
   <>
     <Grid container spacing={2} padding={2}>
     { data && 
      data.map((res)=>(
        <Grid item xs={12} sm={6} md={4}>
        <Cards res = {res} />
        </Grid>
      ))
     }
     </Grid>
   </>
  )
}

export default Content
