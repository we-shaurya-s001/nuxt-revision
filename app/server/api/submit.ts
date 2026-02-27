// /server/api/submit.ts
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return { youSent: body }
})