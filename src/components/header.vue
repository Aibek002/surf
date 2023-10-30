<script>
export default {
  name: '',
  data() {
    return {
      largeImage: 'https://cdn.pixabay.com/vimeo/770315621/man-138644.mp4?width=1280&hash=6778f87fe59baffa432d6162daa7b3a409bfb36a',
      smallImage: 'https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=600',
      smallWidth: '100%',
      smallHeight:'150px',
    };
  },
  computed: {
    windowWidth() {
      return window.innerWidth;
    },
  },
  watch: {

    windowWidth(newWidth) {
      if (newWidth < 600) {
       
        this.largeVideo;
      } else {
        this.largeImage;
      
      }
    }
  },
 
  mounted() {
window.addEventListener('resize',this.hangleResize);
},

 methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 600) {
        this.smallWidth = '100%';
      } else {
        this.smallWidth = '1440';
      }
    }
  },
}
</script>

<template>
  <div class="bodys">
    <div class="containers">
      <video v-if="windowWidth >= 600" autoplay loop muted plays-inline class="back-video">
        <source
        :src="largeVideo"
        
          type="video/mp4">
      </video>
      <img class="bg-small-display"
      v-else :src="smallImage"
       alt=""
       >
      <div class="menu">
        <div class="logo">
          <img src="../img/travelingagency.svg" alt="">


        </div>
        <ul>
          <li><a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path
                  d="M10.4903 11.9839L12.2206 6.96642C12.9375 4.88721 14.2615 3.0966 16.0173 1.8313C16.4516 1.5183 17.0702 1.75593 17.2123 2.29038C17.7868 4.45089 17.7104 6.72079 16.9935 8.8L15.2632 13.8175C14.5462 15.8967 13.2223 17.6873 11.4665 18.9526C11.0322 19.2656 10.4136 19.028 10.2715 18.4935C9.69703 16.333 9.77334 14.0631 10.4903 11.9839Z"
                  stroke="#F4F4F4" stroke-width="1.03287" />
                <line x1="0.516433" y1="-0.516433" x2="3.81564" y2="-0.516433"
                  transform="matrix(0.325819 -0.944844 0.934052 0.358829 14.9727 8.54614)" stroke="#F4F4F4"
                  stroke-width="1.03287" stroke-linecap="round" />
                <line y1="-0.516433" x2="5.18973" y2="-0.516433"
                  transform="matrix(0.934052 0.358829 -0.325818 0.944844 10.6484 11.521)" stroke="#F4F4F4"
                  stroke-width="1.03287" />
                <line y1="-0.516433" x2="5.18973" y2="-0.516433"
                  transform="matrix(0.934052 0.358829 -0.325819 0.944844 9.58984 14.592)" stroke="#F4F4F4"
                  stroke-width="1.03287" />
                <path
                  d="M9.31826 8.67745L7.58804 13.695C6.87104 15.7742 5.54713 17.5648 3.79133 18.8301C3.35699 19.1431 2.7384 18.9054 2.59629 18.371C2.02183 16.2105 2.09815 13.9406 2.81514 11.8614L4.54536 6.84388C5.26236 4.76466 6.58627 2.97405 8.34207 1.70875C8.77641 1.39575 9.395 1.63339 9.53711 2.16784C10.1116 4.32834 10.0353 6.59824 9.31826 8.67745Z"
                  stroke="#F4F4F4" stroke-width="1.03287" />
                <path d="M9.83594 7.16528L7.76507 5.21089L4.98846 5.30306" stroke="#F4F4F4" stroke-width="1.03287" />
                <path d="M7.01693 15.3529L4.24032 15.4451L2.16945 13.4907" stroke="#F4F4F4" stroke-width="1.03287" />
                <path d="M7.72006 13.3063L4.94345 13.3985L2.87258 11.4441" stroke="#F4F4F4" stroke-width="1.03287" />
              </svg>
              Types of Holidays</a></li>

          <li><a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path
                  d="M10.5919 11.9839L12.3221 6.96642C13.0391 4.88721 14.363 3.0966 16.1188 1.8313C16.5532 1.5183 17.1718 1.75593 17.3139 2.29038C17.8883 4.45089 17.812 6.72079 17.095 8.8L15.3648 13.8175C14.6478 15.8967 13.3239 17.6873 11.5681 18.9526C11.1337 19.2656 10.5152 19.028 10.373 18.4935C9.79859 16.333 9.8749 14.0631 10.5919 11.9839Z"
                  stroke="#F4F4F4" stroke-width="1.03287" />
                <line x1="0.516433" y1="-0.516433" x2="3.81564" y2="-0.516433"
                  transform="matrix(0.325819 -0.944844 0.934052 0.358829 15.0742 8.54614)" stroke="#F4F4F4"
                  stroke-width="1.03287" stroke-linecap="round" />
                <line y1="-0.516433" x2="5.18973" y2="-0.516433"
                  transform="matrix(0.934052 0.358829 -0.325818 0.944844 10.75 11.521)" stroke="#F4F4F4"
                  stroke-width="1.03287" />
                <line y1="-0.516433" x2="5.18973" y2="-0.516433"
                  transform="matrix(0.934052 0.358829 -0.325819 0.944844 9.69141 14.592)" stroke="#F4F4F4"
                  stroke-width="1.03287" />
                <path
                  d="M9.41983 8.6777L7.6896 13.6952C6.97261 15.7744 5.6487 17.565 3.89289 18.8303C3.45855 19.1433 2.83996 18.9057 2.69786 18.3712C2.1234 16.2107 2.19971 13.9408 2.9167 11.8616L4.64693 6.84412C5.36392 4.76491 6.68783 2.9743 8.44364 1.709C8.87798 1.39599 9.49656 1.63363 9.63867 2.16808C10.2131 4.32858 10.1368 6.59849 9.41983 8.6777Z"
                  stroke="#F4F4F4" stroke-width="1.03287" />
                <path d="M9.9375 7.16528L7.86663 5.21089L5.09002 5.30306" stroke="#F4F4F4" stroke-width="1.03287" />
                <path d="M7.11849 15.3529L4.34189 15.4451L2.27102 13.4907" stroke="#F4F4F4" stroke-width="1.03287" />
                <path d="M7.82162 13.3065L5.04501 13.3987L2.97414 11.4443" stroke="#F4F4F4" stroke-width="1.03287" />
              </svg>
              Destinations</a></li>
          <li><a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                <circle cx="8.87339" cy="5.90659" r="0.978093" stroke="#F4F4F4" stroke-width="0.978093" />
                <path
                  d="M1.22275 8.69416C1.18789 8.26069 1.361 7.83644 1.68915 7.55109L7.97386 2.08612C8.4891 1.63809 9.25567 1.63809 9.77091 2.08612L16.0556 7.55109C16.3838 7.83644 16.5569 8.26069 16.522 8.69416L15.9901 15.3083C15.9329 16.0197 15.3389 16.5678 14.6252 16.5678H3.11958C2.40588 16.5678 1.81187 16.0197 1.75465 15.3083L1.22275 8.69416Z"
                  stroke="#F4F4F4" stroke-width="1.17371" />
                <line x1="4.17279" y1="16.6413" x2="4.17279" y2="18.5237" stroke="#F4F4F4" stroke-width="1.17371"
                  stroke-linecap="round" />
                <line x1="13.2548" y1="16.6413" x2="13.2548" y2="18.5237" stroke="#F4F4F4" stroke-width="1.17371"
                  stroke-linecap="round" />
                <path
                  d="M11.1582 16.0564V11.9003C11.1582 10.8199 10.2824 9.94409 9.20201 9.94409H8.57337C7.493 9.94409 6.61719 10.8199 6.61719 11.9003V16.0564"
                  stroke="#F4F4F4" stroke-width="1.17371" />
              </svg>
              Accommodations</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        

      </div>
      <div class="content">
        <h1>Your next thrilling adventure<br> starts today! </h1>
        <a href="" class="exploder">More details</a>
      </div>
    </div>
    <svg v-if="windowWidth < 600" class="wave" xmlns="http://www.w3.org/2000/svg" :width="smallWidth" :height="smallHeight" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 27.4739L4 24.4739C8 22.4739 16 18.4739 24 16.4739C32 14.4739 40 14.4739 48 20.4739C56 27.4739 64 39.4739 72 50.4739C80 61.4739 88 70.4739 96 65.4739C104 61.4739 111 44.4739 119 44.4739C127 44.4739 135 61.4739 143 67.4739C151 74.4739 159 70.4739 167 59.4739C175 48.4739 183 31.4739 191 29.4739C199 27.4739 207 39.4739 215 44.4739C223 48.4739 231 44.4739 239 39.4739C247 35.4739 255 31.4739 263 33.4739C271 35.4739 279 44.4739 287 46.4739C295 48.4739 303 44.4739 311 46.4739C319 48.4739 326 57.4739 334 54.4739C342 52.4739 350 39.4739 358 35.4739C366 31.4739 374 35.4739 382 29.4739C390 22.4739 398 5.47389 406 1.47389C414 -3.52611 422 5.47389 426 9.47389L430 14.4739V91.4739H426C422 91.4739 414 91.4739 406 91.4739C398 91.4739 390 91.4739 382 91.4739C374 91.4739 366 91.4739 358 91.4739C350 91.4739 342 91.4739 334 91.4739C326 91.4739 319 91.4739 311 91.4739C303 91.4739 295 91.4739 287 91.4739C279 91.4739 271 91.4739 263 91.4739C255 91.4739 247 91.4739 239 91.4739C231 91.4739 223 91.4739 215 91.4739C207 91.4739 199 91.4739 191 91.4739C183 91.4739 175 91.4739 167 91.4739C159 91.4739 151 91.4739 143 91.4739C135 91.4739 127 91.4739 119 91.4739C111 91.4739 104 91.4739 96 91.4739C88 91.4739 80 91.4739 72 91.4739C64 91.4739 56 91.4739 48 91.4739C40 91.4739 32 91.4739 24 91.4739C16 91.4739 8 91.4739 4 91.4739H0V27.4739Z" fill="#FCFCFC"/>
