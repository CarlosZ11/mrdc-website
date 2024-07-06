import axios from './axios'

export const getMembersRequest = () => axios.get('/members')

export const getMemberRequest = (id) => axios.get(`/members/${id}`)

export const createMemberRequest = (member) => axios.post('/members', member)

export const updateMemberRequest = (member) => axios.put(`/members/${member._id}`, member)

export const deleteMemberRequest = (id) => axios.delete(`/members/${id}`)

