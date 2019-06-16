import request from 'superagent'
import API_URL from '~/src/constants/Api.js'
import {stringify} from 'qs'

function ApiCall({endpoint, method, query, payload}){
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${API_URL}`)
    if (query)
      r.query(stringify(query))
    if (payload)
      r = r.send(payload)
    r.end((err, data) => (
      err ? reject(err) : resolve(data.body)
    ))
  })
}

export const API_CALL = 'API_CALL'

const nextAction = (action, data) => {
  return Object.assign({}, action, data, { [API_CALL]: undefined})
}

export default (store) => (next) => (action) => {
  if(!action[API_CALL]) return next(action)
  const [requestType, successType, failureType] = action[API_CALL].types
  next(nextAction(action, {type: requestType}))
  const picked = (({endpoint, method, query, payload}) => ({endpoint, method, query, payload}))(action[API_CALL])

  const promise = ApiCall(picked)

  promise.then(
    (response) => next(nextAction(action, {response, type: successType}) )
  ),
    (err) => next(nextAction(action, {err, type: failureType} ))

  return promise
}
