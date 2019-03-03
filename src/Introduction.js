const { h, Text, Color, Bold } = require("ink");
const PropTypes = require("prop-types");
const BigText = require("ink-big-text");

const Introduction = ({ title, description, badges }) => (
  <div>
    <BigText text={title} font="block" colors={["yellow", "red"]} />
    <br />
    <div>
      {"  "}
      <Text>{description}</Text>
    </div>
    <br />
    <div>
      {"  "}
      {badges.map(({ value, color }) => {
        const colorProps = {};
        if (color.startsWith("#")) {
          colorProps.bgHex = color;
        } else {
          colorProps.bgKeyword = color;
        }
        return (
          <span>
            <Color {...colorProps}>
              {" "}
              <Bold>{value}</Bold>{" "}
            </Color>{" "}
          </span>
        );
      })}
    </div>
  </div>
);

Introduction.defaultProps = {
  badges: []
};

Introduction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badges: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      color: PropTypes.string
    })
  )
};

module.exports = Introduction;
