import React, { useState } from 'react';
import './Product.scss';

const Product = props => {
    const { image, title, description, price, author } = props.props; // TODO: Need to check all of this on the back end
    const className = props.props.className ? props.props.className : 'product';

    const [isShown, setShown] = useState(false);

    return (
        <article className={className}>

        </article>
    );
}

export default Product;