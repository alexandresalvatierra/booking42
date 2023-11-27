type Property = {
  id: string
  title: string
  description: string
  image: string
  price: number
}

type PropertyProps = {
  property: Property
  onClick: (property: Property) => void
}

const Property = ({ property, onClick }: PropertyProps) => {
  return (
    <article
      onClick={() => onClick(property)}
      className='relative flex cursor-pointer flex-col justify-end overflow-hidden rounded-2xl px-10 pb-4 pt-40 shadow-md shadow-emerald-950 duration-700 hover:shadow-emerald-500'
    >
      <img
        src={property.image}
        alt={property.title}
        className='absolute inset-0 h-full w-full object-cover'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40'></div>
      <h3 className='z-10 text-2xl font-bold text-white'>{property.title}</h3>
      <span className='z-10 overflow-hidden text-sm leading-6 text-gray-300'>
        {property.description}
      </span>
      <span className='z-10 mt-1 overflow-hidden text-lg font-bold leading-6 text-emerald-400'>
        ${property.price}{' '}
        <span className='text-sm font-normal text-stone-400'>/ day</span>
      </span>
    </article>
  )
}

export default Property
