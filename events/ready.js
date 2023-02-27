const client = require("../index");

client.on("ready", () =>
    console.log(`${client.user.tag} è pronto per essere utilizzato!`)
);
