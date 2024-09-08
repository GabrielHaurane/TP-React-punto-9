import { React, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListasCitas from "./ListasCitas";

const Admin = () => {
  const [citas, setCitas] = useState([]);
  useEffect(() => {
    const citasGuardadas = JSON.parse(localStorage.getItem("citas")) || [];
    setCitas(citasGuardadas);
  }, []);
  const [form, setForm] = useState({
    duenhio: "",
    mascota: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const citaNueva = {
      mascota: form.mascota,
      duenhio: form.duenhio,
      fecha: form.fecha,
      hora: form.hora,
      sintomas: form.sintomas,
    }
    const citasActualizadas = [...citas, citaNueva];
    localStorage.setItem("citas", JSON.stringify(citasActualizadas));
    setCitas(citasActualizadas);
    setForm({
      duenhio: "",
      mascota: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  }
    
    const borrarCita = (index) => {
      const citasActualizada = citas.filter((_, i) => i !== index);
      setCitas(citasActualizada);
      localStorage.setItem("citas", JSON.stringify(citasActualizada));
    };
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };

    return (
      <div>
        <Card>
        <Card.Header>Llenar el formulario para crear una cita</Card.Header>
        <Form onSubmit={handleSubmit}>
          <Card.Body className="celeste">
            <Form.Group className="mb-3" controlId="formBasicMascota">
              <Form.Label>Nombre de la mascota</Form.Label>
              <Form.Control
                type="text"
                required
                value={form.mascota}
                onChange={handleChange}
                name="mascota"
                placeholder="nombre de mascota"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDuenhio">
              <Form.Label>Nombre del dueño</Form.Label>
              <Form.Control
                type="text"
                value={form.duenhio}
                onChange={handleChange}
                name="duenhio"
                placeholder="nombre de dueño"
              />
            </Form.Group>
            <div className="row">
              <div className="col-6">
                <Form.Group className="mb-3" controlId="formBasicFecha">
                  <Form.Label>Fecha</Form.Label>
                  <Form.Control
                    maxLength={10}
                    minLength={10}
                    type="date"
                    required
                    value={form.fecha}
                    onChange={handleChange}
                    name="fecha"
                    
                  />
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group className="mb-3" controlId="formBasicHora">
                  <Form.Label>Hora</Form.Label>
                  <Form.Control
                    maxLength={5}
                    minLength={5}
                    type="time"
                    required
                    value={form.hora}
                    onChange={handleChange}
                    name="hora"
                    placeholder="hh:mm"
                  />
                </Form.Group>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicSintomas">
              <Form.Label>Sintomas</Form.Label>
              <Form.Control
                type="text"
                maxLength={50}
                required
                value={form.sintomas}
                onChange={handleChange}
                name="sintomas"
                placeholder="describir sintomas"
              />
            </Form.Group>
          </Card.Body>
          <Card.Footer className="card-footer">
            <Button className="celeste" type="submit">
              Agregar Nueva Cita
            </Button>
          </Card.Footer>
        </Form>
      </Card>
        <ListasCitas citas={citas} borrarCita={borrarCita}></ListasCitas>
      </div>
    );
  };


export default Admin;
