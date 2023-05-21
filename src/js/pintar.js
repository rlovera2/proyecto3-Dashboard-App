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
 
 for ( let i = 0; i < datos.length; i++ ) {
    notasIds[i]=ids[i];
    notasNombres[i]=nombres[i];
    notasCalificaciones[i]=calificaciones[i];

    console.log(notasIds[i]);

    cuerpoTabla.innerHTML +=`<tr>
                             <th scope="row" class="registros" onmouseover="cambiar_color_over('registro')"> ${notasIds[i]}</th>
                             <td class="registros"> ${notasNombres[i]} </td>
                             <td class="registros"> ${notasCalificaciones[i]} </td>
                             <tr>`;
 }
}

 const cambiar_color_over = (fila) => {
     //fila.style.backgroundColor ="Pink"; 
 document.getElementById("registro").style.backgroundColor ="Pink";
   
   //fila.bgColor ="Pink";
   fila.style.cursor="hand";
};


const cambiar_color_out = (fila) => {
  fila.style.backgroundColor ="rgb(226, 234, 255)"; 

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
          label: "# of Votes",
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

export { pintarGrafica,imprimirValores };


window.addEventListener("load", imprimirValores);