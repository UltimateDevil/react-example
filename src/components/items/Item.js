import React from 'react';
import Card from '../ui/Card';
import classes from './Item.module.css';

const Item = (props) => {
    let item = props.item;
    return (
        <li className={classes.list_item}>
            <Card className={classes.card}>
                <div>
                    <img src={item.imageUrl} alt={item.title}/>
                </div>
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                </div>
                <div className="action">
                    <button>Add to Cart</button>
                </div>
            </Card>
        </li>
    )
}

export default Item;
