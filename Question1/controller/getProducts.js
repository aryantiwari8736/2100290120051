import {getProd, getProdById } from "../services/prodservice.js"
export async function GetAllProduct(req, res) {
    const { categoryname } = req.params;
    const { top, minPrice, maxPrice, page = 1, sortBy, sortOrder } = req.query;

    try {
        const products = await getProd(categoryname, top, minPrice, maxPrice, page, sortBy, sortOrder);
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export async function GetProdById (req, res) {
    const { categoryname, productid } = req.params;

    try {
        const product = await getProdById(categoryname, productid);
        res.json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

