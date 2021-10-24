import { createContext, useState } from "react";

const DBContext = createContext({
    itemList: [],
    totalRecords: 0,
    addItemToList: (item) => {},
    removeItemFromList: (itemId) => {},
});

export function DBContextProvider(props) {
    const [itemList, setItemList] = useState([]);

    function addItemToListHnadler (item) {
        setItemList((prevItems) => {
            return prevItems.concat(item);
        });
    }

    function removeItemFromListHandler (itemId) {
        setItemList((prevItems) => {
            return prevItems.filter(ele => ele.id !== itemId);
        });
    }

    const context = {
        itemList: itemList,
        totalRecords: itemList.length,
        addItemToList: addItemToListHnadler,
        removeItemFromList: removeItemFromListHandler,
    }

    return (
        <DBContext.Provider value={context}>
            {props.children}
        </DBContext.Provider>
    );
}

export default DBContext;