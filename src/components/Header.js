import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (
    <header className='container'>
      <h1>{title}</h1>
      <Button color='green' text='hello'/>
    </header>
  )
}


Header.defaultProps = {
  title: 'task tracker'
}

Header.prototype = {
  title: PropTypes.string.isRequired
}

export default Header
