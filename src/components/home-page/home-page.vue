<template>
  <Header/>
    <tourListService/>
    <popularPackage/>
    <allPackageInfo/>
    <chooceNextDestanatio/>
    <searchByLocation/> 
    <Footer/>
</template>

<script>
import tourListService from './tour-list-service.vue'
import popularPackage from './popular-package.vue'
import allPackageInfo from './all-package-info.vue'
import chooceNextDestanatio from './chooce-next-destanatio.vue'
import searchByLocation from './search-by-location.vue'
import header from '../header.vue'
import footer from '../footer.vue'

export default {
    name: '',
    data() {
        return {

        };
    },
    methods: {

    },
    mounted() {

    },
    components:
    {
        'tourListService':tourListService,
        'popularPackage':popularPackage,
        'chooceNextDestanatio':chooceNextDestanatio,
        'allPackageInfo':allPackageInfo,
        'searchByLocation':searchByLocation,
        'Footer':footer,
        'Header':header,

    }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .container {
    height: 30vh;
  }

  .text-logo {
    font-size: 14px;
    /* Устанавливаем размер шрифта для мобильной версии */
  }

  ul li a {
    font-size: 10px;
  }

  .exploder {
    padding: 5px;
    font-size: 10px;
  }
  .exploder:hover {
   
    border: #6b7d8d00;
    transition: all 0.5s;
  }
  .menu-detile-tour {
    width: 90%;
  }

  .menu-detile-tour-item,
  .menu-detile-tour-search {
    margin: 10px;
  }

  .menu-detile-tour-item img,
  .menu-detile-tour-search img {
    width: 10px;
  }

  .text-menu-detile-link,
  .text-menu-detile-search {
    font-size: 7px;
  }
 
}
</style>