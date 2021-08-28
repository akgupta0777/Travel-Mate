import React from 'react'

function Map(props){
<<<<<<< HEAD
    return (<h1>Map</h1>);
=======
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = {lat:0, lng:0};
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key:"YOUR-API-KEY"}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options = {""}
                onChange={""}
                onChildClick={""}
            >
            </GoogleMapReact>
        </div>
    );
>>>>>>> 3e52541 (Removed Google API key for security)
}

export default Map;
