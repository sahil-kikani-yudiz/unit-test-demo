import React from 'react'
import PropTypes from 'prop-types'



const Wrapper = ({ children }) => {
  
  return (
    <section className='flex' style={{ background: 'black' }}>
      {children}
    </section>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node
}
export default Wrapper
