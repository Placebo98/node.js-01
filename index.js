const contacts = require("./contacts");
const { program } = require("commander");

program
  .option("-a, --action <action>", "Action to invoke")
  .option("-i, --id <id>", "user id")
  .option("-n, --name <name>", "user name")
  .option("-e, --email <email>", "user email")
  .option("-p, --phone <phone>", "user phone");

program.parse(process.argv);

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({
//   action: "add",
//   name: "Tsaryk Oleh",
//   email: "oleg.tsaryk98@gmail.com",
//   phone: "0990512501",
// });
// invokeAction({
//   action: "add",
//   name: "Melnyk Nastya",
//   email: "Nastya.tsaryk98@gmail.com",
//   phone: "09905212121",
// });

// invokeAction({ action: "remove", id: "aEJuVdwaAtqyWPYaCtAB0" });

invokeAction(options);
