import axios from "axios";

/**
 * devuelve datos del dolar
 * @returns {{casa: {compra:string, venta:string, nombre:string}}[]}
 */
export const precioDolar = async () => {
  try {
    const { data } = await axios.get(
      "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
