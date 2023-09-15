// Home.js
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './AppContext';

function Home() {
  const { state, dispatch } = useAppContext();
  const { apiData } = state;

  useEffect(() => {
    // Lógica para obtener datos de la API y guardarlos en el estado global.
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'SET_API_DATA', payload: data });
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      {apiData &&
        apiData.map((dentist) => (
          <div key={dentist.id}>
            <Link to={`/dentist/${dentist.id}`}>
              <h2>{dentist.name}</h2>
            </Link>
            <p>Email: {dentist.email}</p>
            <p>Teléfono: {dentist.phone}</p>
            <p>Website: {dentist.website}</p>
          </div>
        ))}
    </div>
  );
}

export default Home;


