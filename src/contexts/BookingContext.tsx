import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

type BookingContextProps = {
  name: string
  setName: Dispatch<SetStateAction<string>>
  checkIn: Date
  setCheckIn: Dispatch<SetStateAction<Date>>
  checkOut: Date
  setCheckOut: Dispatch<SetStateAction<Date>>
}

const BookingContext = createContext<BookingContextProps>({
  name: '',
  setName: () => {},
  checkIn: new Date(),
  setCheckIn: () => {},
  checkOut: new Date(),
  setCheckOut: () => {},
})

type BookingContextProviderProps = {
  children: ReactNode
}

export const BookingContextProvider: React.FC<BookingContextProviderProps> = ({
  children,
}) => {
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(today.getDate() + 1)
  const [name, setName] = useState('')
  const [checkIn, setCheckIn] = useState(today)
  const [checkOut, setCheckOut] = useState(tomorrow)

  const contextValue: BookingContextProps = {
    name,
    setName,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
  }

  return (
    <BookingContext.Provider value={contextValue}>
      {children}
    </BookingContext.Provider>
  )
}

export default BookingContext
