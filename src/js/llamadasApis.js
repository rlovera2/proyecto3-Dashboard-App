import { imprimirValores, pintarGrafica } from "./pintar.js";

const consumirApi = async () => {
  const resp = await axios.get(
    "https://proyecto-5-aplicacion-de-comercio.onrender.com/api/notas"
  );

  pintarGrafica(resp.data.data);
  imprimirValores(resp.data.data);
};

export { consumirApi };
