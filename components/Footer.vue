<template>
  <footer>
    <div class="bg-grey-lighter border-grey-light border-t">
      <div class="md:hidden max-w-2xl mx-auto pt-8 pb-10 px-6">
        <div class="flex flex-col">
          <div class="flex-1 pb-10">
            <div class="text-xl font-bold text-blue-darkest mb-3">Call us: <span class="text-blue">1-877-367-6771</span></div>
            <div class="text-blue-darkest text-xs lg:text-sm">We are available 7 days a week to answer your 
              <br />questions and to receive your feedback</div>
          </div>
          <div class="flex-1 flex pt-8 flex-col items-center border-grey-light border-t">
            <div>
              <div class="text-xl lg:text-2xl font-bold text-blue-darkest mb-3">Live Assistance</div>
              <div class="text-right"><live-help-btn class="mb-1" /></div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden md:block max-w-2xl mx-auto pt-8 pb-10 px-6">
        <div class="flex justify-between align-bottom">
          <div class="flex-1 text-left">
            <div class="text-xl lg:text-2xl font-bold text-blue-darkest mb-3">Call us: <span class="text-blue">1-877-367-6771</span></div>
            <div class="text-blue-darkest text-xs lg:text-sm">We are available 7 days a week to answer your questions and to receive your feedback</div>
          </div>
          <div class="flex-1 hidden md:block lg:hidden"><KeyHouseIcon style="width: 167px; height: 76.6px;"/></div>
          <div class="flex-1 hidden lg:block"><KeyHouseIcon style="width: 207px; height: 95px;"/></div>
          <div class="flex-1 flex flex-col items-end">
            <div>
              <div class="text-xl lg:text-2xl font-bold text-blue-darkest mb-3">Live Assistance</div>
              <div class="text-right"><live-help-btn class="mb-1" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-grey-lightest border-grey-light bg-grey-lightest border-t">
      <div class="max-w-2xl mx-auto flex flex-wrap justify-center md:justify-between pt-5 lg:pt-6 pb-2 lg:pb-3 px-3">
        <a href="#" class="menu-item text-xs lg:text-sm">BECOME A MEMBER</a>
        <a href="#" class="menu-item text-xs lg:text-sm">TENANT SCREENING</a>
        <a href="#" class="menu-item text-xs lg:text-sm">FORMS</a>
        <a href="#" class="menu-item text-xs lg:text-sm">PRICING</a>
        <a href="#" class="menu-item text-xs lg:text-sm">RESOURCES</a>
        <a href="#" class="menu-item text-xs lg:text-sm">CONTACT US</a>
        <a href="#" class="menu-item text-xs lg:text-sm">HELP</a>
      </div>
    </div>

    <div class="bg-grey-lighter border-grey-light border-t">
      <div class="max-w-2xl mx-auto pt-8 pb-10 px-6 ">
        <div class="flex lg:justify-between justify-center">
          <div class="text-2xs text-left text-grey-darker leading-normal hidden lg:block mr-6">
            <p>ezLandlordForms products and services are reviewed and approved by attorneys, accountants, fellow landlords, or industry experts.</p>
            <p>ezLandlordForms is not a law firm and our products and services are not a substitute for the advice of an attorney.</p>
            <p>Copyright © 2006-2018, ezLandlordForms LLC. All Rights Reserved. | Version: 1.159.0</p>
            <p>Privacy Policy | Terms &amp; Conditions | ezLandlordForms Affiliate Program</p>
          </div>
          <div class="flex justify-between items-center">
            <a class="mr-3" href="/pdfs/ezLandlordForms_Carbonfund_Certificate.pdf" rel="nofollow" target="_blank">
              <img src="~/assets/images/carbonfree.png" width="71" height="58" alt="Carbon Free - CarbonFund.org" />
            </a>
            <a class="mr-3" href="https://www.bbb.org/new-jersey/business-reviews/legal-forms/ezlandlordforms-llc-in-mullica-hill-nj-90044692" target="_blank" rel="nofollow">
              <img src="~/assets/images/bbb-rating.gif" width="110" height="58" alt="BBB Rating" title="Click to verify BBB accreditation and to see a BBB report." />
            </a>
            <a href="#" onclick="window.open('https://www.sitelock.com/verify.php?site=ezlandlordforms.com','SiteLock','width=600,height=600,left=160,top=170');">
              <img alt="website security" title="SiteLock" class="border-black border rounded box-sizing-content" src="https://shield.sitelock.com/shield/ezlandlordforms.com" width="98" height="56" />
            </a>
          </div>
        </div>
      </div>
    </div> 
  </footer>
</template>

<script>
  import KeyHouseIcon from '~/components/svg/KeyHouseIcon.svg'
  import LiveHelpBtn from '~/components/svg/LiveHelpBtn'

  export default {
    components: {
      KeyHouseIcon,
      'live-help-btn': LiveHelpBtn,
    },
    
  }
</script>

<style scoped>
  .menu-item {
    @apply text-blue;
    @apply mx-3;
    @apply mb-3;
    @apply no-underline;
    @apply font-bold;
  }
</style>
