const { h, render } = require("ink");
const meow = require("meow");
const { author, description } = require("../package.json");
const { languages, items } = require("./data");
const Introduction = require("./Introduction");
const Choices = require("./Choices");

meow(`
	Usage
	  $ xsedev
`);

render(
  <Introduction
    title={author.name}
    description={description}
    badges={languages}
  />
);

render(<Choices items={items} />);
