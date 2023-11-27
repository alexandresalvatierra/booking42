import { ReactNode } from 'react'

type ModalFooterProps = {
  children: ReactNode
}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return (
    <>
      <div className='flex items-center justify-end gap-4 p-4'>{children}</div>
    </>
  )
}
export default ModalFooter
