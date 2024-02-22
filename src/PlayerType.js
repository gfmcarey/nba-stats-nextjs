import PropTypes from "prop-types"

const PlayerType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  team: PropTypes.string.isRequired,
});

export default PlayerType;