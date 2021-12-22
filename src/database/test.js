const database = require("./db.js");
const saveOrphanage = require("./saveOrphanage.js");

database.then(async (db) => {
  //inserir dados na tabela
  // await saveOrphanage(db, {
  //   lat: "-12.8231567",
  //       lng: "-38.4139921",
  //       name: "Lar do Zé",
  //       about: "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
  //       whatsapp: "71988776685",
  //       images: [
  //           "https://images.unsplash.com/photo-1592840330988-3c88e47c1aac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

  //           "https://images.unsplash.com/photo-1574647267419-cd3adf200aed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  //       ],
  //       instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
  //       opening_hours: "Horário de visitas Das 18h até 8h",
  //       open_on_weekends: "1",
  // });

  //consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  // consultar somente 1 orphanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"');
  console.log(orphanage);

  //apagar dados da tabela
  await db.run("DELETE FROM orphanages WHERE id = '2'");

  // Zerar tabela
  // await db.run("DELETE FROM orphanages")
});
