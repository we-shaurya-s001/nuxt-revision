export const logMixin = {
  mounted() {
    console.log(`Hello! This component just loaded at: ${new Date().toLocaleTimeString()}`);
  }
}