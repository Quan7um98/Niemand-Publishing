const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderItemSchema = new Schema({
    name: String, // Item name, e.g., "Bread", "Cake"
    quantity: Number, // Quantity of the item
});

const orderSchema = new Schema({
    customerName: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    items: [orderItemSchema], // An array of items
    orderDate: {
        type: Date,
        default: Date.now, // Automatically sets to current date
    },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

mongoose.connect('mongodb://localhost/bakeryDB', { useNewUrlParser: true, useUnifiedTopology: true });

const createOrder = async () => {
    const newOrder = new Order({
        customerName: 'John Doe',
        contactInfo: 'john.doe@example.com',
        items: [
            { name: 'Bread', quantity: 2 },
            { name: 'Cake', quantity: 1 },
        ],
    });

    try {
        await newOrder.save();
        console.log('Order saved:', newOrder);
    } catch (error) {
        console.error('Error saving order:', error);
    }
};

createOrder();
