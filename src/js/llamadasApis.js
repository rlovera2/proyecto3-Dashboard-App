
import { imprimirValores, pintarGrafica } from "./pintar.js";

const consumirApi = async () => {
  const resp = await axios.get("https://ucamp-api.onrender.com/api/v1/scores");
 


  pintarGrafica(resp.data.data);
  imprimirValores(resp.data.data);

};


export { consumirApi };