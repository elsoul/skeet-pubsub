import { PubSub } from '@google-cloud/pubsub'

export const publishTopic = async <
  T extends {
    [key: string]: any
  },
>(
  queryType: QueryType,
  queryName: string,
  topicName: string,
  params: T,
) => {
  try {
    const pubsub = new PubSub()
    const data = toGraphqlQuery<T>(queryType, queryName, params)
    const messageId = await pubsub.topic(topicName).publishMessage({ data })
    console.log(`Message ${messageId} published.`)
    return messageId
  } catch (error) {
    console.log(`pubsubPublish: ${error}`)
    throw new Error(`pubsubPublish: ${error}`)
  }
}

type QueryType = 'query' | 'mutation'

const toGraphqlQuery = <
  T extends {
    [key: string]: any
  },
>(
  queryType: QueryType,
  queryName: string,
  query: T,
) => {
  try {
    const inputString = Object.entries(query)
      .map(([key, value]) => {
        if (value === undefined || value === null) {
          return `${key}: \"\"` // Convert undefined or null to an empty string
        } else if (typeof value === 'number' || typeof value === 'boolean') {
          return `${key}: ${value}`
        } else {
          return `${key}: "${value}"`
        }
      })
      .join(', ')

    const body = JSON.stringify({
      query: `${queryType} { ${queryName}(input: { ${inputString} }) { response }}`,
      variables: {},
    })
    return body
  } catch (error) {
    throw new Error(`Error in toGraphqlQuery: ${error}`)
  }
}
