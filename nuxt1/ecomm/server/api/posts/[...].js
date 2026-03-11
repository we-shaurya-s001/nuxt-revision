export default defineEventHandler((event) => {
  const slug = event.context.params?.slug
    return {
    message: "Catch-all route hit",
    slug
  }
})