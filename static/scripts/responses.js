function getBotResponse(input) {
    //rock paper scissors
    if (input == "stone") {
        return "paper";
    } else if (input == "paper") {
        return "scissor";
    } else if (input == "scissor") {
        return "stone";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello sir! If you need help then answer yes.";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "yes") {
        return "express your problem in whatsapp!";
    } else if (input == "ok") {
        return "ok bye sir have a good day!";
    } else if (input == "game") {
        return "You want to play with me then type any this words! (stone),(paper)and(scissor)";
    } else {
        return "whatever you want to say then message on whatsapp!";
    }
}