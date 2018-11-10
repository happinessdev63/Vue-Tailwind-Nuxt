<template>
  <div class="flex flex-col items-stretch min-h-screen text-center">
    <app-header class="flex-shrink w-full z-10" />
    <nuxt class="flex-grow w-full pt-20 md:pt-28 lg:pt-0"/>
    <app-footer class="flex-shrink w-full" />
  </div>
</template>

<script>
  import Header from '~/components/Header'
  import Footer from '~/components/Footer'
  
  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>
