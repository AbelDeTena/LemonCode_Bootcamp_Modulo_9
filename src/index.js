import "./styles.css";
import { datos, sumarPagina, restarPagina } from "./data-business.js";

document.getElementById("siguiente").addEventListener("click", sumarPagina)
document.getElementById("anterior").addEventListener("click", restarPagina)


window.addEventListener("load", datos)
