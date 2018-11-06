<template>
  <header>
    <div class="bg-blue-light">
      <div class="md:hidden text-center pt-3 pb-2">
        <a href="/"><alt-logo style="width: 203.1px; height: 30.2px" /></a>
      </div>
      <div class="hidden md:block max-w-2xl mx-auto py-3 px-6">
        <div class="flex justify-between items-end">
          <div class="">
            <a href="/" class="lg:hidden"><alt-logo style="width: 247px; height: 36.7px" /></a>
            <a href="/" class="hidden lg:inline-block"><logo style="max-width: 247px; height: 67.5px" /></a>
            <div class="hidden lg:inline-block text-blue font-bold tracking-tight text-xs pl-2">STATE-SPECIFIC LEGAL FORMS LANDLORDS TRUST</div>
          </div>
          <button class="bg-white rounded-full shadow" style="width: 247px; height: 46px;">
            <div class="flex justify-center items-center">
              <div class="pr-4">
                <svg class="fill-current text-blue" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
                  <path fill="#36C" fill-rule="nonzero" d="M10 10.833c0-.92-.746-1.666-1.667-1.666H7.5A3.333 3.333 0 0 0 4.167 12.5V15A3.333 3.333 0 0 0 7.5 18.333h.833c.92 0 1.667-.746 1.667-1.666v-5.834zm9.167 7.5A3.333 3.333 0 0 0 22.5 15v-2.5a3.333 3.333 0 0 0-3.333-3.333h-.834c-.92 0-1.666.746-1.666 1.666v5.834c0 .92.746 1.666 1.666 1.666h.834zM13.333 0C5.895 0 .24 6.19 0 13.333v.834c0 .46.373.833.833.833h.834c.46 0 .833-.373.833-.833v-.834C2.5 7.36 7.36 2.5 13.333 2.5c5.974 0 10.834 4.86 10.834 10.833h-.007c.005.127.007 8.632.007 8.632a2.202 2.202 0 0 1-2.202 2.202h-5.298a2.5 2.5 0 0 0-2.5-2.5H12.5a2.5 2.5 0 1 0 0 5h9.465a4.702 4.702 0 0 0 4.702-4.702v-8.632C26.428 6.19 20.772 0 13.333 0z"/>
                </svg>
              </div>
              <div class="text-left">
                <div class="text-blue font-bold text-sm">LIVE HELP &amp; SUPPORT</div>
                <div class="text-blue-darkest font-bold text-2xs">ONLINE NOW!</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from '~/components/Logo'
  import AltLogo from '~/components/AltLogo'
  
  export default {
    components: {
      'logo': Logo,
      'alt-logo': AltLogo
    }
  }
</script>
