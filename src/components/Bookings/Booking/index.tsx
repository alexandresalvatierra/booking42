type Property = {
  id: string
  title: string
  description: string
  price: number
  image: string
}

type Booking = {
  id: string
  name: string
  checkIn: Date
  checkOut: Date
  property: Property | null
}

type BookingProps = {
  booking: Booking
  onDelete: (id: string) => void
}

const Booking = ({ booking, onDelete }: BookingProps) => {
  return (
    <div className='mb-4 flex w-full flex-col justify-start gap-4 rounded rounded-xl border border-emerald-900 p-4 shadow-xl md:flex-row'>
      <div className='relative'>
        <img src={booking.property?.image} className='h-36 w-52 rounded-xl' />
        <span className='absolute bottom-2 right-2 rounded bg-stone-900/70 px-2 py-1 text-sm font-bold text-emerald-300'>
          $ {booking.property?.price}
        </span>
      </div>
      <div className='flex flex-col items-start justify-start'>
        <span className='mb-4 text-xl font-bold'>
          {booking.property?.title}
        </span>
        <span>
          <span className='mr-1 text-sm font-normal text-stone-400'>
            Check in:
          </span>
          {booking.checkIn.toLocaleDateString('en-US')}
        </span>
        <span className='mb-4'>
          <span className='mr-1 text-sm font-normal text-stone-400'>
            Check out:
          </span>
          {booking.checkOut.toLocaleDateString('en-US')}
        </span>

        <span className='mr-1 text-sm font-normal text-stone-400'>
          Booking by:{' '}
          <span className='text-lg font-bold text-white'>{booking.name}</span>
        </span>
      </div>
      <div className='ml-auto flex flex-col justify-center gap-4'>
        <button
          className='rounded border border-emerald-500 bg-emerald-500 px-4 py-2 text-white outline-none duration-300 hover:border-transparent hover:bg-emerald-700 focus:outline-none active:bg-emerald-800'
          type='button'
        >
          Update
        </button>
        <button
          onClick={() => onDelete(booking.id)}
          className='
          rounded border border-rose-400 bg-transparent px-4 py-2 text-emerald-500 text-white outline-none duration-300 hover:border-transparent hover:bg-rose-500 hover:text-white focus:outline-none active:bg-rose-800'
          type='button'
        >
          Delete
        </button>
      </div>
    </div>
  )
}
export default Booking
