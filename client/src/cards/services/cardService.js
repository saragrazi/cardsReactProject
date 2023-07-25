import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8181';

export const getCards = async() => {
    try {
        const { data } = await axios.get(`${apiUrl}/cards`);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error.message);
    }
};

export const getCard = async id => {
    try {
        const { data } = await axios.get(`${apiUrl}/cards/${id}`);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error.messgae);
    }
};

export const getMyCards = async() => {
    try {
        const { data } = await axios.get(`${apiUrl}/cards/my-cards`);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error.messgae);
    }
};

export const createCard = async card => {
    try {
        const { data } = await axios.post(`${apiUrl}/cards`, card);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error.messgae);
    }
};

export const editCard = async card => {
    try {
        const { data } = await axios.put(`${apiUrl}/cards`, card);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error.messgae);
    }
};

export const likeCard = async cardId => {
    try {
        const { data } = await axios.put(`${apiUrl}/cards/${cardId}`);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error.messgae);
    }
};

export const deleteCard = async cardId => {
    try {
        const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error.messgae);
    }
};