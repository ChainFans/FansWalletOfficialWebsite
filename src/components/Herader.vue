<template>
  <div class="nav-header">
    <div class="header-div">
      <div class="header-nav">
        <div class="logo" @click="gohome">
          <img src="../assets/mlqb.png" alt />
          <p>FansWallet</p>
        </div>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-title"
          mode="horizontal"
          @select="handleSelect"
          background-color="#ffffff"
          text-color="#000"
          active-text-color="#1abb9a"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">定制钱包</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script>
// import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      imgs: [],
      input4: "",
    };
  },
  created() {
    this.activeIndex = localStorage.getItem("activeIndex") || 1;
  },
  mounted() {
    // if (this.isMobile()) {
    //   return false;
    // } else {
    //   // location.href = "https://fansex.chainfans.io";
    // }
    // this.creatQrCode();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
      localStorage.setItem("activeIndex", this.activeIndex);
      if (key == 1) {
        this.$router.push("/");
      }
      if (key == 2) {
        this.$router.push("custom");
        // this.$router.push("Homeh5")
      }
    },
    // creatQrCode() {
    //   // var qrcode = new QRCode(this.$refs.qrCodeUrl, {
    //   //   text: "xxx",
    //   //   width: 100,
    //   //   height: 100,
    //   //   colorDark: "#000000",
    //   //   colorLight: "#ffffff",
    //   //   correctLevel: QRCode.CorrectLevel.H,
    //   // });
    //   // qrcode.makeCode("https://m.qtshe.com");
    //   var qrcode1 = new QRCode(this.$refs.qrCodeUrl1, {
    //     text: "app下载",
    //     width: 150,
    //     height: 150,
    //     colorDark: "#000000",
    //     colorLight: "#ffffff",
    //     correctLevel: QRCode.CorrectLevel.H,
    //   });
    //   qrcode1.makeCode("https://m.qtshe1.com");
    // },
    gohome() {
      this.$router.push("/");
    },
    // login() {
    //   this.$router.push("login");
    // },
    // registered() {
    //   this.$router.push("registered");
    // },
  },
};
</script>
<style lang="less" scoped>
.nav-header {
  padding: 10px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #d3d3d3;
  .header-div {
    background-color: #fff;
    font-size: 18px;
    .header-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      width: 1200px;
      margin: 0 auto;
      font-size: 18px;
      .logo {
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          height: 80px;
          width: 80px;
        }
      }
    }
    .el-menu-title {
      .el-menu-item {
        font-size: 18px !important;
      }
      .el-menu-item:hover {
        border-bottom: 1px solid rgb(255, 208, 75);
        border: 0 0 15px 0;
        background-color: #fff !important;
        color: #1abb9a !important;
      }
    }
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
  }
}
</style>