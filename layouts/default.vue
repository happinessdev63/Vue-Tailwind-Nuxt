<template>
  <div class="flex flex-col items-stretch min-h-screen text-center">
    <app-header class="flex-shrink" />
    <nuxt class="flex-grow"/>
    <app-footer class="flex-shrink" />
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
