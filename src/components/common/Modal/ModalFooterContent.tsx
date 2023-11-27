import { ReactNode } from 'react'

type ModalFooterContentProps = {
  children: ReactNode
}

const ModalFooterContent = ({ children }: ModalFooterContentProps) => {
  return <>{children}</>
}
export default ModalFooterContent
