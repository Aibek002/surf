<template>
 <div class="container">
  <video autoplay loop muted plays-inline class="back-video">
    <source src="https://cdn.pixabay.com/vimeo/770315621/man-138644.mp4?width=1280&hash=6778f87fe59baffa432d6162daa7b3a409bfb36a" type="video/mp4">
  </video>
    <div class="menu">
     <div class="logo"><img width="80px" src="https://icon-library.com/images/surfing-icon/surfing-icon-4.jpg"><p class="text-logo">Surf & Travel</p></div>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contacts</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Login</a></li>
      </ul> 
      
  
    </div>
    <div class="content">
      <h1>Your next thrilling adventure<br> starts today! </h1>
      <a href="" class="exploder">More details</a>
    </div>
    <div class="menu-detile-tour">
    <div class="menu-detile-tour-item"><a href="/" class="menu-detile-tour-link"><img width="15px" src="https://cdn-icons-png.flaticon.com/128/8915/8915419.png" alt="logo"> <p class="text-menu-detile-link">Our Tours</p></a></div>
    <div class="menu-detile-tour-item"><a href="/" class="menu-detile-tour-link"><img width="15px" src="https://cdn-icons-png.flaticon.com/128/5108/5108797.png"> <p class="text-menu-detile-link">Options tour</p></a></div>
    <div class="menu-detile-tour-item"><a href="/" class="menu-detile-tour-link"><img width="15px" src="https://cdn-icons-png.flaticon.com/128/2390/2390582.png"> <p class="text-menu-detile-link">Location</p></a></div>
    <div class="menu-detile-tour-search"><a href="/" class="menu-detile-tour-link"><img width="15px" src="https://cdn-icons-png.flaticon.com/128/8053/8053592.png"> <p class="text-menu-detile-search">Search</p></a></div>


    </div>
  </div>
<div class="tour-africa">
<h1>Discover the destinations available in Africa:</h1>

</div>
  
</template>

<script>



</script>

<style>
body{
  margin: 0;
}
.back-video{
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  width: 100vw;
}
.exploder{
  text-decoration: none;
  display: inline-block;
  color: white;
  font-size: 24px;
  border: 2px solid #fff; /* Устанавливаем рамку */
  font-size: 15px;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 20px;
}
.container{
  /* width: 100%; */
  height: 80vh;
  background: rgba(27, 27, 27, 0.91);
  position: relative;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu{
  max-width: 100%;
  min-width: 90%;
  overflow: hidden; /* Обрезать содержимое элемента, если оно выходит за границы */
  white-space: nowrap; /* Запрет переноса текста на новую строку */
  text-overflow: ellipsis; /* Отображать многоточие (...) для обрезанного текста */
  max-width: 100%; /* Установить максимальную ширину элемента по размерам родительского контейнера */
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px  5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-detile-tour{
position: absolute;
border: 1.504px solid var(--GRAY-Light, #E3E3E1);
background: var(--Bianco, #FEFEFE);
box-shadow: 0px 4.51306px 8.27394px 0px rgba(0, 0, 0, 0.10);
left: 50;
top: 95%;
height: 10%;
border-radius: 50px;
width: 50%;
display: flex;
align-items: center;
justify-content: center;
}
.menu-detile-tour-item{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 0.752px solid var(--GRIGIO-TESTO, #6B7D8D);
  background: var(--Bianco, #FEFEFE);
  height: 50%;
  width: 15%;
  margin-left: 40px;
}
.menu-detile-tour-item img{
  width: 15px;
}
.menu-detile-tour-search img{
  width: 15px;
}
.menu-detile-tour-item:hover{
  width: 16%;
  height: 55%;
  border: 0.752px solid var(--GRIGIO-TESTO, #f70703);
}
.menu-detile-tour-search:hover{
  width: 16%;
  height: 55%;
  border: 0.752px solid var(--GRIGIO-TESTO, #f79103);
}
.menu-detile-tour-link{
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  
}
.text-menu-detile-link{
  color: #6B7D8D;
  font-weight: 100;
  font-style: normal;
  font-family:cursive ;
  font-size: small;
  margin-left: 5px;
}
.menu-detile-tour-search{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 0.752px solid var(--GRIGIO-TESTO, #6B7D8D);
  background: linear-gradient(80deg,white 20%, rgba(255, 157, 0, 0.818));
  height: 50%;
  width: 15%;
  margin-left: 40px;
}
.menu-detile-tour-item:hover{
  width: 16%;
  height: 55%;
  border: 0.752px solid var(--GRIGIO-TESTO, #f70703);
}
.text-menu-detile-search{
  background: linear-gradient(90deg, rgba(188, 122, 17, 0.818) 5%, #6f6f6fd4 90%); /* Linear gradient colors */
  -webkit-background-clip: text; /* Clip text to gradient background (for WebKit browsers) */
  background-clip: text; /* Clip text to gradient background */
  color: transparent; /* Make text transparent so that the gradient background shows through */
  font-weight: 100;
  font-style: normal;
  font-family:cursive ;
  font-size: small;
  margin-left: 5px;
}
.logo{
    display: flex;
    align-items: center;
}
.text-logo{
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
ul li{
  list-style: none;
  display: inline-block;
  margin-left: 40px;

}
ul li a{
  text-decoration: none;
  color: var(--BG-2, #F4F4F4);
font-family: sans-serif;
font-size: 15.649px;
font-style: normal;
font-weight: 600;
line-height: normal;

}
.content{
  align-items: center;
  text-align: center;
}
.content h1{
display: flex;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: var(--Bianco, #FEFEFE);
text-align: center;
font-family: sans-serif;
font-size: 65px;
font-style: normal;
font-weight: 800;
line-height: normal;
transition: 0.5s;
}
.content h1:hover{
  -webkit-text-stroke: 2px #fff;
  color: transparent;
}
@media (min-aspect-ratio: 16/9){
  .back-video{
    width: 100%;
    height: auto;
  }
  
}
@media (max-aspect-ratio: 16/9){
  .back-video{
    width: 100%;
    height: auto;
  }
}

/* -------------------------------------------------------------------------------- */
.tour-africa{
  position: relative;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 100px;
}
.tour-africa h1{
  font-family: cursive;
  font-weight: 700;
}
</style>