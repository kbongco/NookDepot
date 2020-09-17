import api from './api-config'

export const getAllListings = async () => {
  const resp = await api.get('/listings')
  return resp.data
}

