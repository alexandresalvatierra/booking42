import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type ModalFooterActionProps = {
  text: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const ModalFooterAction = ({ text, ...rest }: ModalFooterActionProps) => {
  return (
    <>
      <button
        {...rest}
        className={twMerge(
          'rounded border border-emerald-500 bg-emerald-500 px-4 py-2 text-white outline-none duration-300 hover:border-transparent hover:bg-emerald-700 focus:outline-none active:bg-emerald-800',
          rest.className
        )}
        type='button'
      >
        {text}
      </button>
    </>
  )
}
export default ModalFooterAction
