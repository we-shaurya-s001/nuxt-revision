export const useUserStore = () => {
   return useState('userState', () => ({
    user: 'Guest',
    items: [] as string[]
  }))
}