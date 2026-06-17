const getSalesCoffee = async () => {
  const url = "https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml";
  const response = await fetch(url);
  return await response.text();
};


