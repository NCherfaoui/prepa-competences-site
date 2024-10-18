import { useSpring, animated } from 'react-spring'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import PropTypes from 'prop-types'

const MindomoModal = ({ isOpen, onClose }) => {
  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)'
  })

  if (!isOpen) return null

  return (
    <animated.div
      style={modalAnimation}
      className='fixed inset-0 bg-black bg-opacity-80 bg-blur backdrop-blur backdrop-saturate-150 flex items-center justify-center z-50'
    >
      <div className='bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative'>
        <Button
          onClick={onClose}
          className='absolute top-0 right-0 bg-transparent text-black hover:text-gray-700 hover:bg-gray-200 p-2 rounded-full'
        >
          <X size={24} />
        </Button>
        <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>
          Diagramme de pensée Prépa Compétences
        </h2>
        <iframe
          className=''
          width='100%'
          height='500'
          style={{ border: '0px solid #d0d0d0', borderRadius: '6px' }}
          src='https://www.mindomo.com/mindmap/prpa-comptences-06ef443acd6647dd9f82229149ddb1f7'
          title='Mindomo Diagram'
          allowFullScreen
        >
          Your browser does not support frames.{' '}
          <a
            href='https://www.mindomo.com/mindmap/prpa-comptences-06ef443acd6647dd9f82229149ddb1f7'
            target='_blank'
            rel='noreferrer'
          >
            View
          </a>{' '}
          this map on its original site. It was created using{' '}
          <a href='https://www.mindomo.com' target='_blank' rel='noreferrer'>
            Mindomo
          </a>
          .
        </iframe>
      </div>
    </animated.div>
  )
}

MindomoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default MindomoModal
