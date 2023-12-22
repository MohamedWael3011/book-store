import axios from 'axios';
import { Order_Book} from '../interfaces/Order_Book';

const apiBaseUrl = 'http://localhost:8080/api';

const headers = {
  'Content-Type': 'application/json',
};

export async function makeOrder(userId: number, paymentMethod: string, books: Order_Book[]) {
  try {
    const response = await axios.post(`${apiBaseUrl}/makeorder`, { user_id: userId, payment_method: paymentMethod, books: books }, { headers: headers });
    return response.data;
  } catch (error) {
    console.error('Error making order:', error);
    throw error;
  }
}

export async function cancelOrder(orderId: number, userId: number) {
  try {
    const response = await axios.delete(`${apiBaseUrl}/delete`, { params: { order_id: orderId, user_id: userId }, headers: headers });
    return response.data;
  } catch (error) {
    console.error('Error cancelling order:', error);
    throw error;
  }
}

export async function getAllOrders() {
  try {
    const response = await axios.get(`${apiBaseUrl}/get/all`, { headers: headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching all orders:', error);
    throw error;
  }
}

export async function getOrdersByUser(userId: number) {
  try {
    const response = await axios.get(`${apiBaseUrl}/get/byUser`, { params: { user_id: userId }, headers: headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching orders by user:', error);
    throw error;
  }
}