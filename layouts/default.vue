<template>
  <div class="flex flex-col items-stretch min-h-screen text-center">
    <app-header class="flex-shrink w-full" />
    <nuxt class="flex-grow w-full pt-28 md:pt-32 lg:pt-6"/>
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
