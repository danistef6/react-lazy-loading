import React from 'react';
import CarouselPromo from './CarouselPromo';
import Pricing from './Pricing';

const div = {
    'display': 'flex',
    'align-items': 'flex-start',
};

export default function Container() {
    return (
    <div style={div}>
        <div>
        <Pricing/>
        </div>
        <CarouselPromo/>
    </div>
    )
}