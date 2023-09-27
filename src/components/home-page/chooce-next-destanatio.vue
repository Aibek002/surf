<template>
 <div class="chooce-next-destanation">

<h1>Choose your next destination</h1>
<p>Which corner of the world do you want to go to? Search from over 200 available destinations.</p>
<img src="https://imgpng.ru/d/world_map_PNG5.png" alt="">
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
.chooce-next-destanation h1 {
  color: var(--GRAY, #302D27);
  text-align: center;
  font-family: Kavoon;
  font-size: 38.146px;
  font-style: normal;
  font-weight: 400;
  line-height: 107.703%;
  /* 41.084px */
}

.chooce-next-destanation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.chooce-next-destanation p {
  color: var(--GRIGIO-TESTO, #6B7D8D);
  text-align: center;
  font-family: Montserrat;
  font-size: 19.562px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

}

.chooce-next-destanation img {
  width: 80%;
  height: auto;
  margin-top: 10%;
}
</style>