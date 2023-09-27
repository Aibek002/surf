<template>
 <div class="open-all-packages-div"><a href="" class="open-all-packages">Discover all the packages</a></div>
  <div class="all-package-info">
    <h1 class="title-popular-package">Why start with <p>Surfcamp?</p>
    </h1>
    <p class="advertising">For over 20 years we have been helping travelers like you to live profound surfing and life
      experiences around the world. We can guarantee you:</p>
  </div>
  <div class="box-info">
    <div class="flex-box">
      <div class="img"><img src="../../img/popular-package-img/Ellipse60.svg" alt=""></div>
      <h5>Exclusive activities</h5>
      <div class="text">
        <p>Not just surfing. With us you can choose whether to do yoga, diving, excursions and much more. We personalize
          your trip with what you love most.</p>
      </div>

    </div>
    <div class="flex-box">
      <div class="img"><img src="../../img/popular-package-img/Ellipse61.svg" alt=""></div>
      <h5>The destinations of Surfcamp</h5>

      <div class="text">
        <p>Not just surfing. With us you can choose whether to do yoga, diving, excursions and much more. We personalize
          your trip with what you love most.</p>
      </div>

    </div>
    <div class="flex-box">
      <div class="img"><img src="../../img/popular-package-img/Ellipse62.svg" alt=""></div>
      <h5>Suitable for everyone</h5>

      <div class="text">
        <p>Not just surfing. With us you can choose whether to do yoga, diving, excursions and much more. We personalize
          your trip with what you love most.</p>
      </div>

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
.open-all-packages-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 0% 0%
}
.all-package-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title-popular-package p {
  color: #E15100;
  font-weight: 800;
  margin-left: 10px;

}
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
.box-info {
  display: flex;
  width: 80%;
  margin: 5% 10% 0%;
  justify-content: center;
  align-items: center;
}

.box-info h5 {
  color: var(--GRAY, #302D27);
  text-align: center;
  font-family: Poppins;
  font-size: 19.562px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0%;
}

.flex-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin-left: 2%;
}
.img {
  border-radius: 180px;

}

.text {
  color: var(--GRIGIO-TESTO, #6B7D8D);
  text-align: center;
  font-family: Poppins;
  font-size: 15.649px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

</style>