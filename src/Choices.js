const { h } = require("ink");
const PropTypes = require("prop-types");
const open = require("opn");
const SelectInput = require("ink-select-input");

const handleSelect = ({ url, action }) =>
  url ? open(url, { wait: false }) : action && action();

const closeItem = {
  label: "Quit",
  action: () => {
    process.exit();
  }
};

const Choices = ({ items }) => (
  <SelectInput items={[...items, closeItem]} onSelect={handleSelect} />
);

Choices.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
      action: PropTypes.func
    })
  ).isRequired
};

module.exports = Choices;
