export default defineEventHandler((event) => {
  const token = getHeader(event, 'authorization')
  if (!token || token !== 'my-secret-token') {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
  }
})  
