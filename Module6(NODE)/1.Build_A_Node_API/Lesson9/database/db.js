export async function getDataFromDB() {
  const destinations = [
    {
      id: 1,
      name: 'Paris',
      country: 'France',
      description: 'City of Light'
    },
    {
      id: 2,
      name: 'Tokyo',
      country: 'Japan',
      description: 'Modern metropolis'
    },
    {
      id: 3,
      name: 'New York',
      country: 'USA',
      description: 'The Big Apple'
    }
  ]

  return destinations
}
