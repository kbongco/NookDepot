import api from './api-config'

export const postTownInfo = async (formData) => {
  const resp = await api.post(`/users/${id}/towninfos`)
  return resp.data 
}


export const getOneTownInfo = async (id) => {
  const resp = await api.get(`/users/${user_id}/towninfos`)
  return resp.data
}

export const putTownInfo = async (id, formData) => {
  const resp = await api.put(`/users/${id}/towninfos/${id}`)
  return resp.data 
}