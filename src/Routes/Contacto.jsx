import React, { useState } from 'react';

function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '' });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.nombre.length < 5 || !formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Por favor, verifique su información nuevamente');
      return;
    }

    // Envía el formulario o realiza alguna acción según tus necesidades
    // Por ejemplo, aquí puedes enviar el formulario a un servidor.
    // Después de enviar con éxito, puedes mostrar el mensaje de éxito.

    setSuccessMessage(`Gracias ${formData.nombre}, te contactaremos cuando antes vía correo electrónico.`);
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre Completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}

export default Contacto;
