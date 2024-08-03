require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  login: "MKJ0019",
  id: 134766594,
  node_id: "U_kgDOCAhgAg",
  avatar_url: "https://avatars.githubusercontent.com/u/134766594?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/MKJ0019",
  html_url: "https://github.com/MKJ0019",
  followers_url: "https://api.github.com/users/MKJ0019/followers",
  following_url: "https://api.github.com/users/MKJ0019/following{/other_user}",
  gists_url: "https://api.github.com/users/MKJ0019/gists{/gist_id}",
  starred_url: "https://api.github.com/users/MKJ0019/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/MKJ0019/subscriptions",
  organizations_url: "https://api.github.com/users/MKJ0019/orgs",
  repos_url: "https://api.github.com/users/MKJ0019/repos",
  events_url: "https://api.github.com/users/MKJ0019/events{/privacy}",
  received_events_url: "https://api.github.com/users/MKJ0019/received_events",
  type: "User",
  site_admin: false,
  name: "Mayank ",
  company: "@flexigeekshub ",
  blog: "https://im-mayank.netlify.app",
  location: "India",
  email: null,
  hireable: null,
  bio: "Full Stack Web developer | Cryptography | Passionate about research & development and coding | LEARNER",
  twitter_username: "im__mayank",
  public_repos: 21,
  public_gists: 0,
  followers: 11,
  following: 5,
  created_at: "2023-05-27T06:49:06Z",
  updated_at: "2024-08-02T13:50:34Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hey twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login at chai code.</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

// app.listen(port, () => {
app.listen(process.env.PORT, () => {
  console.log(`Example app listining on port ${port}`);
});
