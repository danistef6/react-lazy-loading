import React from 'react';
import Carousel from 'react-material-ui-carousel'
import CardMedia from '@material-ui/core/CardMedia';
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
 
export default function Example(props)
{
    var items = [
        {
            Image: "https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-707/a_Machu-Picch-a.jpg?filter=ds75",
        },
        {
            Image: "https://guiauniversitaria.mx/wp-content/uploads/2019/04/10-lugares-para-visitar-1068x623.jpg",
        },
        {
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUKd4A8r3PaPEsiZ670tDQL3mGAwdThuzEXJp2LoZOy_Ad4DDL&usqp=CAU",
        },
        {
            Image: "https://cdnmundo1.img.sputniknews.com/img/108230/00/1082300093_0:0:3077:2048_1000x665_80_0_0_b738245fca86ad1773e412d68244a182.jpg",
        },
        {
            Image: "https://i.ytimg.com/vi/vXkUKBXUXrU/maxresdefault.jpg",
        }
    ]
 
    return (
        <Carousel>
            {
                items.map( item => <Item item={item} /> )
            }
        </Carousel>
    )
}

const style = {
    height: 368,
    maxWidth: 800
};
const div = {
    'display': 'flex',
    'align-items': 'center',
    'justify-content': 'center'
};
 
function Item(props)
{
    return (
        <Paper>
            <h2>Nuestros Destinos</h2>
            <div style={div}>
            <CardMedia
                    component="img"
                    alt="img"
                    style={style}
                    image={`${props.item.Image}`}
                    title="img"
                />
            </div>
 
            <Button className="CheckButton">
            Echale un vistazo!
            </Button>
        </Paper>
    )
}