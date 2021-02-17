import { config } from './config'
import { objectToQueryString } from '../util/index'

const fetchJjals = async parameters => {
  const response = await fetch(`${config.baseUrl}?${objectToQueryString(parameters)}`)

  return response.json()
}

export { fetchJjals }