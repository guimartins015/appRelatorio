if("serviceWorker" in navigator){
  navigator.serviceWorker
  .register("./sw.js")
  .then((reg) => console.log("Registro de SW exitoso",reg))
  .catch((err) => console.log("Erro ao tentar registrar SW", err));
}else{
   console.log("Não há serviceWorker")
}