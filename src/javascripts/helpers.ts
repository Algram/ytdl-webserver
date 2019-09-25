/* global XMLHttpRequest */

export function get <T>(url: string): Promise<T> {
  // Return a new promise.
  return new Promise((resolve, reject) => {
    // Do the usual XHR stuff
    const req = new XMLHttpRequest()
    req.open('GET', url)
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    req.onload = () => {
      // This is called even on 404 etc
      // so check the status
      if (req.status === 200) {
        // Resolve the promise with the response text
        resolve(JSON.parse(req.response))
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText))
      }
    }

    // Handle network errors
    req.onerror = () => {
      reject(Error('Network Error'))
    }

    // Make the request
    req.send()
  })
}

export function post <T>(url: string, params: string): Promise<T> {
  // Return a new promise.
  return new Promise((resolve, reject) => {
    // Do the usual XHR stuff
    const req = new XMLHttpRequest()
    req.open('POST', url)
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

    req.onload = () => {
      // This is called even on 404 etc
      // so check the status
      if (req.status === 200) {
        // Resolve the promise with the response text
        resolve(JSON.parse(req.response))
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText))
      }
    }

    // Handle network errors
    req.onerror = () => {
      reject(Error('Network Error'))
    }

    // Make the request
    req.send(params)
  })
}
