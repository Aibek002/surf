<script>
export default {
  name: "",
  data() {
    return {
      largeVideo:
        "https://cdn.pixabay.com/vimeo/770315621/man-138644.mp4?width=1280&hash=6778f87fe59baffa432d6162daa7b3a409bfb36a",
      smallImage:
        "https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=600",
      smallWidth: "100%",
      smallHeight: "150px",
    };
  },
  computed: {
    windowWidth() {
      return window.innerWidth;
    },
  },
  watch: {},

  mounted() {
    window.addEventListener("resize", this.hangleResize);
  },

  methods: {
    windowWidth(newWidth) {
      if (newWidth > 600) {
        this.largeVideo;
      } else {
        this.smallImage;
      }
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 600) {
        this.smallWidth = "100%";
      } else {
        this.smallWidth = "100%";
      }
    },
  },
};
</script>

<template>
  <div class="bodys">
    <div class="containers">
      <video
        v-if="windowWidth > 600"
        autoplay
        loop
        muted
        plays-inline
        class="back-video"
      >
        <source :src="largeVideo" type="video/mp4" />
      </video>
      <img class="bg-small-display" v-else :src="smallImage" alt="" />
      <div class="menu">
        <div class="logo">
          <img src="../img/travelingagency.svg" alt="" />
        </div>
        <ul v-if="windowWidth > 600">
          <li>
            <a href=""> Types of Tours</a>
          </li>

          <li><a href=""> Recreation Area</a></li>
          <li><a href=""> Accommodations</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
      <div class="content">
        <h1>
          <img src="../img\fonts\YourNextThrillingAdventure.png" alt="" />
        </h1>
        <a href="" class="exploder">More details</a>
      </div>
    </div>
    <svg
      v-if="windowWidth < 600"
      class="waveinSmallWidth"
      xmlns="http://www.w3.org/2000/svg"
      :width="smallWidth"
      :height="smallHeight"
      fill="none"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 27.4739L4 24.4739C8 22.4739 16 18.4739 24 16.4739C32 14.4739 40 14.4739 48 20.4739C56 27.4739 64 39.4739 72 50.4739C80 61.4739 88 70.4739 96 65.4739C104 61.4739 111 44.4739 119 44.4739C127 44.4739 135 61.4739 143 67.4739C151 74.4739 159 70.4739 167 59.4739C175 48.4739 183 31.4739 191 29.4739C199 27.4739 207 39.4739 215 44.4739C223 48.4739 231 44.4739 239 39.4739C247 35.4739 255 31.4739 263 33.4739C271 35.4739 279 44.4739 287 46.4739C295 48.4739 303 44.4739 311 46.4739C319 48.4739 326 57.4739 334 54.4739C342 52.4739 350 39.4739 358 35.4739C366 31.4739 374 35.4739 382 29.4739C390 22.4739 398 5.47389 406 1.47389C414 -3.52611 422 5.47389 426 9.47389L430 14.4739V91.4739H426C422 91.4739 414 91.4739 406 91.4739C398 91.4739 390 91.4739 382 91.4739C374 91.4739 366 91.4739 358 91.4739C350 91.4739 342 91.4739 334 91.4739C326 91.4739 319 91.4739 311 91.4739C303 91.4739 295 91.4739 287 91.4739C279 91.4739 271 91.4739 263 91.4739C255 91.4739 247 91.4739 239 91.4739C231 91.4739 223 91.4739 215 91.4739C207 91.4739 199 91.4739 191 91.4739C183 91.4739 175 91.4739 167 91.4739C159 91.4739 151 91.4739 143 91.4739C135 91.4739 127 91.4739 119 91.4739C111 91.4739 104 91.4739 96 91.4739C88 91.4739 80 91.4739 72 91.4739C64 91.4739 56 91.4739 48 91.4739C40 91.4739 32 91.4739 24 91.4739C16 91.4739 8 91.4739 4 91.4739H0V27.4739Z"
        fill="#FCFCFC"
      />
    </svg>
    <svg
      v-else
      class="waveinBigWidth"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="326"
      viewBox="0 0 2000 326"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 66.6822L25 51.6822C51.3889 37.6822 102.778 8.6822 154.167 1.6822C205.556 -5.3178 256.944 8.6822 308.333 59.6822C358.333 109.682 409.722 195.682 461.111 217.682C512.5 239.682 563.889 195.682 615.278 167.682C666.667 138.682 718.056 123.682 769.444 138.682C820.833 152.682 872.222 195.682 923.611 217.682C975 239.682 1025 239.682 1076.39 231.682C1127.78 224.682 1179.17 210.682 1230.56 188.682C1281.94 167.682 1333.33 138.682 1384.72 138.682C1436.11 138.682 1487.5 167.682 1538.89 195.682C1590.28 224.682 1641.67 253.682 1691.67 239.682C1743.06 224.682 1794.44 167.682 1845.83 145.682C1897.22 123.682 1948.61 138.682 1975 145.682L2000 152.682V325.682H1975C1948.61 325.682 1897.22 325.682 1845.83 325.682C1794.44 325.682 1743.06 325.682 1691.67 325.682C1641.67 325.682 1590.28 325.682 1538.89 325.682C1487.5 325.682 1436.11 325.682 1384.72 325.682C1333.33 325.682 1281.94 325.682 1230.56 325.682C1179.17 325.682 1127.78 325.682 1076.39 325.682C1025 325.682 975 325.682 923.611 325.682C872.222 325.682 820.833 325.682 769.444 325.682C718.056 325.682 666.667 325.682 615.278 325.682C563.889 325.682 512.5 325.682 461.111 325.682C409.722 325.682 358.333 325.682 308.333 325.682C256.944 325.682 205.556 325.682 154.167 325.682C102.778 325.682 51.3889 325.682 25 325.682H0V66.6822Z"
        fill="white"
      />
    </svg>
  </div>
