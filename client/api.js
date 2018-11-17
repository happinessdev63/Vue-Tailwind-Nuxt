/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, {
      params: form
    }, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    
 ==========================================================*/
/**
 * 
 * request: SplitTests_Convert
 * url: SplitTests_ConvertURL
 * method: SplitTests_Convert_TYPE
 * raw_url: SplitTests_Convert_RAW_URL
 * @param args - 
 */
export const SplitTests_Convert = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/SplitTests/Convert'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['args'] !== undefined) {
    body = parameters['args']
  }
  if (parameters['args'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: args'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const SplitTests_Convert_RAW_URL = function() {
  return '/SplitTests/Convert'
}
export const SplitTests_Convert_TYPE = function() {
  return 'post'
}
export const SplitTests_ConvertURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/SplitTests/Convert'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: SplitTests_Init
 * url: SplitTests_InitURL
 * method: SplitTests_Init_TYPE
 * raw_url: SplitTests_Init_RAW_URL
 * @param args - 
 */
export const SplitTests_Init = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/SplitTests/Init'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['args'] !== undefined) {
    body = parameters['args']
  }
  if (parameters['args'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: args'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const SplitTests_Init_RAW_URL = function() {
  return '/SplitTests/Init'
}
export const SplitTests_Init_TYPE = function() {
  return 'post'
}
export const SplitTests_InitURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/SplitTests/Init'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: Users_GetMyUserInformation
 * url: Users_GetMyUserInformationURL
 * method: Users_GetMyUserInformation_TYPE
 * raw_url: Users_GetMyUserInformation_RAW_URL
 */
export const Users_GetMyUserInformation = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/Users/GetMyUserInformation'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const Users_GetMyUserInformation_RAW_URL = function() {
  return '/Users/GetMyUserInformation'
}
export const Users_GetMyUserInformation_TYPE = function() {
  return 'get'
}
export const Users_GetMyUserInformationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/Users/GetMyUserInformation'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: Users_Me
 * url: Users_MeURL
 * method: Users_Me_TYPE
 * raw_url: Users_Me_RAW_URL
 */
export const Users_Me = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/Users/Me'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const Users_Me_RAW_URL = function() {
  return '/Users/Me'
}
export const Users_Me_TYPE = function() {
  return 'get'
}
export const Users_MeURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/Users/Me'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}