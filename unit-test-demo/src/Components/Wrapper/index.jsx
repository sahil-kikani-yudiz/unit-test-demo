import React from 'react'
import PropTypes from 'prop-types'



const Wrapper = ({ children, style }) => {

  return (
    <section className='flex' style={{ background: 'black', ...style }}>
      {children}
    </section>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}
export default Wrapper
