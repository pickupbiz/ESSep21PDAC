const greetingsOptm = (type) => {
  switch (type) {
    case "M":
      console.log("Good Morning!");
      break;
    case "A":
      console.log("Good Afternoon!");
      break;
    case "E":
      console.log("Good evening!");
      break;
    case "N":
      console.log("Good Night!");
      break;
    default:
      console.log("Hello");
  }
};

greetingsOptm("E");