</svg>
    <svg v-else class="wave" xmlns="http://www.w3.org/2000/svg" width="100" height="326" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 66.6822L18 51.6822C37 37.6822 74 8.6822 111 1.6822C148 -5.3178 185 8.6822 222 59.6822C258 109.682 295 195.682 332 217.682C369 239.682 406 195.682 443 167.682C480 138.682 517 123.682 554 138.682C591 152.682 628 195.682 665 217.682C702 239.682 738 239.682 775 231.682C812 224.682 849 210.682 886 188.682C923 167.682 960 138.682 997 138.682C1034 138.682 1071 167.682 1108 195.682C1145 224.682 1182 253.682 1218 239.682C1255 224.682 1292 167.682 1329 145.682C1366 123.682 1403 138.682 1422 145.682L1440 152.682V325.682H1422C1403 325.682 1366 325.682 1329 325.682C1292 325.682 1255 325.682 1218 325.682C1182 325.682 1145 325.682 1108 325.682C1071 325.682 1034 325.682 997 325.682C960 325.682 923 325.682 886 325.682C849 325.682 812 325.682 775 325.682C738 325.682 702 325.682 665 325.682C628 325.682 591 325.682 554 325.682C517 325.682 480 325.682 443 325.682C406 325.682 369 325.682 332 325.682C295 325.682 258 325.682 222 325.682C185 325.682 148 325.682 111 325.682C74 325.682 37 325.682 18 325.682H0V66.6822Z" fill="white"/>
    </svg>



