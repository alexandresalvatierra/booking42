import { useEffect } from 'react'

type ModalHeaderProps = {
  title: string
  onClickClose: () => void
}

const ModalHeader = ({ title, onClickClose }: ModalHeaderProps) => {
  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClickClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEscKey)

    return () => {
      window.removeEventListener('keydown', handleEscKey)
    }
  })

  return (
    <div className='flex items-start justify-between rounded-t p-4'>
      <h3 className='text-lg font-bold'>{title}</h3>
      <button
        onClick={() => onClickClose()}
        className='focus:shadow-outline inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-black text-white transition-colors duration-500 hover:bg-emerald-700'
      >
        X
      </button>
    </div>
  )
}
export default ModalHeader
