import { URL } from "url";

const unugha = new URL("https://siakad.unugha.ac.id/gate/login");

unugha.host = "https://siakad.unugha.ac.id";
unugha.searchParams.append("status", "login");

console.info(unugha.toString());
console.info(unugha.href);
console.info(unugha.protocol);
console.info(unugha.host);
console.info(unugha.pathname);
console.info(unugha.searchParams);