</div>
</template>


<style scoped>
.bodys{
  display: flex;
  flex-direction: column;
}
.wave{
  position: absolute;
  bottom: 100px;
  
}
.containers {
  height: 80vh;
  background: rgba(27, 27, 27, 0.91);
  position: relative;
  right: 0;
  bottom: 0;
  padding: 0 5%;
  display: flex;                          
  align-items: center;
  justify-content: center;
  position: relative;
}

.menu {
  max-width: 100%;
  min-width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 100px;
}

.text-logo {
  background: linear-gradient(180deg, #E15100 21.05%, #FF8F50 48.12%, rgba(255, 213, 66, 0.86) 86.84%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Kavoon;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -2.253px;
  margin-left: 40px;
}

ul {
  display: flex;
}


ul li {
  list-style: none;
  display: inline-block;
  margin-left: 40px;
  margin-bottom: 0px;

}

ul li a {
  color: var(--BG-2, #F4F4F4);
  font-family: Poppins;
  font-size: 15.649px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
}

ul li svg {
  vertical-align: middle;
  margin-right: 10px;
  /* Adjust margin as needed */
}
.back-video {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100vw;
}
.text-menu-detile-link {
  color: #6B7D8D;
  font-weight: 100;
  font-style: normal;
  font-family: cursive;
  font-size: small;
  margin: 0 0 0 5px;
}





.content {
  align-items: center;
  text-align: center;
}

.content h1 {
 
}

.content h1{
  -webkit-text-stroke: 2px #fff;
  color: transparent;
  transition: all 2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  text-align: center;
  font-family: sans-serif;
  font-size: 65px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  transition: 0.5s;
}

.exploder {
  text-decoration: none;
  display: inline-block;
  color: white;
  font-size: 24px;
  border: 2px solid #fff;
  /* Устанавливаем рамку */
  font-size: 15px;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 20px;
}
.exploder:hover {

  border: 0.752px solid  #f7070300;
  transition: all 1s;
  }
.bg-small-display{
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;

}

</style>