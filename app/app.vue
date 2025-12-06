<script setup lang="ts">
const { data: info } = await useFetch('/api/info')
const generatedAt = useState(() => new Date().toISOString())
</script>

<template>
  <div class="h-screen overflow-hidden flex flex-col">
    <Head>
      <Title>Nuxt on the edge</Title>
      <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <Meta
        name="description"
        content="HTML, dynamically rendered in a city near you"
      />
    </Head>
    <main class="flex-1 relative w-full p-10 box-border flex flex-col justify-center">
      <h1 class="text-[min(16vw,4rem)] sm:text-[min(8vw,4rem)] font-bold m-0 text-center mb-20 px-10 py-4 box-border leading-none bg-gradient-to-r from-[#ff6b35] mx-auto via-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent animate-[float_6s_ease-in-out_infinite] max-w-lg" style="text-shadow: 0 0 30px rgba(255, 107, 53, 0.3);">
        Hello from the edge!
      </h1>
      <div class="grid px-10 text-[min(5vw,2rem)] box-border sm:flex sm:justify-center sm:gap-16 mb-8">
          <div class="flex m-0 py-4 sm:justify-start backdrop-blur-sm bg-gradient-to-r from-transparent via-[#8b5cf6]/5 to-transparent rounded-lg px-6">
            <div>
              <span class="block m-0 mb-[0.2em] uppercase text-[0.6em] text-[#ec4899]">Your IP address</span>
              <strong class="block text-[1.4em] m-0 font-semibold bg-gradient-to-r from-[#8b5cf6] to-[#ff6b35] bg-clip-text text-transparent">{{ info?.ip }}</strong>
            </div>
          </div>
        </div>
        <div class="text-center text-[11px] text-[#ec4899]/80 mt-4">
          Generated at {{ generatedAt }}
        </div>
      </main>
    <footer class="items-center text-center p-6 sm:p-10 box-border text-base flex-col flex justify-around backdrop-blur-md bg-gradient-to-t from-[#0a0118]/80 to-transparent">
      
      <p class="my-2 order-3 sm:order-0 col-span-2 sm:col-auto whitespace-nowrap text-[#f0e7ff]/80">
        Built with
        <NuxtLink to="https://nuxt.com" target="_blank" class="text-[#ff6b35] no-underline hover:text-[#ec4899] transition-colors duration-300">Nuxt</NuxtLink>
        on
        <NuxtLink to="https://apptime.ai" target="_blank" class="text-[#8b5cf6] no-underline hover:text-[#ec4899] transition-colors duration-300">Apptime AI</NuxtLink>
      </p>
      <NuxtLink
        target="_blank"
        href="https://github.com/apptimeai/edge-app"
        class="w-full flex gap-2 items-center justify-center text-[#ff6b35] no-underline hover:text-[#ec4899] transition-colors duration-300 sm:w-40"
      >
        <i class="fa-brands fa-github"></i>
        Source
      </NuxtLink>
    </footer>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}
</style>

