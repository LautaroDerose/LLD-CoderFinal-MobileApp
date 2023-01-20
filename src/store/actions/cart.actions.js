import { cartTypes } from "../types";
import { URL_BASE } from "../../constants/firebase" 

const { ADD_TO_CART, REMOVE_FROM_CART, CONFIRM_ORDER } = cartTypes;

export const addToCart = (item) => ({
    type: ADD_TO_CART,
    item,
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id,
});

export const confirmCart = (items, total) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_BASE}/orders.json`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items,
                    total,
                }),
            });

            // const result = await response.json();
            // Al usar response.text el cart cuando se confirma la compra se reinicia y se desibilita la compra, de la otra forma no funciona el boton
            const result = await response.text();


            dispatch({
                type: CONFIRM_ORDER,
                result,
            });
        } catch(error) {
            dispatch({
                type: CONFIRM_ORDER,
                error,
            });
        }
    };
};