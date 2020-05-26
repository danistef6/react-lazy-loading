import React from 'react';
import Carousel from 'react-material-ui-carousel'
import CardMedia from '@material-ui/core/CardMedia';
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';
 
export default function Example(props)
{
    var items = [
        {
            Image: "https://destinosturisticos.hiperarticulos.com/wp-content/uploads/2015/01/lugares-tur%C3%ADsticos-de-Francia-5-1024x571.jpg",
        },
        {
            Image: "https://i.pinimg.com/474x/1e/b4/30/1eb4302912d00952c9f2b74a48a3c8f9.jpg",
        },
        {
            Image: "https://enviajes.cl/wp-content/uploads/2013/10/Lugares-turisticos-de-Mexico-Ciudad-de-Mexico.jpg",
        },
        {
            Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlQQl_b1hhwGPL7VCNIp2A7wBIwqWYDmzAD0qiP4S5WvLbu6ro&usqp=CAU",
        },
        {
            Image: "https://images.memphistours.com/large/8a0626a248f5a4a32f69d7568023a2dd.jpg",
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
            <h2>Nuestro Destinos Promo</h2>
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