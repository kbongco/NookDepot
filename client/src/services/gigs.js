import api from './api-config'

export const getAllGigs = async () => {
  const resp = await api.get('/create_gigs')
  return resp.data
}

export const getOneGig = async (id) => {
  const resp = await api.get(`/create_gigs/${id}`)
  return resp.data 
}