import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCitas from './ItemCitas';
const ListasCitas = ({citas, borrarCita}) => {
    return (
        <Card className='my-5'>
            <Card.Header> Hay {citas.length} citas</Card.Header>
            <Card.Body className='celeste'>
                <section className='row'>
                {citas.map((cita, index) => (
                    <ItemCitas key={index} cita={cita} index={index} borrarCita={borrarCita} />
                ))}
                </section>
            </Card.Body>
            <Card.Footer className='card-footer'>
            </Card.Footer>
        </Card>
    );
};

export default ListasCitas;