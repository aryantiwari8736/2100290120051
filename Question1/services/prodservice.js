import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import getToken from "../utils/auth.js"
const BASE_URL = 'http://20.244.56.144/test';
const COMPANIES = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];



//get all products function 
export const getProd = async (categoryname, top = 10, minPrice = 0, maxPrice = Infinity, page = 1, sortBy, sortOrder) => {
    const allProducts = [];
    const limit = Math.min(parseInt(top, 10), 10); // Enforce max limit of 10 per page
    const token = await getToken();

    for (const company of COMPANIES) {
        try {
            const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${categoryname}/products`, {
                headers: { Authorization: `Bearer ${token}` },
                params: { top: limit, minPrice, maxPrice }
            });

            response.data.forEach(product => {
                product.id = uuidv4();
                product.company = company;
            });

            allProducts.push(...response.data);
        } catch (error) {
            console.error(`Error fetching data from ${company}: ${error.message}`);
        }
    }

    // Sorting logic
    if (sortBy) {
        allProducts.sort((a, b) => {
            if (sortOrder === 'desc') {
                return b[sortBy] - a[sortBy];
            }
            return a[sortBy] - b[sortBy];
        });
    }

    // Pagination logic
    const totalPages = Math.ceil(allProducts.length / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedProducts = allProducts.slice(startIndex, endIndex);

    return {
        products: paginatedProducts,
        pagination: {
            totalProducts: allProducts.length,
            totalPages: totalPages,
            currentPage: page,
            pageSize: limit
        }
    };
};


export const getProdById = async (categoryname, productid) => {
    const allProducts = [];
    const token = await getToken();
    for (const company of COMPANIES) {
        const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${categoryname}/products`, {
            headers: { Authorization: `Bearer ${token}` },
            params: { top: 100 }
        });
        response.data.forEach(product => {
            product.id = uuidv4();
            product.company = company;
        });
        allProducts.push(...response.data);
    }

    return allProducts.find(product => product.id === productid);
};

