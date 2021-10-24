import React from 'react';
import { useRef } from 'react';
import Card from '../ui/Card';
import DBContext from '../../store/db-context';
import { useContext} from 'react';
import classes from './AddItem.module.css';
import { useHistory } from 'react-router-dom';

const AddItems = (props) => {
    const titleInputRef = useRef();
    const imageUrlInputRef = useRef();
    const priceInputRef = useRef();
    const descriptionInputRef = useRef();
    const dbContext = useContext(DBContext);
    const history = useHistory();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageUrlInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const itemData = {
            id: Date.now(),
            title: enteredTitle,
            imageUrl: enteredImage,
            price: enteredPrice,
            description: enteredDescription,
        };
        dbContext.addItemToList(itemData);
        history.replace('/');
    }
    return (
        <>
            <h2 className={classes.add_item}>Add New Item.</h2>
            <Card>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.control}>
                    <label htmlFor='title'>Product Name</label>
                    <input type='text' required id='title' ref={titleInputRef} />
                    </div>
                    <div className={classes.control}>
                    <label htmlFor='image'>Product Image</label>
                    <input type='url' required id='image' ref={imageUrlInputRef} />
                    </div>
                    <div className={classes.control}>
                    <label htmlFor='address'>Price</label>
                    <input type='text' required id='address' ref={priceInputRef} />
                    </div>
                    <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        required
                        rows='5'
                        ref={descriptionInputRef}>
                    </textarea>
                    </div>
                    <div className={classes.actions}>
                    <button>Add Product</button>
                    </div>
                </form>
            </Card>
        </>
    )
}

export default AddItems;
