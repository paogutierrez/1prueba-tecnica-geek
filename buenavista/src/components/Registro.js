import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';
import {archivosMulti} from '../helpers/archivosMulti';
import '../styles/Registro.css';

export const Registro = () => {

    const [mascotas, setMascotas] = useState({
        
        name:'',
        animal:'',
        edad:'',
        peso:'',
        raza:'',
        imagen:'',
        direccion:''
    })

    const {name, animal, edad, peso, raza, imagen} = mascotas;

    const enviarDatos = () => {
         axios.post(url,mascotas)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
         
    }

    const handleChanged = ({target}) => {
        setMascotas({
          ...mascotas,
          [target.name]: target.value
        })
    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
      }

      const handleFileChange = (e) => {
        const file = e.target.files[0];
         archivosMulti(file)
        .then(response => {
            mascotas.imagen = response;
        }).catch(error => {
            console.log(error.message)
        }) 

    }

    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registra tu mascota</h2>
           <hr/>
               <div>
                   <label>Nombre</label>
                   <input id="inputNombre" name="nombre" value={name} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Tipo Animal</label>
                   <input id="inputAnimal" name="animal" value={animal} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Edad</label>
                   <input id="inputEdad" type="number" name="edad" value={edad} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Peso</label>
                   <input id="inputPeso" type="number" name="peso" value={peso} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Raza</label>
                   <input id="input raza" type="text" name="raza" value={raza} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Dirección</label>
                   <input id="inputDireccion" name="direccion"  onChange={handleChanged}/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" value={imagen}    onChange={handleFileChange}/>
                    
               </div>
               <div>
                   <button onClick={() => enviarDatos()} id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}