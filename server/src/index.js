import fastify from "fastify";
import cors from "@fastify/cors";

const app = fastify({
  logger: true,
});

await app.register(cors, {});

app.get("/dati", (request, response) => {
  return [
    {
      x: [12, 15, 18, 21, 24, 27],
      y: [10, 25, 15, 60, 70, 80],
    },
    {
      x: [13, 14, 15, 21, 24, 27],
      y: [10, 25, 15, 60, 70, 80],
    },
  ];
  // oppure
  // return response.send({
  //     nome: 'Mario',
  //     cognome: 'Rossi',
  //     eta: 30
  // })
});

app.listen(
  {
    port: 4000,
  },
  () => {
    console.log("ho avviato il server sulla 4000");
  }
);
