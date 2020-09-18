import api from './api-config'

export const getAllListings = async () => {
  const resp = await api.get('/listings')
  return resp.data
}

export const getOneListings = async (id) => {
  const resp = await api.get(`/listings/${id}`)
  return resp.data 
}

export const putListings = async (id, formData) => {
  const resp = await api.put(`/listings/${id}`, { name: formData, links: formData  })
  return resp.data 
}

export const postListings = async (formData) => {
  const resp = await api.post('/listings', { listing:formData })
  return resp.data 
}

export const deleteListings= async (id) => {
  const resp = await api.delete(`/foods/${id}`)
  return resp.data 
}

