<template>
 <h1 class="title-popular-package">
    The most popular packages
  </h1>
  <p class="text-popular-package">
    Choose the type of surf holiday that's right for you. You can leave at any time.
  </p>
  <div class="popular-packages">

    <div class="box">
      <div class="box-item1">
        <p class="text-surf-camp">Surf Camp</p> <img
          src="https://images.pexels.com/photos/17636489/pexels-photo-17636489.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="">
      </div>
      <p class="title-box"> Africa, Marocco</p>
      <p class="text-box">Jeffrey’s Bay Surf Camp in Hotel</p>
    </div>

    <div class="box">
      <div class="box-item1">
        <p class="text-surf-camp">Surf Camp</p> <img
          src="https://images.pexels.com/photos/8241135/pexels-photo-8241135.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      </div>
      <p class="title-box"> Africa, Marocco</p>
      <p class="text-box">Jeffrey’s Bay Surf Camp in Hotel</p>
    </div>

    <div class="box">
      <div class="box-item1">
        <p class="text-surf-camp">Surf Camp</p> <img
          src="https://images.pexels.com/photos/1650730/pexels-photo-1650730.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      </div>
      <p class="title-box"> Africa, Marocco</p>
      <p class="text-box">Jeffrey’s Bay Surf Camp in Hotel</p>
    </div>

    <div class="box">
      <div class="box-item1">
        <p class="text-surf-camp">Surf Camp</p> <img
          src="https://images.pexels.com/photos/757133/pexels-photo-757133.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      </div>
      <p class="title-box"> Africa, Marocco</p>
      <p class="text-box">Jeffrey’s Bay Surf Camp in Hotel</p>
    </div>
    <div class="box">
      <div class="box-item1">
        <p class="text-surf-camp">Surf Camp</p> <img
          src="https://images.pexels.com/photos/12112880/pexels-photo-12112880.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="">
      </div>
      <p class="title-box"> Africa, Marocco</p>
      <p class="text-box">Jeffrey’s Bay Surf Camp in Hotel</p>
    </div>

    <div class="box">
      <div class="box-item1">
        <p class="text-surf-camp">Surf Camp</p> <img
          src="https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      </div>
      <p class="title-box"> Africa, Marocco</p>
      <p class="text-box">Jeffrey’s Bay Surf Camp in Hotel</p>
    </div>

    <div class="box">
      <div class="box-item1">
        <p class="text-surf-camp">Surf Camp</p> <img
          src="https://images.pexels.com/photos/307006/pexels-photo-307006.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      </div>
      <p class="title-box"> Africa, Marocco</p>
      <p class="text-box">Jeffrey’s Bay Surf Camp in Hotel</p>
    </div>

    <div class="box">
      <div class="box-item1">
        <p class="text-surf-camp">Surf Camp</p> <img
          src="https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">


      </div>
      <p class="title-box"> Africa, Marocco</p>
      <p class="text-box">Jeffrey’s Bay Surf Camp in Hotel</p>
    </div>
    <div class="box">
      <div class="box-item1">
        <p class="text-surf-camp">Surf Camp</p> <img
          src="https://images.pexels.com/photos/1122408/pexels-photo-1122408.jpeg?auto=compress&cs=tinysrgb&w=600" alt="">
      </div>

      <p class="title-box"> Africa, Marocco</p>
      <p class="text-box">Jeffrey’s Bay Surf Camp in Hotel</p>
    </div>
  </div>
</template>

<script>
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
}
</script>

<style scoped>
.title-popular-package {
  color: #1b1b1b;
  font-size: 35px;
  font-weight: 800;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0%;

}
.text-popular-package {
  color: var(--GRIGIO-TESTO, #6B7D8D);
  text-align: center;
  font-family: Montserrat;
  font-size: 19.562px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.popular-packages {
  display: flex;
  justify-content: center;
  width: 90%;
  margin-top: 0%;
  margin-left: 5%;
  flex-wrap: wrap;
  gap: 20px;

}


.box {
  min-width: 355.582px;
  height: 345.356px;
  flex-shrink: 0;
  border-radius: 23.474px;
  border: 0.978px solid var(--GRAY-Light, #E3E3E1);
  background: var(--Bianco, #FEFEFE);
  box-shadow: 0px 5.86856px 10.75902px 0px rgba(0, 0, 0, 0.10);
  position: relative;
  ;
}

.box-item1 {
  border-radius: 23.474px 23.474px 0px 0px;
  width: 355.582px;
  height: 238.777px;
  flex-shrink: 0;
  overflow: hidden;

}

/* <!-- background: url('') 50% / cover no-repeat, linear-gradient(lightgray, #D9D9D9); --> */

.box-item1 img {
  width: 100%;
  /* Максимальная ширина картинки равна ширине контейнера */
  max-height: 200%;
  /* Максимальная высота картинки равна высоте контейнера */
  height: auto;
  /* Автоматически подстраивать высоту, чтобы сохранить пропорции */
}



.text-surf-camp {
  position: absolute;
  color: white;
  left: 256px;
  top: 18px;
  color: var(--K, #1B160E);
  font-family: Poppins;
  font-size: 9.781px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 39.124px;
  background: var(--ORANGE-Light, #FF8F50);
  /* text-align: center; */
  display: inline-flex;
  padding: 3.912px 15.649px;
  align-items: flex-start;
  margin: 0;
}

.title-box {
  color: var(--ORANGE-Light, #FF8F50);
  font-family: Poppins;
  font-size: 13.693px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 16px;

}

.text-box {
  color: var(--GRAY, #302D27);
  font-family: Poppins;
  font-size: 15.649px;
  font-style: normal;
  font-weight: 700;
  line-height: 21.518px;
  /* 137.5% */
  margin-left: 16px;
  width: 279.248px;
  height: 54.645px;
  flex-shrink: 0;
}

</style>