import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server.ready");
});

// get a list of 5 jokes

const jokes = [
  {
    id: 1,
    title: "The Programmer's Coffee",
    description:
      "Why do programmers prefer dark mode? Because the light attracts bugs!",
  },
  {
    id: 2,
    title: "The Broken Pencil",
    description:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 3,
    title: "The Keyboard Joke",
    description:
      "Why did the programmer quit his job? Because he didn't get arrays.",
  },
  {
    id: 4,
    title: "Binary Funnies",
    description:
      "There are 10 types of people in the world: those who understand binary, and those who don't.",
  },
  {
    id: 5,
    title: "The Debugging Dilemma",
    description: "Debugging: Removing the needles from the haystack.",
  },
];

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server at https://localhost:${port}`);
});
