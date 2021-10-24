import React from 'react';
import DBContext from '../../store/db-context';
import { useContext } from 'react';
import Item from './Item';
import {Link} from 'react-router-dom';

const Items = () => {
    const dbContext = useContext(DBContext);
    let content;
    let items = dbContext.itemList;
    if (dbContext.totalRecords <= 0) {
        content = <p>No Records found. Please add some.</p>
    } else {
        console.warn(items);
        content = <ul>{items.map((item)=> <Item key={item.id} item={item}/>)}</ul>;
    }
    return (
        <div>
            <h2>My Items</h2>
            {content}
            <div className="action">
                <button>
                    <Link to="/add-item">Add Item</Link>
                </button>
            </div>
        </div>
    )
}

export default Items;
