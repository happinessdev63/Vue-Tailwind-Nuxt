<template>
  <footer>
    <div class="bg-grey-lightest border-grey-light bg-grey-lightest border-t">
      <h2 class="py-8 md:py-12 text-3xl md:text-4xl text-blue-darkest">FEATURED ON</h2>
      <div class="max-w-2xl mx-auto flex flex-wrap justify-center md:justify-between pb-6 lg:pb-12 md:px-6">
        <fox-business-logo class="mx-6 md:mx-0 mb-6 h-5 lg:h-7" />
        <cbs-radio-logo class="mx-6 md:mx-0 mb-6 h-5 lg:h-7" />
        <msnbc-logo class="mx-6 md:mx-0 mb-6 h-5 lg:h-7" />
        <wall-street-journal-logo class="mx-6 md:mx-0 mb-6 h-5 lg:h-7" />
        <cnn-money-logo class="mx-6 md:mx-0 mb-6 h-5 lg:h-7" />
      </div>
    </div>

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
              <div class="text-right"><LiveHelpBtn /></div>
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
              <div class="text-right"><LiveHelpBtn /></div>
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
        <div class="flex flex-col md:flex-row lg:justify-between justify-end">
          <div class="md:flex-order-2 flex justify-center items-end flex-no-shrink">
            <a class="mr-3" href="/pdfs/ezLandlordForms_Carbonfund_Certificate.pdf" rel="nofollow" target="_blank">
              <img class="md:hidden" src="~/assets/images/carbonfree.png" width="62" height="50" alt="Carbon Free - CarbonFund.org" />
              <img class="hidden md:inline-block" src="~/assets/images/carbonfree.png" width="71" height="58" alt="Carbon Free - CarbonFund.org" />
            </a>
            <a class="mr-3" href="https://www.bbb.org/new-jersey/business-reviews/legal-forms/ezlandlordforms-llc-in-mullica-hill-nj-90044692" target="_blank" rel="nofollow">
              <img class="md:hidden" src="~/assets/images/bbb-rating.gif" width="95" height="50" alt="BBB Rating" title="Click to verify BBB accreditation and to see a BBB report." />
              <img class="hidden md:inline-block" src="~/assets/images/bbb-rating.gif" width="110" height="58" alt="BBB Rating" title="Click to verify BBB accreditation and to see a BBB report." />
            </a>
            <a href="#" onclick="window.open('https://www.sitelock.com/verify.php?site=ezlandlordforms.com','SiteLock','width=600,height=600,left=160,top=170');">
              <img class="md:hidden border-black border rounded box-sizing-content" alt="website security" width="84" height="48" title="SiteLock" src="https://shield.sitelock.com/shield/ezlandlordforms.com" />
              <img class="hidden md:inline-block border-black border rounded box-sizing-content" alt="website security" width="98" height="56" title="SiteLock" src="https://shield.sitelock.com/shield/ezlandlordforms.com" />
            </a>
          </div>
          <div class="md:flex-order-1 leading-normal text-2xs text-left text-grey-darker mr-6 mt-8 md:mt-0">
            <p class="pb-2 lg:pb-0">ezLandlordForms products and services are reviewed and approved by attorneys, accountants, fellow landlords, or industry experts.</p>
            <p class="pb-2 lg:pb-0">ezLandlordForms is not a law firm and our products and services are not a substitute for the advice of an attorney.</p>
            <p class="pb-2 lg:pb-0">Copyright © 2006-2018, ezLandlordForms LLC. All Rights Reserved. | <a class="whitespace-no-wrap text-blue-darker" href="#">Privacy Policy</a> | <a class="whitespace-no-wrap text-blue-darker" href="#">Terms &amp; Conditions</a> | <a class="whitespace-no-wrap text-blue-darker" href="#">ezLandlordForms Affiliate Program</a></p>
            <p class="pb-2 lg:pb-0">Version: 1.159.0</p>
          </div>
        </div>
      </div>
    </div> 
  </footer>
</template>

<script>
  import KeyHouseIcon from '~/components/svg/KeyHouseIcon.svg'
  import LiveHelpBtn from '~/components/svg/LiveHelpBtn'
  import CbsRadioLogo from '~/components/svg/CbsRadioLogo.svg'
  import CnnMoneyLogo from '~/components/svg/CnnMoneyLogo.svg'
  import MsnbcLogo from '~/components/svg/MsnbcLogo.svg'
  import WallStreetJournalLogo from '~/components/svg/WallStreetJournalLogo.svg'
  import FoxBusinessLogo from '~/components/svg/FoxBusinessLogo.svg'

  export default {
    components: {
      KeyHouseIcon,
      LiveHelpBtn,
      CbsRadioLogo,
      CnnMoneyLogo,
      MsnbcLogo,
      WallStreetJournalLogo,
      FoxBusinessLogo,
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
