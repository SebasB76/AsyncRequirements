const processSalesCoffee = async () => {
  // 1. Traer el XML como texto (función del paso 5)
  const xmlText = await getSalesCoffee();

  // 2. Convertir el texto en un árbol XML navegable
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, "application/xml");

  // 3. Sacar todas las etiquetas <row>
  const rows = xml.querySelectorAll("row");

  // 4. Construir el HTML de cada fila
  let html = "";
  rows.forEach((row) => {
    const get = (tag) => row.querySelector(tag).textContent;
    html += `
      <tr>
        <td class="border px-4 py-2">${get("hour_of_day")}</td>
        <td class="border px-4 py-2">${get("cash_type")}</td>
        <td class="border px-4 py-2">${get("money")}</td>
        <td class="border px-4 py-2">${get("coffee_name")}</td>
        <td class="border px-4 py-2">${get("Time_of_Day")}</td>
        <td class="border px-4 py-2">${get("Weekday")}</td>
        <td class="border px-4 py-2">${get("Month_name")}</td>
        <td class="border px-4 py-2">${get("Weekdaysort")}</td>
        <td class="border px-4 py-2">${get("Monthsort")}</td>
        <td class="border px-4 py-2">${get("Date")}</td>
        <td class="border px-4 py-2">${get("Time")}</td>
      </tr>`;
  });

  // 5. Inyectar las filas en el tbody
  document.querySelector("#example tbody").innerHTML = html;

  // 6. Activar el DataTable (DESPUÉS de tener los datos)
  $("#example").DataTable();
};

// Ejecutar cuando la página termine de cargar
document.addEventListener("DOMContentLoaded", processSalesCoffee);