import { useSelector, useDispatch } from 'react-redux'
import Property from './Property'
import { RootReducer } from '../../redux/root-reducer'
import PropertyActions from '../../redux/property/actions'
import PropertyActionsTypes from '../../redux/property/actions-types'

const Properties = () => {
  const dispatch = useDispatch()
  const { properties } = useSelector(
    (rootReducer: RootReducer) => rootReducer.propertyReducer
  )

  const handleClickProperty = (property: Property) => {
    const action: PropertyActions = {
      type: PropertyActionsTypes.SELECT_PROPERTY,
      payload: property,
    }
    dispatch(action)
  }

  return (
    <>
      <h2 className='m-4'>Select a property for booking it</h2>
      <section className='max-w-8xl m-auto grid grid-cols-4 gap-4 max-lg:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1'>
        {properties.map((property) => (
          <Property
            key={property.id}
            property={property}
            onClick={handleClickProperty}
          />
        ))}
      </section>
    </>
  )
}

export default Properties
