const express = require('express');
const app = express();
const port = 3000;

// Endpoint principal para el taller (Paso 9 del examen: Simular incidente)
app.get('/owners', (req, res) => {
    // Más adelante cambiaremos este 200 por un 500 para simular un bug en producción
    res.status(200).json({ message: "Lista de dueños (owners) funcionando correctamente" });
});

// Health checks simulando Spring Boot Actuator (Para el Paso 6 del examen)
app.get('/actuator/health/liveness', (req, res) => {
    res.status(200).send('OK');
});

app.get('/actuator/health/readiness', (req, res) => {
    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`Aplicación Node corriendo en el puerto ${port}`);
});