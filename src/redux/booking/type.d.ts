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
  property: Property
}

type BookingState = {
  bookings: Booking[] | []
}
