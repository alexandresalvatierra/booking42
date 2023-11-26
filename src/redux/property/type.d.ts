type Property = {
  id: string
  title: string
  description: string
  price: number
  image: string
}

type PropertyState = {
  properties: Property[]
  propertySelected: null | Property
}
