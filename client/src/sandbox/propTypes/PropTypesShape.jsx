import React from 'react'
import PropTypes from 'prop-types'

const Shape = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
});

const PropTypesShape = ({obj, str}) => {
  return (
    <div>{str}</div>
  )
}

PropTypesShape.propTypes = {
    obj: Shape.isRequired,
    str: PropTypes.string,
}

PropTypesShape.defaultProps = {
    str: "Kim",
}

export default PropTypesShape