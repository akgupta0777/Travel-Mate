import React from 'react'
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from '@material-ui/core'
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
import Rating from "@material-ui/lab"

import useStyles from './Styles'


function PlaceDetails({places}){
    return (<h1>{places.name}</h1>);
}

export default PlaceDetails;