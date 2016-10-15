const prepareUrl = (path) => {
  const TESTING = process.env.NODE_ENV === 'test'
  return `${TESTING ? 'http://localhost' : ''}${path}`
}

export default prepareUrl
