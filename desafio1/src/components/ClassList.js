import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const classesData = [
    { id: 1, name: 'Yoga', time: '10:00 AM', slots: 5 },
    { id: 2, name: 'Spinning', time: '12:00 PM', slots: 8 },
    { id: 3, name: 'Pesas', time: '02:00 PM', slots: 6 },
];

const ClassList = ({ onReserve }) => {
    const [classes, setClasses] = useState(classesData);

    const handleReserve = (id) => {
        setClasses(classes.map(cls =>
            cls.id === id && cls.slots > 0 ? { ...cls, slots: cls.slots - 1 } : cls
        ));
        onReserve(id);
    };

    return (
        <Container>
            <Row>
                {classes.map(cls => (
                    <Col key={cls.id} md={4} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{cls.name}</Card.Title>
                                <Card.Text>Hora: {cls.time}</Card.Text>
                                <Card.Text>Cupos disponibles: {cls.slots}</Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => handleReserve(cls.id)}
                                    disabled={cls.slots === 0}
                                >
                                    Reservar
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ClassList;