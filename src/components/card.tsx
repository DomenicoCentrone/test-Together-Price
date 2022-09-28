import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { red } from '@mui/material/colors';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




export default function RecipeReviewCard() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/DomenicoCentrone/DomenicoCentrone/main/datatest.json')
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            setLoading(true)
        })
    })



    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
          
        {
         posts.map(post => 
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 366.17 }}>  
            <CardHeader
                avatar={
                loading ? (
                    <Skeleton variant="circular" width={40} height={40} />
                ) : (
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {post['id']}
                    </Avatar>
                )
            }
            action={
                loading ? (
                    <Skeleton variant="circular" width={40} height={40} />
                ) : (
                    <IconButton>
                        <Button variant="outlined" color="secondary"><AddIcon /></Button>
                    </IconButton>
                )
            }
            title={
                loading ? (
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                ):(
                    <strong>{post['first_name'] + ' ' + post['last_name']}</strong>
            )}
            subheader={
                loading ? (
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

                ) : (
                    "nessunna connessione"
                )}/>
                <CardContent>
                {loading ? (
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                ):(
                    <Typography variant="body2">
                        Stai gia' condividendo <strong className="services">{post['shared_service']}</strong>
                    </Typography>
                )}
                </CardContent>
            </Card>
        </Grid>

        )}

      </Grid>
    </Box>
    </>
  );
}
