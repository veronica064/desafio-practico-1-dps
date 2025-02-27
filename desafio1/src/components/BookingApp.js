import React, { useState } from 'react';
import ClassList from './ClassList';
import { Container, ListGroup, Alert } from 'react-bootstrap';

const BookingApp = () => {
    const [reservedClasses, setReservedClasses] = useState([]);
    const [message, setMessage] = useState('');

    const handleReserve = (id) => {
        if (reservedClasses.includes(id)) {
            setMessage('Ya has reservado esta clase.');
            return;
        }
        setReservedClasses([...reservedClasses, id]);
        setMessage('Reserva realizada con éxito.');
    };

    return (
        <Container>
            {message && <Alert variant="info">{message}</Alert>}
            <ClassList onReserve={handleReserve} />
            <h3>Clases Reservadas:</h3>
            <ListGroup>
                {reservedClasses.map(id => (
                    <ListGroup.Item key={id}>Clase ID: {id}</ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default BookingApp;