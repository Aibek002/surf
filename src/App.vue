
<template>
  <Header />
  <homePage/>
  <Footer />
</template>


<style>












/* Pumpkin */


body {
  margin: 0;

}




@media (min-aspect-ratio: 16/9) {
  .back-video {
    width: 100%;
    height: auto;
  }

}

@media (max-aspect-ratio: 16/9) {
  .back-video {
    width: 100%;
    height: auto;
  }
}

/* -------------------------------------------------------------------------------- */




.holidays-list {
  display: flex;
  align-items: center;
}












/* ------------------------------------------------------------------------------------------------------- */
.open-all-packages {
  color: white;
  text-decoration: none;
  background: #E15100;
  font-family: cursive;
  text-align: center;
  border-radius: 20px;
  width: 24%;
  height: 36px;
  font-size: 20px;
}







/* -------------------------------------------------------------------------------------------------------------- */






/* ------------------------------------------------------------------------------------------------------- */


/* ------------------------------------------------------------------------------------------------------- */




/* ------------------------------------------------------------------------------------------------------- */
@media (max-width: 768px) {

  #app h1,
  p,
  span,
  .surfCamp,
  .title-box {
    font-size: 14px;
    /* Устанавливаем размер шрифта для мобильной версии */
  }

  .open-all-packages {
    padding: 5px;
    width: auto;
  }

  .advertising,
  .text-popular-package,
  .text-box,
  .chooce-next-destanation p,
  text p {
    font-size: 10px;
  }



  .box-info {
    flex-direction: column;
  }

  .box {
    width: 250px;
    height: 100%;
  }

  .box-item1 img {
    width: 250px;
    border-radius: 20px;
  }

  .box-item1 {
    height: auto;
  }

  .text-surf-camp {
    width: auto;
    font-size: 10px;
    padding: 10px;
    height: 10px;

  }

}


</style>
<script>
import Header from './components/header.vue'; // Import the component
import homePage from './components/home-page/home-page.vue';
import Footer from './components/footer.vue';
export default {
  components: {
    'Header': Header, // Register the component
    'Footer': Footer,
    'homePage':homePage,
  }

}


</script>