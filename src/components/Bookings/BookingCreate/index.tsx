import { useContext, ChangeEvent, FormEvent } from 'react'
import BookingContext from '../../../contexts/BookingContext'

type Property = {
  id: string
  title: string
  description: string
  image: string
  price: number
}

type BookingCreateProps = {
  property: Property
  onSubmit: () => void
}

const BookingCreate = ({ property, onSubmit }: BookingCreateProps) => {
  const { name, setName, checkIn, setCheckIn, checkOut, setCheckOut } =
    useContext(BookingContext)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleCheckInChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckIn(new Date(e.target.value))
  }
  const handleCheckOutChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckOut(new Date(e.target.value))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <>
      <img src={property.image} alt={property.title} />
      <form
        onSubmit={(e) => handleSubmit(e)}
        className='mb-2 mt-6 grid w-full gap-6'
      >
        <div>
          <label className='mb-1 block text-left text-sm font-bold text-emerald-500'>
            Name *
          </label>
          <input
            value={name}
            onChange={handleNameChange}
            className='w-full appearance-none rounded border bg-stone-950 p-2 text-white'
          />
        </div>
        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label className='mb-1 block text-left text-sm font-bold text-emerald-500'>
              Check In *
            </label>
            <input
              type='date'
              min={new Date().toISOString().split('T')[0]}
              value={checkIn.toISOString().split('T')[0]}
              data-date-format='yyyy-MM-dd'
              onChange={handleCheckInChange}
              className='w-full appearance-none rounded border bg-stone-950 p-2 text-white'
            />
          </div>
          <div>
            <label className='mb-1 block text-left text-sm font-bold text-emerald-500'>
              Check Out *
            </label>
            <input
              type='date'
              min={
                checkIn.toISOString().split('T')[0] ||
                new Date().toISOString().split('T')[0]
              }
              value={checkOut.toISOString().split('T')[0]}
              data-date-format='yyyy-MM-dd'
              onChange={handleCheckOutChange}
              className='w-full appearance-none rounded border bg-stone-950 p-2 text-white'
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default BookingCreate
