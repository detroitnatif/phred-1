import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button
<<<<<<< HEAD
                    color={showAdd ? 'red' : '#3EB489'}
=======
                    color={showAdd ? 'red' : 'green'}
>>>>>>> dda0b971dc5115a3ec7ca81db54083098b82a18f
                    text={showAdd ? 'HOME' : 'ADD NEW ENTRY'}
                    onClick={onAdd}
                />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'PHRED Kit',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header