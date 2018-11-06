<template>
  <header class="fixed lg:static">
    <div class="bg-blue-light">
      <div class="md:hidden text-center pt-3 pb-2">
        <a href="/"><alt-logo style="width: 203.1px; height: 30.2px" /></a>
      </div>
      <div class="hidden md:block max-w-2xl mx-auto py-3 px-6">
        <div class="flex justify-between items-end">
          <div class="flex items-end">
            <a href="/" class="lg:hidden"><alt-logo style="width: 247px; height: 36.7px" /></a>
            <a href="/" class="hidden lg:inline-block"><logo style="width: 247px; height: 67.5px" /></a>
            <div class="mb-2 hidden lg:inline-block text-blue font-bold tracking-tight text-sm pl-2">STATE-SPECIFIC LEGAL FORMS LANDLORDS TRUST</div>
          </div>
          <live-help-btn class="mb-1" />
        </div>
      </div>
    </div>
    
    <div class="bg-blue">
      <div class="md:hidden">
        <div class="max-w-2xl mx-auto flex justify-between">
          <div class="flex">
            <a class="nav-btn text-white border-r border-blue-dark" href="#">
              <div class="align-middle flex relative relative">
                <div class="p-3 pr-2"><hamburger-icon style="width: 11px; height: 11px;" class="fill-current text-yellow relative" /></div>
                <div class="py-3 pr-3">Menu</div>
              </div>
            </a>
          </div>
          <div class="flex">
            <a class="nav-btn text-yellow border-l border-blue-dark" href="#">
              <div class="align-middle flex relative">
                <div class="p-3">Log In</div>
                <div class="pr-3"><account-icon style="width: 30px; height: 30px;" class="fill-current text-yellow relative mt-1" /></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="hidden md:block lg:hidden">
        <div class="max-w-2xl mx-auto flex justify-between px-3">
          <div class="flex">
            <a class="nav-btn text-white" href="#">
              <div class="align-middle flex relative relative">
                <div class="p-3 pr-2"><hamburger-icon style="width: 11px; height: 11px;" class="fill-current text-yellow relative" /></div>
                <div class="py-3 pr-3">Menu</div>
              </div>
            </a>
          </div>
          <div class="flex">
            <a class="nav-btn text-yellow" href="#">
              <div class="p-3">Create New Account</div>
            </a>
            <a class="nav-btn text-yellow" href="#">
              <div class="p-3">Pricing</div>
            </a>
            <a class="nav-btn text-yellow" href="#">
              <div class="align-middle flex relative">
                <div class="p-3">Log In</div>
                <div class="pr-3"><account-icon style="width: 30px; height: 30px;" class="fill-current text-yellow relative mt-1" /></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div class="hidden lg:block">
        <div class="max-w-2xl mx-auto flex justify-between px-3">
          <div class="flex">
            <a class="nav-btn text-white" href="#">
              <div class="p-3">Home</div>
            </a>
            <a class="nav-btn text-white" href="#">
              <div class="p-3">Forms</div>
            </a>
            <a class="nav-btn text-white" href="#">
              <div class="p-3">Tenant Screening</div>
            </a>
            <a class="nav-btn text-white" href="#">
              <div class="p-3">Features</div>
            </a>
            <a class="nav-btn text-white" href="#">
              <div class="p-3">Why Us?</div>
            </a>
            <a class="nav-btn text-white" href="#">
              <div class="p-3">Resources</div>
            </a>
            <a class="nav-btn text-white" href="#">
              <div class="p-3">Help</div>
            </a>
          </div>
          <div class="flex">
            <a class="nav-btn text-yellow" href="#">
              <div class="p-3">Create New Account</div>
            </a>
            <a class="nav-btn text-yellow" href="#">
              <div class="p-3">Pricing</div>
            </a>
            <a class="nav-btn text-yellow" href="#">
              <div class="align-middle flex relative">
                <div class="p-3">Log In</div>
                <div class="pr-3"><account-icon style="width: 30px; height: 30px;" class="fill-current text-yellow relative mt-1" /></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from '~/components/svg/Logo'
  import AltLogo from '~/components/svg/AltLogo'
  import LiveHelpBtn from '~/components/svg/LiveHelpBtn'
  import AccountIcon from '~/components/svg/AccountIcon'
  import HamburgerIcon from '~/components/svg/HamburgerIcon'
  
  export default {
    components: {
      'logo': Logo,
      'alt-logo': AltLogo,
      'live-help-btn': LiveHelpBtn,
      'account-icon': AccountIcon,
      'hamburger-icon': HamburgerIcon
    }
  }
</script>

<style scoped>
  .nav-btn {
    @apply no-underline;
    @apply font-bold;
    @apply text-sm;
  }

  .nav-btn:hover {
    @apply bg-blue-dark;
  }
</style>
