import db from '../models/index.js';

const Products = db.products;

//Create
const addProducts = (req, res) => {
    if (!req.body.title) {
        res.status(200).json({ message: 'Please enter title' });
        return;
    };

    const productInfo = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };
};