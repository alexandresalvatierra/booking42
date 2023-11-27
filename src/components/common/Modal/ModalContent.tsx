import { ReactNode } from 'react'

type ModalContentProps = {
  children: ReactNode
}
const ModalContent = ({ children }: ModalContentProps) => {
  return <div className='px-4'>{children}</div>
}
export default ModalContent
