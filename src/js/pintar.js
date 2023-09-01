const ctx = document.getElementById("myChart");
const cuerpoTabla = document.getElementById("cuerpoTabla");

//*****************************************************/
//***************** IMPRIMIENDO VALORES ***************/
//*****************************************************/

const imprimirValores = (datos) => {
  const ids = datos.map((dato) => {
    return dato.id;
  });

  const nombres = datos.map((dato) => {
    return dato.nombre;
  });

  const calificaciones = datos.map((dato) => {
    return dato.calificacion;
  });

  console.log(nombres);

  const notasIds = [];
  const notasNombres = [];
  const notasCalificaciones = [];

  for (let i = 0; i < datos.length; i++) {
    notasIds[i] = ids[i];
    notasNombres[i] = nombres[i];
    notasCalificaciones[i] = calificaciones[i];

    console.log(notasIds[i]);

    cuerpoTabla.innerHTML += `<tr>
                             <th scope="row"  
                             id="registroId${i}" 
                             onmouseover="cambiar_color_over('registroId${i}','registroNombre${i}','registroCalificacion${i}')"  
                             onmouseout="cambiar_color_out('registroId${i}','registroNombre${i}','registroCalificacion${i}')" 
                             class="registros"> ${notasIds[i]}</th>

                             <td class="registros" 
                             id="registroNombre${i}" 
                             onmouseover="cambiar_color_over('registroId${i}','registroNombre${i}','registroCalificacion${i}')"  
                             onmouseout="cambiar_color_out('registroId${i}','registroNombre${i}','registroCalificacion${i}')"
                             > ${notasNombres[i]} </td>

                             <td class="registros"id="registroCalificacion${i}" 
                             onmouseover="cambiar_color_over('registroId${i}','registroNombre${i}','registroCalificacion${i}')"   
                             onmouseout="cambiar_color_out('registroId${i}','registroNombre${i}','registroCalificacion${i}')" 
                             > ${notasCalificaciones[i]} </td>
                             <tr>`;
  }
};

//*****************************************************/
//***************** DIBUJANDO EL GRAFICO **************/
//*****************************************************/

const pintarGrafica = (datos) => {
  const calificaciones = datos.map((dato) => {
    return dato.calificacion;
  });

  const nombres = datos.map((dato) => {
    return dato.nombre;
  });

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: nombres,
      datasets: [
        {
          label: "# NOTAS",
          data: calificaciones,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

export { pintarGrafica, imprimirValores };

window.addEventListener("load", imprimirValores);
