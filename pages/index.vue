<template>
  <main>
    <div class="bg-cover bg-center bg-no-repeat relative" style="background-image: url('/hero.svg');">
      <div class="max-w-2xl mx-auto text-left text-blue p-6 pt-10 lg:pt-16">
        <h1 class="pb-6 text-4xl md:text-5xl">FREE LEASE &amp; <span class="whitespace-no-wrap">RENTAL FORMS</span></h1>
        <div class="text-blue-darkest text-lg font-bold">Become a member to get access to:</div>
        <ul class="pl-4 pb-6 lg:pb-12 text-blue-darkest text-lg">
          <li class="my-2"><a class="text-blue-darkest text-lg" href="#">Create Lease</a></li>
          <li class="my-2"><a class="text-blue-darkest text-lg" href="#">Tenant Screening</a></li>
          <li class="my-2"><a class="text-blue-darkest text-lg" href="#">Rental Application</a></li>
          <li class="my-2"><a class="text-blue-darkest text-lg" href="#">100's of Forms</a></li>
        </ul>
        <div class="pb-108 md:pb-80 lg:88">
          <a href="#" class="md:text-lg bg-yellow shadow-md inline-block py-3 px-10 md:py-4 md:px-12 text-blue-darkest font-bold">Create Lease</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import Hero from '~/components/svg/KeyHouseIcon.svg'

  export default {
    components: {
      Hero
    },
  }
</script>