import React, { useEffect, useState } from 'react'
import './ListPage.css';
import axios from 'axios';
import MainAppBar from './component/MainAppBar/MainAppBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ListPage() {
  const [movieDataList, setMovieDataList] = useState([]);
  const apiKey = "85c8b015479b6bed29593e2305a09021"
  const url = `https://api.themoviedb.org/3/movie/upcoming/apikey=${apiKey}?language=en-US&page=1`
  const getMovieData = () => {
    axios.get(url, {

    })
      .then(response => {
        console.log(response);
      })
      .catch((error) => {
        //return  error;
      });
    console.log("steven");
  }
  useEffect(() => {
    getMovieData()
  }, []);
  return (
    <div style={{ backgroundColor: '#e3cde5', height: '100vh' }}>

      <div>
        <MainAppBar />
      </div>
      <div>
        <Card style={{ width: '200px', height: '200px' }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Word of the Day
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

export default ListPage