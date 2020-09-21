import api from './api-config'



export const postTownInfo = async (user_id,formData) => {
  const resp = await api.post(`/users/${user_id}/towninfos`, {towninfos:formData})
  return resp.data 
}


export const getOneTownInfo = async (user_id, id) => {
  const resp = await api.get(`/users/${user_id}/towninfos/${id}`)
  return resp.data
}

export const putTownInfo = async (user_id, formData, id) => {
  const resp = await api.put(`/users/${user_id}/towninfos/${id}`,{towninfos:formData})
  return resp.data 
}