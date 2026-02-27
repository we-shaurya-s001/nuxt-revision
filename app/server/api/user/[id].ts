// /server/api/user/[id].ts
export default defineEventHandler((event) => {
  const { id } = event.context.params!
  return { userId: id }
})