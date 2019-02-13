let messages = [];
let id = 0;

module.exports = {
      create: (request, response) => {
        const {text, time} = request.body
        messages.push(text, time, id);
        id++;
        response.status(200).send(messages);
      },
      read: (request, response) => {
        response.status(200).send(messages);
      },
      update: (request, response) =>{
        const {text} = request.body;
        const updateId = request.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateId);
        let message = messages[messageindex];

        messages[messageIndex] = {
              id: message.id,
              text: text || message.text,
              time: messages.time 
        };
        response.status(200).send(messages);
      },
      delete: (request, response) =>{
         const deleteID = request.params.id;
         messageIndex = messages.findIndex(message => message.id == deleteID);
         messages.splice(messageIndex, 1);
         response.status(200).send(messages);
      }
}
