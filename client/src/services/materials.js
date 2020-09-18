import api from './api-config'

export const getAllMaterials = async () => {
  const resp = await api.get('/materials')
  return resp.data
}

export const getOneMaterial = async (id) => {
  const resp = await api.get(`/materials/${id}`)
  return resp.data 
}