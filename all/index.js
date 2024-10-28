import express from "express";

const app = express();

let count = 0;

app.get("/count", (req, res) => {
  res.json({ count: count });
});

app.get("/increment", (req, res) => {
  count = count + 1;
  res.json({ count: count });
});

app.get("/decrement", (req, res) => {
  count = count - 1;
  res.json({ count: count });
});

let array = [];

app.get("/addition-new/:whatever", (req, res) => {
  array.push(req.params.whatever);

  res.json(array);
});

app.get("/square/:whatever", (req, res) => {
  let square = 0;
  //   square = req.params.whatever * req.params.whatever;

  res.json({ square: req.params.whatever * req.params.whatever });
});
app.get("/square", (req, res) => {
  let square = 0;
  //   square = req.params.whatever * req.params.whatever;

  res.json({ square: req.query.value * req.query.value });
});

app.get("/get-area/:height/:width", (req, res) => {
  let area = 0;
  //   square = req.params.whatever * req.params.whatever;

  res.json({ area: req.params.height * req.params.width });
});
app.get("/get-area", (req, res) => {
  let area = 0;
  //   square = req.params.whatever * req.params.whatever;

  res.json({ area: req.query.height * req.query.width });
});

app.get("/simple-interest1", (req, res) => {
  let area = 0;
  //   square = req.params.whatever * req.params.whatever;

  res.json({
    simpleInt: (req.query.amount * req.query.time * req.query.rate) / 100,
  });
});

app.get("/delete", (req, res) => {
  array.pop();

  res.json(array);
});
let obj = {
  count: 0,
  count1: 1,
  count2: 2,
};

app.get("/object", (req, res) => {
  res.json(obj);
});

app.get("/object1", (req, res) => {
  obj.count = obj.count + 1;
  res.json(obj);
});

app.get("/object2", (req, res) => {
  obj.count1 = obj.count1 + 1;
  res.json(obj);
});

app.get("/object3", (req, res) => {
  obj.count2 = obj.count2 + 1;
  res.json(obj);
});
app.get("/", (req, res) => {
  res.send("<h1>hey this is my first api project</h1>");
});

app.get("/hi", (req, res) => {
  res.send("<h1>Iam CHANDRASHEKHAR</h1>");
});

app.get("/how-are-you", (req, res) => {
  res.send("<h1>Iam Fine</h1>");
});

app.get("/facts", (req, res) => {
  res.json({
    fact: "Abraham Lincoln loved cats. He had four of them while he lived in the White House.",
    length: 82,
  });
});

app.get("/jokes", (req, res) => {
  res.json({
    fact: "Abraham Lincoln loved cats. He had four of them while he lived in the White House.",
    length: 82,
  });
});

app.listen(3000);
