<template>
  <div id="app">
    <!-- <Herader /> -->
    <router-view></router-view>
    <!-- 关于我们 -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Herader from "./components/Herader";
// import Footer from "./components/Footer";
import QRCode from "qrcodejs2";

export default {
  name: "app",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      imgs: [],
      input4: "",
    };
  },
  // components: { Herader, Footer },
  mounted() {
    // if (this.isMobile()) {
    //   return false;
    // } else {
    //   this.$router.push("Homeh5")
    //   // location.href = "https://fansex.chainfans.io";
    // }
    // this.creatQrCode();
  },
  methods: {
    // 添加判断方法
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    creatQrCode() {
      // var qrcode = new QRCode(this.$refs.qrCodeUrl, {
      //   text: "xxx",
      //   width: 100,
      //   height: 100,
      //   colorDark: "#000000",
      //   colorLight: "#ffffff",
      //   correctLevel: QRCode.CorrectLevel.H,
      // });
      // qrcode.makeCode("https://m.qtshe.com");
      var qrcode1 = new QRCode(this.$refs.qrCodeUrl1, {
        text: "app下载",
        width: 150,
        height: 150,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
      qrcode1.makeCode("https://m.qtshe1.com");
    },
    login() {
      this.$router.push("login");
    },
    registered() {
      this.$router.push("registered");
    },
    gohome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
@media only screen and (min-width: 1200px) and (max-width: 1900px) {
  #app {
    min-width: 1200px;
  }
}
@media only screen and (min-width: 260px) and (max-width: 768px) {
  #app {
    // min-width: 260px;
    max-width: 100vw;
  }
}
</style>
