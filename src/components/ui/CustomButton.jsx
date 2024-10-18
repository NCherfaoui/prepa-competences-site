import { Button } from '@/components/ui/button'
import PropTypes from 'prop-types'

const CustomButton = ({ children, onClick, className = '', ...props }) => {
  return (
    <Button
      onClick={onClick}
      className={`mt-6 text-lg py-4 text-gray-100 bg-blue-600 hover:bg-blue-700 transition-colors ${className}`}
      {...props}
    >
      {children}
    </Button>
  )
}
CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
}

export default CustomButton
