<template>
  <div>
    <img src="../assets/imgs/logo.png" class="logo" alt="">
  </div>
</template>
<style>
  .hongbao_zanzhu{
    display: block;
    position:fixed;
    text-align: center;
    bottom: 336px;
    width:230px;
    right: 0;
    font-size: 23px;
    color: #505458;
  }
  .hongbao{
    position:fixed;
    bottom: 0;
    right: 0;
    height:330px;
    width:230px;
  }
  .logo{
    width: 90%;
  }
  .content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #FFFFFF;
}
</style>