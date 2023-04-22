import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/usr/api/users/page',
    method: 'get',
    params
  })
}

export function saveUser(params) {
  let methodName = 'post'
  let url = '/usr/api/users'
  if (params.id > 0) {
    methodName = 'put'
    url = url + '/' + params.id
  }
  return request({
    url: url,
    method: methodName,
    data: params
  })
}

export function remove(userId) {
  return request({
    url: `/usr/api/users/${userId}`,
    method: 'delete'
  })
}

export function setRole(userId, roleIds) {
  return request({
    url: `/usr/api/users/${userId}/roles`,
    method: 'put',
    data: roleIds
  })
}

export function changeStatus(userId, status) {
  return request({
    url: `/usr/api/users/${userId}/status`,
    method: 'put',
    data: { 'value': status }
  })
}

export function changeStatusBatch(params) {
  return request({
    url: '/usr/api/users/batch/status',
    method: 'put',
    data: params
  })
}
