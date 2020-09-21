import api from './api-config'



export const postTownInfo = async (id,formData) => {
  const resp = await api.post(`towninfos/${id}`, {towninfo:formData})
  return resp.data 
}


export const getOneTownInfo = async () => {
  const resp = await api.get(`/towninfos/`)
  return resp.data
}

export const putTownInfo = async ( formData, id) => {
  const resp = await api.put(`/towninfos/${id}`,{towninfo:formData})
  return resp.data 
}