import { ReactNode } from 'react'

type ModalRootProps = {
  children: ReactNode
  onClickOutside: () => void
}
const ModalRoot = ({ children, onClickOutside }: ModalRootProps) => {
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClickOutside()
    }
  }

  return (
    <div
      id='wrapper-modal'
      onClickCapture={handleClickOutside}
      className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-stone-950/80 outline-none focus:outline-none'
    >
      <div className='relative mx-2 my-6 w-full max-w-xl'>
        <div className='relative flex w-full flex-col rounded-lg border-0 bg-stone-900 shadow-lg outline-none focus:outline-none'>
          {children}
        </div>
      </div>
    </div>
  )
}
export default ModalRoot
