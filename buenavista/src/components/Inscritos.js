import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import {url} from '../helpers/url';
import '../styles/Inscritos.css';

export const Inscritos = () => {

    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
            axios.get(url)
            .then(response => {
                setRegistro(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteData = (id) => {
         axios.delete(url+id)
         .then(response => {
             getData();
           console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    console.log(registro)
    return (
        <div>
            <table className="tabla">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Tipo de animal</th>
                    <th>Edad</th>
                    <th>Peso</th>
                    <th>Raza</th>
                    <th>Imagen</th>
                    <th>Direccion</th>
                    </tr>
                </thead>
                
                 <tbody>
                     
                     {
                         registro.map(r => (
                             <tr key={r.id}>
                                 <td>{r.name}</td>
                                 <td>{r.animal}</td>
                                 <td>{r.edad}</td>
                                 <td>{r.peso}</td>
                                 <td>{r.raza}</td>
                                 <td>{r.direccion}</td>
                                 <td><img src={r.imagen} width="100" height="90" alt=""/></td>
                                 <td><button onClick={() => deleteData(r.id)}>Eliminar</button></td>
                            </tr>
                         ))
                     }
                 </tbody>
            </table>
        </div>
    )
}
