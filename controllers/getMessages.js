const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

async function getMessages(req, res) {
  if (!messages) {
    res.send("There is no messages");
  }
  res.send(JSON.stringify(messages));
}
module.exports = { getMessages };
