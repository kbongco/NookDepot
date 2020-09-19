import api from './api-config'



export const postTownInfo = async (id,formData) => {
  const resp = await api.post(`/users/${id}/towninfos`, {gamename: formData, townname:formData, nativefruit:formData,hemisphere:formData, user_id:formData })
  return resp.data 
}


export const getOneTownInfo = async (id) => {
  const resp = await api.get(`/users/${id}/towninfos`)
  return resp.data
}

export const putTownInfo = async (id, formData) => {
  const resp = await api.put(`/users/${id}/towninfos/${id}`,{gamename: formData, townname:formData, nativefruit: formData,hemisphere: formData, user_id: formData  })
  return resp.data 
}