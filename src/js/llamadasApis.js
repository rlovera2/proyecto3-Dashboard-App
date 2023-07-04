
import { imprimirValores, pintarGrafica } from "./pintar.js";

notasAlumnos ={
    id:1,
    nombre: Pedro,
    calificación: 15

};



const datosApi[0]=notasAlumnos;

const consumirApi = async () => {

const resp = await axios.get(datosApi[0]);
  
  //const resp = await axios.get("https://ucamp-api.onrender.com/api/v1/scores");
    
 


  pintarGrafica(resp.data.data);
  imprimirValores(resp.data.data);

};


export { consumirApi };