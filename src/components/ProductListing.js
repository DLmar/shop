import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import {useEffect} from "react";
import {setProducts} from "../redux/actions/productsActions";

const ProductListing = () => {

    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch();

    const getProducts = async () =>{
        const response = await  axios
            .get("https://fakestoreapi.com/products")
            .catch((err)=>{
            console.log("Error: ",err)

        });

        dispatch(setProducts(response.data));
    };

    useEffect(()=>{
        getProducts();
    },[])

    console.log("Products: ", products)
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
};

export default ProductListing;
