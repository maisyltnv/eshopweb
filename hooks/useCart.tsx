import React, { createContext, useState, useContext } from "react";
import { CartProductType } from "@/app/product/[productId]/ProductDetails";

type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartContextType[] | null;
    handleAddProductToCart: (product: CartContextType) => void
};

export const CartContext = createContext<CartContextType | null>(null);

interface Props {
    [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
    const [CartTotalQty, setCartTotalQty] = useState(10);
    const [cartProducts,setCartProduct]=useState<CartProductType[] | null>(null);
    const value = {
        CartTotalQty
    }

    return (<CartContext.Provider value={value} {...props} />);
};


export const useCart = () => {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error("useCart must be use within a CartContextProvider")
    }
    return context
};

