const greetings = (type) => {
  if (type === 1) {
    console.log("Good Morning!");
  } else if (type === 2) {
    console.log("Good Afternoon!");
  } else if (type === 3) {
    console.log("Good Evening");
  } else if (type === 4) {
    console.log("Good Night");
  } else {
    console.log("Hello");
  }
};

greetings(1);