</template>

<style scoped>
@media screen and (max-width: 600px) {
  .containers {
    height: 47vh;
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
    background: linear-gradient(
      180deg,
      #e15100 21.05%,
      #ff8f50 48.12%,
      rgba(255, 213, 66, 0.86) 86.84%
    );
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
    color: transparent;
    border-color: #ffff;
    -webkit-text-stroke: 0.5px #fff;
    text-decoration: none;
    text-align: center;
    font-family: Stereofunk;
    font-size: 12px;
    font-style: normal;
    line-height: 27px; /* 225% */
    letter-spacing: 0.12px;
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
    width: 100%;
  }
  .text-menu-detile-link {
    color: #6b7d8d;
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

  .content h1 {
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
    border: 0.752px solid #f7070300;
    transition: all 1s;
  }
  .bg-small-display {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .bodys {
    display: flex;
    flex-direction: column;
  }

  .waveinSmallWidth {
    position: absolute;
    top: 40vh;
    max-width: 2000px;
    width: 100%;
  }
}
@media screen and (min-width: 600px) {
  .bodys {
    display: flex;
    flex-direction: column;
  }
  .waveinBigWidth {
    position: absolute;
    bottom: 50px;
    max-width: 2000px;
    width: 100%;
  }
  .waveinSmallWidth {
    position: absolute;
    bottom: 100px;
    max-width: 2000px;
    width: 100%;
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
    background: linear-gradient(
      180deg,
      #e15100 21.05%,
      #ff8f50 48.12%,
      rgba(255, 213, 66, 0.86) 86.84%
    );
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
    color: transparent;
    border-color: #ffff;
    -webkit-text-stroke: 0.5px #fff;
    text-decoration: none;
    text-align: center;
    font-family: Stereofunk;
    font-size: 12px;
    font-style: normal;
    line-height: 27px; /* 225% */
    letter-spacing: 0.12px;
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
    width: 100%;
  }
  .text-menu-detile-link {
    color: #6b7d8d;
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

  .content h1 {
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
    border: 0.752px solid #f7070300;
    transition: all 1s;
  }
  .bg-small-display {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
}
</style>
