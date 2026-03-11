export default defineEventHandler((event) => {
  const query = getQuery(event)
  
  const category = query.category
  const limit = query.limit || 10 
  
  return {
    message: `Fetching ${limit} products from ${category}`
  }
})