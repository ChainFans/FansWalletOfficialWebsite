<template >
  <div class="nav">
    <!-- 导航 -->
    <Herader class="header-top" />
    <div class="header">
      <div class="header-div">
        <div class="header-left">
          <img src="../../assets/mlqb/logo (2).png" alt />
          <p>FansWallet</p>
        </div>
        <div class="header-right" @click="showPopup">
          <img src="../../assets/mlqb/download.png" alt />
        </div>

        <!-- <van-popup
          v-model="show"
          position="top"
          class="popup"
          :overlay="false"
          :style="{width:'100%',height:'30%'}"
        >
          <div class="language">
            <span>定制钱包</span>
          </div>
        </van-popup>-->
      </div>
      <div v-show="show" class="navs">
        <p @click="gocustom(1)">首页</p>
        <p @click="gocustom(2)">定制钱包</p>
        <p @click="gocustom(3)">官网</p>
      </div>
    </div>
    <div class="homebanner1">
      <div class="banner1_content_zone">
        <div class="img-zone">
          <!-- <img src="../../assets/mlqb/new_homebanner1.bcbcf1c.png" alt class="homebanner1-img" /> -->
          <img src="../../assets/mlqb/wallet.png" alt class="homebanner1-img" />
          <div class="home-action-zone"></div>
        </div>
        <div class="ft-zone">
          <h1 class>FansWallet-您身边的数字资产管理专家</h1>
          <p class>FansWallet是一款安全、易用、功能强大的数字钱包App，支持多种数字资产的存储，提供多种应用场景，旨在为用户提供最全面的区块链服务。</p>
          <div class="banner1-qr-zone">
            <div class="banner1-qr-left-zone">
              <div
                ref="qrCodeUrl"
                class="pcqrCodeUrl"
                style="padding:10px; width: 168px; border: 1px solid rgba(0, 0, 0, 0.8);"
              ></div>
              <!-- <img
                src="../../assets/mlqb/erwema.921048d.png"
                alt
                style="width: 168px; border: 1px solid rgba(0, 0, 0, 0.8);"
              />-->
              <p>扫码下载</p>
            </div>
            <div class="banner1-qr-right-zone">
              <a class="ios-btn" @click="download(1)">
                <i></i>
                <span>iOS 下载</span>
              </a>
              <a class="android-btn" @click="download(2)">
                <i></i>
                <span>Android 下载</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="homebanner1h5">
      <h3>FansWallet-您身边的数字资产管理专家</h3>
      <p>FansWallet是一款安全、易用、功能强大的数字钱包App，支持多种数字资产的存储，提供多种应用场景，旨在为用户提供最全面的区块链服务。</p>
      <div class="img_zone">
        <div class="homebanner1-img-zone">
          <!-- <img src="../../assets/mlqb/new_homebanner1.bcbcf1c.png" alt class="homebanner1-img" /> -->
          <img src="../../assets/mlqb/wallet.png" alt class="homebanner1-img" />
        </div>
        <div class="ft_zone">
          <div class="ft_zone_btn">
            <a class="ios-btn" @click="iosdownload(1)">
              <i></i>
              <span class>iOS 下载</span>
            </a>
            <a class="android-btn" @click="iosdownload(2)">
              <i></i>
              <span class>Android 下载</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="homebanner2">
      <div class="banner-light-wallet">
        <h3>便捷 安全 灵活 随心切换</h3>
        <h4>一个入口开启多种模式，踏入区块链世界之门，满足各种区块链场景需求</h4>
        <div class="row">
          <div class="col">
            <img
              src="../../assets/mlqb/new_picture1.04ccad8.png"
              alt
              class="banner-light-wallet-img1"
            />
            <div class="left-zone">
              <h4 class="title">微账户</h4>
              <p class="content-ft">入门级操作体验</p>
              <p class="content-ft">微账户用户间转账零手续费，秒到账</p>
              <p class="content-ft">丰富的金融交易场景</p>
            </div>
          </div>
          <div class="banner-light-wallet-img-zone col">
            <img
              src="../../assets/mlqb/new_picture1.04ccad8.png"
              alt
              class="banner-light-wallet-img"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="cold-wallet-all">
      <div class="banner-cold-wallet">
        <div class="row">
          <div class="banner-light-wallet-img-zone col">
            <img
              src="../../assets/mlqb/new_picture2.9a7df2c.png"
              alt
              class="banner-cold-wallet-img"
            />
          </div>
          <div class="col" style="padding-left: 15px;">
            <img
              src="../../assets/mlqb/new_picture2.9a7df2c.png"
              alt
              class="banner-cold-wallet-imgh5"
            />
            <div class="left-zone">
              <h4 class="title">轻钱包</h4>
              <p class="content-ft">经典的去中心化HD钱包，支持超多币种</p>
              <p class="content-ft">一键转账、收款，易用又安全</p>
              <p class="content-ft">汇集全球范围热门、有趣的DApp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="micro-account-all">
      <div class="banner-micro-account">
        <div class="row">
          <div class="col">
            <img
              src="../../assets/mlqb/new_picture3.61f58a7.png"
              alt
              class="banner-micro-account-img2"
            />
            <div class="left-zone">
              <h4 class="title">冷钱包</h4>
              <p class="content-ft">为保管大额资产用户打造</p>
              <p class="content-ft">专用硬件设备离线存储私钥，极致安全</p>
              <p class="content-ft">二维码离线通信，根绝一切网络入侵的可能</p>
              <a href="/" class="more">了解更多</a>
            </div>
          </div>
          <div class="banner-micro-account-img2-zone col">
            <img
              src="../../assets/mlqb/new_picture3.61f58a7.png"
              alt
              class="banner-micro-account-img"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="banner5">
      <h3>支持多币种</h3>
      <p>一站管理主流资产，支持所有ERC 20 token</p>
      <div class="icon-zone">
        <div>
          <img src="../../assets/mlqb/download1.png" alt />
          <p>BTC</p>
        </div>
        <div>
          <img src="../../assets/mlqb/download2.png" alt />
          <p>ETH</p>
        </div>
        <div>
          <img src="../../assets/mlqb/download3.png" alt />
          <p>LTC</p>
        </div>
        <div>
          <img src="../../assets/mlqb/download4.png" alt />
          <p>ETC</p>
        </div>
        <div>
          <img src="../../assets/mlqb/zec.029670b.png" alt />
          <p>ZEC</p>
        </div>
        <div>
          <img src="../../assets/mlqb/qtum.72ea98f.png" alt />
          <p>QTUM</p>
        </div>
        <div>
          <img src="../../assets/mlqb/download5.png" alt />
          <p>DASH</p>
        </div>
        <div>
          <img src="../../assets/mlqb/doge.214ef8b.png" alt />
          <p>DOGE</p>
        </div>
      </div>
      <div class="icon-zone icon-zone1">
        <div>
          <img src="../../assets/mlqb/wicc.0016ab8.png" alt />
          <p>WICC</p>
        </div>
        <div>
          <img src="../../assets/mlqb/download6.png" alt />
          <p>BCH</p>
        </div>
        <div>
          <img src="../../assets/mlqb/download7.png" alt />
          <p>BHD</p>
        </div>
        <div>
          <img src="../../assets/mlqb/download8.png" alt />
          <p>USDT</p>
        </div>
        <div>
          <img src="../../assets/mlqb/lbtc.5a61520.png" alt />
          <p>LBTC</p>
        </div>
        <div>
          <img src="../../assets/mlqb/download9.png" alt />
          <p>USDT（ERC20）</p>
        </div>
        <div>
          <img src="../../assets/mlqb/download10.png" alt />
          <p>IE</p>
        </div>
        <div>
          <img src="../../assets/mlqb/download11.png" alt />
          <p>LHD</p>
        </div>
        <div>
          <img src="../../assets/mlqb/download12.png" alt />
          <p>MOAC</p>
        </div>
      </div>
    </div>
    <div class="added-service-zone">
      <h3>多种增值服务</h3>
      <div class="content_zone">
        <div class="card_zone">
          <img src="../../assets/mlqb/download20.png" alt />
          <p class>
            多币种Staking项目
            <br />坐享增益
          </p>
        </div>
        <div class="card_zone2">
          <img src="../../assets/mlqb/download21.png" alt />
          <p class>形式多样可选择</p>
        </div>
        <div class="card_zone">
          <img src="../../assets/mlqb/download22.png" alt />
          <p class>入场门槛低</p>
        </div>
      </div>
    </div>
    <div class="footerh5">
      <div class="footer-box waper clearfix">
        <ul class="footer-list">
          <li class="footer-title">联系我们</li>
          <li class="footer-content">
            <ul>
              <li>
                <a href>
                  <span class="iconfont icon-dianhua"></span>咨询热线：027-5976-2021
                </a>
              </li>
              <li>
                <a class href>
                  <span class="iconfont icon-dianhua"></span>商务邮箱：business@chainfans.io
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="footer-list">
          <li class="footer-title"></li>
          <li class="footer-content">
            <span class="iconfont icon-wangzhi"></span>
            <a href="http://chainfans.io" target="_blank">网址：www.chainfans.io</a>
          </li>
          <li class="footer-address">
            <span class="iconfont icon-dizhi">地址：武汉迷链科技有限公司</span>
          </li>
        </ul>
        <ul class="footer-list">
          <li class="contact-img">
            <img src="../../assets/mlqb/ma.jpg" />
            <div style="padding-top: 5px;">微信扫码了解详情</div>
          </li>
        </ul>
      </div>
    </div>
    <Footer class="footer" />
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
import Herader from "@/components/Herader.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Herader, Footer },
  data() {
    return {
      index: 2,
      activeIndex: "1",
      activeIndex2: "1",
      imgs: [],
      input4: "",
      show: false,
    };
  },
  mounted() {
    this.creatQrCode();
    // var hash = window.location.hash;
    // var index = hash.lastIndexOf("#");
    // if (index != -1) {
    //   var id = hash.substring(index + 1, hash.length + 1);
    //   var div = document.getElementById(id);
    //   if (div) {
    //     //这个方法在页面刷新的时候可以跳到对应锚点
    //     div.scrollIntoView();
    //   }
    // }
  },
  methods: {
    creatQrCode() {
      var qrcode = new QRCode(this.$refs.qrCodeUrl, {
        text: "xxx",
        width: 168,
        height: 168,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
      // qrcode.makeCode("http://cdn.chainfans.cloud/fw_1.0.3.apk");
      qrcode.makeCode("http://cdn.chainfans.cloud/cfw.apk");

      // var qrcode1 = new QRCode(this.$refs.qrCodeUrl1, {
      //   text: "app下载",
      //   width: 150,
      //   height: 150,
      //   colorDark: "#000000",
      //   colorLight: "#ffffff",
      //   correctLevel: QRCode.CorrectLevel.H,
      // });
      // qrcode1.makeCode("https://m.qtshe1.com");
    },
    // quotes(index) {
    //   this.index = index;
    // },
    showPopup() {
      this.show = !this.show;
    },
    gocustom(val) {
      this.show = false;
      if (val == 1) {
        this.$router.push("/");
      }
      if (val == 2) {
        this.$router.push("custom");
      }
      if (val == 3) {
        location.href = "https://www.chainfans.io";
      }
    },
    iosdownload(val) {
      if (val == 1) {
        this.$toast.fail("敬请期待");
      } else if (val == 2) {
        // location.href = "http://cdn.chainfans.cloud/fw_1.0.3.apk";
        location.href = " http://cdn.chainfans.cloud/cfw.apk";
      }
    },
    download(val) {
      if (val == 1) {
        this.$message.warning("敬请期待");
      } else if (val == 2) {
        // location.href = "http://cdn.chainfans.cloud/fw_1.0.3.apk";
        location.href = " http://cdn.chainfans.cloud/cfw.apk";

      }
    },
  },
};
</script>

<style lang="less" scoped >
@media only screen and (min-width: 1200px) and (max-width: 2000px) {
  .nav {
    min-width: 1200px;
    .header-top {
      display: block;
    }
    .homebanner1h5 {
      display: none;
    }
    .header {
      display: none;
    }
    .footerh5 {
      display: none;
    }
    .homebanner1 {
      width: 100%;
      height: 747px;
      margin-top: 80px;
      background: #fff;
      opacity: 1;
      .banner1_content_zone {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        .img-zone {
          position: relative;
          width: 470px;
          img {
            width: 309px;
            // padding-top: 60px;
            margin-top: 60px;
            padding: 15px 10px;
            background-color: #1abb9a;
            border-radius: 8px;
          }
        }
        .ft-zone {
          flex: 1;
          h1 {
            font-size: 40px;
            padding-top: 108px;
            // margin-top: 130px;
            line-height: 1;
            margin: 0;
          }
          p {
            color: #5f6167;
            font-size: 22px;
            line-height: 48px;
            padding-top: 33px;
            padding-bottom: 104px;
          }
          .banner1-qr-zone {
            display: flex;
            .banner1-qr-left-zone {
              img {
                width: 168px;
                border: 1px solid rgba(0, 0, 0, 0.8);
                position: relative;
                z-index: 8;
              }
              p {
                color: #1b1f2c;
                font-size: 16px;
                padding-top: 14px;
                line-height: 1;
                text-align: center;
              }
            }
            .banner1-qr-right-zone {
              margin-left: 160px;
              position: relative;
              z-index: 8;
              padding-top: 5px;
              .ios-btn {
                width: 224px;
                height: 61px;
                background-color: #1abb9a;
                border-radius: 31px;
                display: flex;
                color: #fff;
                position: relative;
                align-items: center;
                cursor: pointer;
                i {
                  width: 31px;
                  height: 39px;
                  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAnCAYAAAD3h5P5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0Y1OTNBMDRGODg1MTFFOTg2Nzc5QzUyMEEzNDcxRTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0Y1OTNBMDVGODg1MTFFOTg2Nzc5QzUyMEEzNDcxRTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRjU5M0EwMkY4ODUxMUU5ODY3NzlDNTIwQTM0NzFFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRjU5M0EwM0Y4ODUxMUU5ODY3NzlDNTIwQTM0NzFFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pieq7UUAAAIoSURBVHjaxJdNKERRFMffzBCSSTIxK0mxGBQRCkuirCxFsiVZWflOlkq+Ss0WhZIsfZQSG0TJwldKEQvFApHrf3Jvva43b67ee9e/fs286Z33n3vfueee62OMGS4rAhpAJhgDzzHvJHOXyAbT4I396BYE7WISXBptAVjhoxa6sB015HfBOBXMS8akvbiRDqfaB+bYb72D3HjxTs2LmbX6VOKdTnuzxW9rYFQl2Kl5hXS9DtpVg52ah/nnLmgFTeBJNdhnU2Qoi/NBHr++AufgxXRPOQiAfX5NS7eUZ346/yMn4Ay8qmR7MugBh+DLlET0/RSMgRqQaoopBAPg2CL5KG4PtIFEu2yPgB2mJnrgKthn6toGBVbmZeCeea8HUG9eahlgAWQZ3isECs3vfJHpU6d52qs0Gg/JFa7N0KNDufL5+cavQ1PgUzYPaTB+AFtW5fVTgzlVxxsvmgkVvXnVyago8J/mVLzS/ss8l+92v8wDGswTQYuV+aOm0XeAatn8SGPSRc2bl99q8Xso6ow2Qa1oo6jlOdb07oXewQSN/BRsGHqVBErEUotqNqeS3ivMV8GBRvMletXC/AMMazQfpyZK7l7XNXQzs8JPPjSE+fSHPRrxJSWaOHjItf0OdHlc5V7inc/7PZjubtnH7qw2GWMWGD+NbvDuJAUUgTpQFuNZI2DwLwdFg5886Q/kgGtuuMwroqwg3zYbQSXvDem+GbBj9fBvAQYAazulnkZAwTUAAAAASUVORK5CYII=)
                    no-repeat 50%;
                  display: block;
                  margin-left: 39px;
                  margin-right: 17px;
                }
              }
              .android-btn {
                width: 224px;
                height: 61px;
                background-color: #1abb9a;
                border-radius: 31px;
                display: flex;
                color: #fff;
                position: relative;
                -ms-flex-align: center;
                align-items: center;
                cursor: pointer;
                margin-top: 52px;
                i {
                  width: 32px;
                  height: 39px;
                  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAnCAYAAABuf0pMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0Y1OTNBMDhGODg1MTFFOTg2Nzc5QzUyMEEzNDcxRTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0Y1OTNBMDlGODg1MTFFOTg2Nzc5QzUyMEEzNDcxRTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRjU5M0EwNkY4ODUxMUU5ODY3NzlDNTIwQTM0NzFFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRjU5M0EwN0Y4ODUxMUU5ODY3NzlDNTIwQTM0NzFFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmjGFQcAAAKESURBVHja7JhPSBRxFMd3Zi3Z3Ez8k9IhKDyYhJcMQsEWvKhgdPBSUFEXKQ9BByE6dNBE1IMXxYuIeeiQ/1BKOgSbUYduXfQU0QoWCSH9Mdxsp++Lt/DrOcP8Zvc3dvHBB5b3m33vzZv3fu83E3EcJ6LBCOjVvJaoBi/BMb9rdQ2eBZ/AGaG3QIHL9UkwqWPb+huFnlwFl8EgSIB6UAai4Dt4DxbBCVDH1/tLgLS2gC8g7fjLKIjr2NVxTIYeOsFlBTTmG0AhWGSDO/xc50HGw+kHcJ+dk/wEiXwC6FGMP1f0Wx4B3OX1K4ruIziaSwC1wvgaaAWdnA03WQJNYEroh3IJoN8xJxugxM2P7dEcFrgWMSfloM1tocDjD9Tbb7jPHQMBkL206516bESWIce+ks3ATdAOZsA4RzwAjoOtPH0c4BsaA0lwCnSD3+AeFcINUTCXeI//5piVWyAGVhXdCyrCiyLiZk7/uuFsr4FaUKPoGmyX4tjOjomQHvuO8vuHzc/in/kUkmOLfWVUpR35z7IfwH4A9l5tuV4dZvNWKdslDMmwr6gMQDosDDHbaRHAYVI+UhS/wJzPqM5VisEqWFZ0C+TkMbgAWsBT8ISzYPpRHOQb7ABdvCUPex3HaGq9MzwNrwc5klG1FhnOwKEg+wBNxK+GA1gPEgBl4A7Y1O1nH5nm+tI+E2blNB+hKsEDruSsDIHX3FZUsH2gWlmfALNceM9MvJx+FkV1Xqy/Euu3dezqzoIquYNBKsTBUxZZqclhFNb2bGwaWi5B2iYDoBQfEbq46Aq5dcdMBkDtmBIn2xUxQ1LiP29Nf6I5xy8V1A1dLusn+RvCJhj0+Hi1iz8CDAAa52CfOM2lSwAAAABJRU5ErkJggg==)
                    no-repeat 50%;
                  display: block;
                  margin-left: 34px;
                  margin-right: 23px;
                }
              }
            }
          }
        }
      }
    }
    .homebanner2 {
      background: #f7f8fb;
      .banner-light-wallet {
        max-width: 1200px;
        margin: 0 auto;
        h3 {
          font-size: 32px;
          color: #1b1f2c;
          line-height: 1;
          text-align: center;
          padding-top: 90px;
          margin: 0;
          padding-bottom: 27px;
        }
        h4 {
          font-size: 22px;
          color: #5f6167;
          line-height: 1;
          margin: 0;
          text-align: center;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
          .col {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            .banner-light-wallet-img1 {
              display: none;
            }
            .left-zone {
              padding-left: 32px;
              .title {
                font-size: 22px;
                color: #242121;
                line-height: 24px;
                padding-top: 206px;
                text-align: left;
                margin-bottom: 42px;
              }
              .content-ft {
                padding-left: 28px;
                font-size: 18px;
                color: #5f6167;
                line-height: 21px;
                position: relative;
                margin-bottom: 34px;
              }
              .content-ft ::before {
                content: "";
                display: block;
                width: 14px;
                height: 10px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAAXNSR0IArs4c6QAAAKlJREFUKBVjZCARBD3ol2T++5OVmRR9IE1/f/7a/4+B4R0TsRphmpiY/i/YoFoxnSn01VQeQpqRNa1XregAqWf6/eHz5sBbnXm4NGPTBNYI9GX8f4b/+dg049IE0sgIIkLvdsj9/suwn5GBceJ6tfJJIDF8mkDyYI0gBrJmRja21aDQAwUEzE8gNcgArhEkCNP8/z8jF1DTRFyakA2As0GaA253ZMIFcDAA7iRm6rAqciwAAAAASUVORK5CYII=)
                  no-repeat 50%;
                position: absolute;
                top: 5.5px;
                left: 0;
              }
            }
          }
          .banner-light-wallet-img-zone {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            img {
              padding-top: 170px;
              margin-left: auto;
              display: block;
              padding-bottom: 86px;
              margin-right: 10px;
            }
          }
        }
      }
    }
    .cold-wallet-all {
      max-width: 1230px;
      margin: 0 auto;
      .banner-cold-wallet {
        box-sizing: border-box;
        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
          .banner-light-wallet-img-zone {
            // flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            .banner-cold-wallet-img {
              padding-top: 115px;
              margin-left: -16px;
              padding-bottom: 110px;
            }
          }
          .col {
            flex-grow: 1;
            max-width: 100%;
            .banner-cold-wallet-imgh5 {
              display: none;
            }
            .left-zone {
              box-sizing: border-box;
              .title {
                font-size: 22px;
                color: #242121;
                line-height: 24px;
                padding-top: 155px;
                text-align: left;
                margin-bottom: 42px;
              }
              .content-ft {
                padding-left: 28px;
                font-size: 18px;
                color: #5f6167;
                line-height: 21px;
                position: relative;
                margin-bottom: 34px;
              }
              .content-ft::before {
                content: "";
                display: block;
                width: 14px;
                height: 10px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAAXNSR0IArs4c6QAAAKlJREFUKBVjZCARBD3ol2T++5OVmRR9IE1/f/7a/4+B4R0TsRphmpiY/i/YoFoxnSn01VQeQpqRNa1XregAqWf6/eHz5sBbnXm4NGPTBNYI9GX8f4b/+dg049IE0sgIIkLvdsj9/suwn5GBceJ6tfJJIDF8mkDyYI0gBrJmRja21aDQAwUEzE8gNcgArhEkCNP8/z8jF1DTRFyakA2As0GaA253ZMIFcDAA7iRm6rAqciwAAAAASUVORK5CYII=)
                  no-repeat 50%;
                position: absolute;
                top: 5.5px;
                left: 0;
              }
            }
          }
        }
      }
    }
    .micro-account-all {
      background: #f7f8fb;
      .banner-micro-account {
        max-width: 1200px;
        margin: 0 auto;
        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
          .col {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            .banner-micro-account-img2 {
              display: none;
            }
            .left-zone {
              padding-left: 32px;
              .title {
                font-size: 22px;
                color: #242121;
                line-height: 24px;
                padding-top: 140px;
                text-align: left;
                margin-bottom: 42px;
              }
              .content-ft {
                padding-left: 28px;
                font-size: 18px;
                color: #5f6167;
                line-height: 21px;
                position: relative;
                margin-bottom: 34px;
              }
              .content-ft ::before {
                content: "";
                display: block;
                width: 14px;
                height: 10px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAAXNSR0IArs4c6QAAAKlJREFUKBVjZCARBD3ol2T++5OVmRR9IE1/f/7a/4+B4R0TsRphmpiY/i/YoFoxnSn01VQeQpqRNa1XregAqWf6/eHz5sBbnXm4NGPTBNYI9GX8f4b/+dg049IE0sgIIkLvdsj9/suwn5GBceJ6tfJJIDF8mkDyYI0gBrJmRja21aDQAwUEzE8gNcgArhEkCNP8/z8jF1DTRFyakA2As0GaA253ZMIFcDAA7iRm6rAqciwAAAAASUVORK5CYII=)
                  no-repeat 50%;
                position: absolute;
                top: 5.5px;
                left: 0;
              }
              .more {
                display: block;
                width: 119px;
                height: 40px;
                background-color: #1abb9a;
                border-radius: 20px;
                color: #fbfbfb;
                text-align: center;
                line-height: 40px;
                margin-left: 28px;
              }
            }
          }
          .banner-micro-account-img2-zone {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            img {
              padding-top: 130px;
              margin-right: 20px;
              margin-left: auto;
              display: block;
              padding-bottom: 100px;
            }
          }
        }
      }
    }
    .banner5 {
      max-width: 1200px;
      padding: 0 20px;
      margin: 0 auto;
      padding-bottom: 149px;
      h3 {
        text-align: center;
        font-size: 32px;
        color: #000;
        line-height: 1;
        padding-top: 89px;
        margin-bottom: 0;
      }
      p {
        text-align: center;
        font-size: 22px;
        line-height: 1;
        color: #5f6167;
        padding-top: 28px;
        margin-bottom: 35px;
      }
      .icon-zone {
        width: 1080px;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin: 0 auto;
        div {
          width: 135px;
          img {
            display: block;
            margin: 0 auto;
            padding-top: 40px;
            width: 60px;
          }
        }
      }
      .icon-zone1 {
        width: 1200px;
        div {
          width: 129px;
        }
      }
    }
    .added-service-zone {
      background-color: #f7f8fb;
      font-size: 32px;
      line-height: 1;
      text-align: center;
      color: #1b1f2c;
      h3 {
        padding-top: 91px;
        margin-bottom: 0;
        padding-bottom: 100px;
      }
      .content_zone {
        display: flex;
        width: 1047px;
        margin: 0 auto;
        padding-bottom: 100px;
        .card_zone {
          width: 317px;
          height: 373px;
          cursor: pointer;
          text-align: center;
          color: #5f6167;
          font-size: 18px;
          transition: all 1s;
          img {
            padding-top: 90px;
            padding-bottom: 76px;
            transition: all 1s;
          }
          p {
            line-height: 1.8;
          }
        }
        .card_zone:hover {
          background-color: #fff;
          font-size: 26px;
          line-height: 1;
          text-align: center;
          color: #1b1f2c;
          box-shadow: 0 0 14px 2px #666;
          img {
            padding-top: 100px;
            padding-bottom: 50px;
            transition: all 1s;
          }
        }
        .card_zone2 {
          width: 317px;
          height: 373px;
          margin: 0 48px;
          cursor: pointer;
          text-align: center;
          color: #5f6167;
          font-size: 18px;
          transition: all 1s;
          img {
            padding-top: 90px;
            padding-bottom: 76px;
            transition: all 1s;
          }
        }
        .card_zone2:hover {
          background-color: #fff;
          font-size: 26px;
          line-height: 1;
          text-align: center;
          color: #1b1f2c;
          box-shadow: 0 0 14px 2px #666;
          img {
            padding-top: 100px;
            padding-bottom: 60px;
            transition: all 1s;
          }
        }
      }
    }
    .color {
      color: #3d7df7;
    }
  }
}
@media only screen and (min-width: 260px) and (max-width: 768px) {
  .nav {
    // max-width: 375px;
    width: 100%;
    .header-top {
      display: none;
    }
    .footerh5 {
      display: block;
      // background: #0f1319;
      background: #409eff;
      padding-top: 48px;
      .footer-box {
        padding-bottom: 26px;
        padding: 0 10px;
        position: relative;

        .footer-list {
          // width: 100%;
          float: none;
          padding: 0 5px;
          padding-top: 5px;
          overflow: hidden;
          .footer-title {
            padding-bottom: 16px;
            color: #ffffff;
            font-size: 16px;
          }
          .footer-content {
            font-size: 13px;
            // color: #c3c6c7;
            color: #ffffff;
            line-height: 30px;
            padding-bottom: 7px;
            ul {
              list-style: none;
              li {
                a {
                  width: 80%;
                  line-height: 24px;
                  // color: #c3c6c7;
                  color: #ffffff;
                }
              }
            }
            a {
              width: 80%;
              line-height: 24px;
              // color: #c3c6c7;
              color: #ffffff;
            }
          }
          .footer-address {
            font-size: 13px;
            // color: #c3c6c7;
            color: #ffffff;
            padding-bottom: 15px;
            cursor: pointer;
          }
        }
        .footer-list:nth-child(2) {
          margin: 30px 0;
        }
        .footer-list:last-child {
          text-align: left;
          .contact-img {
            position: absolute;
            top: 0;
            left: 69%;
            right: 5%;
            img {
              max-width: 100%;
            }
            div {
              font-size: 12px;
              // color: #c3c6c7;
              color: #ffffff;
            }
          }
        }
      }
    }
    .header {
      background: #fff;
      // width: 375px;
      width: 100vw;
      position: fixed;
      // float: left;
      z-index: 999999;
      top: 0;
      border-bottom: 1px solid #d3d3d3;
      .header-div {
        height: 50px;
        display: flex;
        align-items: center;
        // justify-content: space-between;
        color: #000;
        .header-right {
          width: 50%;
          text-align: right;
          padding-right: 30px;
          img {
            width: 25px;
            height: 20px;
          }
        }
        .header-left {
          display: flex;
          align-items: center;
          width: 50%;
          padding-left: 15px;
          img {
            width: 50px;
          }
        }
      }
      .navs {
        background-color: #fff;
        height: 160px;
        p {
          padding: 12px 15px;
          font-size: 16px;
          color: #1abb9a;
        }
      }
    }
    .footer {
      display: none;
    }
    .homebanner1 {
      display: none;
    }
    .homebanner1h5 {
      // width: 100%;
      display: block;
      padding: 44px 15px;
      padding-bottom: 65px;
      h3 {
        width: 100%;
        font-size: 17px;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #1b1f2c;
        padding-top: 35px;
        font-weight: 700;
        font-family: inherit;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        font-stretch: normal;
        line-height: 26px;
        letter-spacing: 2px;
        color: #5f6167;
        margin-bottom: 16px;
      }
      .img_zone {
        display: -ms-flexbox;
        display: flex;
        .homebanner1-img-zone {
          // width: 50%;
          flex: 1;
          text-align: right;
          .homebanner1-img {
            width: 90%;
            padding: 15px 6px;
            border-radius: 5px;
            background-color: #1abb9a;
          }
        }
      }
      .ft_zone {
        margin-left: 20px;
        flex: 1;
        text-align: center;
        position: relative;
        .ft_zone_btn {
          // position: absolute;
          // top: 50%;
          // margin-top: -67.5px;
          padding: 60px 10px;
          height: 100%;
          .ios-btn {
            margin: 0 auto;
            // width: 126px;
            width: 100%;
            // height: 30px;
            height: 12%;
            background-color: #1abb9a;
            border-radius: 30px;
            //  border-radius: 3%;
            display: flex;
            color: #fff;
            position: relative;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 3px;
            i {
              width: 15.5px;
              height: 19.5px;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAnCAYAAAD3h5P5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0Y1OTNBMDRGODg1MTFFOTg2Nzc5QzUyMEEzNDcxRTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0Y1OTNBMDVGODg1MTFFOTg2Nzc5QzUyMEEzNDcxRTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRjU5M0EwMkY4ODUxMUU5ODY3NzlDNTIwQTM0NzFFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRjU5M0EwM0Y4ODUxMUU5ODY3NzlDNTIwQTM0NzFFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pieq7UUAAAIoSURBVHjaxJdNKERRFMffzBCSSTIxK0mxGBQRCkuirCxFsiVZWflOlkq+Ss0WhZIsfZQSG0TJwldKEQvFApHrf3Jvva43b67ee9e/fs286Z33n3vfueee62OMGS4rAhpAJhgDzzHvJHOXyAbT4I396BYE7WISXBptAVjhoxa6sB015HfBOBXMS8akvbiRDqfaB+bYb72D3HjxTs2LmbX6VOKdTnuzxW9rYFQl2Kl5hXS9DtpVg52ah/nnLmgFTeBJNdhnU2Qoi/NBHr++AufgxXRPOQiAfX5NS7eUZ346/yMn4Ay8qmR7MugBh+DLlET0/RSMgRqQaoopBAPg2CL5KG4PtIFEu2yPgB2mJnrgKthn6toGBVbmZeCeea8HUG9eahlgAWQZ3isECs3vfJHpU6d52qs0Gg/JFa7N0KNDufL5+cavQ1PgUzYPaTB+AFtW5fVTgzlVxxsvmgkVvXnVyago8J/mVLzS/ss8l+92v8wDGswTQYuV+aOm0XeAatn8SGPSRc2bl99q8Xso6ow2Qa1oo6jlOdb07oXewQSN/BRsGHqVBErEUotqNqeS3ivMV8GBRvMletXC/AMMazQfpyZK7l7XNXQzs8JPPjSE+fSHPRrxJSWaOHjItf0OdHlc5V7inc/7PZjubtnH7qw2GWMWGD+NbvDuJAUUgTpQFuNZI2DwLwdFg5886Q/kgGtuuMwroqwg3zYbQSXvDem+GbBj9fBvAQYAazulnkZAwTUAAAAASUVORK5CYII=)
                no-repeat 50%;
              background-size: 100% 100%;
              display: block;
              margin-left: 14.5px;
              margin-right: 17px;
            }
            span {
              font-size: 14px;
              display: block;
            }
          }
          .android-btn {
            margin: 0 auto;
            margin-top: 60px;
            // width: 126px;
            width: 100%;
            // height: 30px;
            height: 12%;
            background-color: #1abb9a;
            border-radius: 30px;
            //  border-radius: 3%;
            display: flex;
            color: #fff;
            position: relative;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            padding: 3px;
            i {
              width: 16px;
              height: 19.5px;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAnCAYAAABuf0pMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0Y1OTNBMDhGODg1MTFFOTg2Nzc5QzUyMEEzNDcxRTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0Y1OTNBMDlGODg1MTFFOTg2Nzc5QzUyMEEzNDcxRTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRjU5M0EwNkY4ODUxMUU5ODY3NzlDNTIwQTM0NzFFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRjU5M0EwN0Y4ODUxMUU5ODY3NzlDNTIwQTM0NzFFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmjGFQcAAAKESURBVHja7JhPSBRxFMd3Zi3Z3Ez8k9IhKDyYhJcMQsEWvKhgdPBSUFEXKQ9BByE6dNBE1IMXxYuIeeiQ/1BKOgSbUYduXfQU0QoWCSH9Mdxsp++Lt/DrOcP8Zvc3dvHBB5b3m33vzZv3fu83E3EcJ6LBCOjVvJaoBi/BMb9rdQ2eBZ/AGaG3QIHL9UkwqWPb+huFnlwFl8EgSIB6UAai4Dt4DxbBCVDH1/tLgLS2gC8g7fjLKIjr2NVxTIYeOsFlBTTmG0AhWGSDO/xc50HGw+kHcJ+dk/wEiXwC6FGMP1f0Wx4B3OX1K4ruIziaSwC1wvgaaAWdnA03WQJNYEroh3IJoN8xJxugxM2P7dEcFrgWMSfloM1tocDjD9Tbb7jPHQMBkL206516bESWIce+ks3ATdAOZsA4RzwAjoOtPH0c4BsaA0lwCnSD3+AeFcINUTCXeI//5piVWyAGVhXdCyrCiyLiZk7/uuFsr4FaUKPoGmyX4tjOjomQHvuO8vuHzc/in/kUkmOLfWVUpR35z7IfwH4A9l5tuV4dZvNWKdslDMmwr6gMQDosDDHbaRHAYVI+UhS/wJzPqM5VisEqWFZ0C+TkMbgAWsBT8ISzYPpRHOQb7ABdvCUPex3HaGq9MzwNrwc5klG1FhnOwKEg+wBNxK+GA1gPEgBl4A7Y1O1nH5nm+tI+E2blNB+hKsEDruSsDIHX3FZUsH2gWlmfALNceM9MvJx+FkV1Xqy/Euu3dezqzoIquYNBKsTBUxZZqclhFNb2bGwaWi5B2iYDoBQfEbq46Aq5dcdMBkDtmBIn2xUxQ1LiP29Nf6I5xy8V1A1dLusn+RvCJhj0+Hi1iz8CDAAa52CfOM2lSwAAAABJRU5ErkJggg==)
                no-repeat 50%;
              background-size: 100%;
              display: block;
              margin-left: 11.5px;
              margin-right: 5px;
            }
            span {
              font-size: 14px;
              display: block;
            }
          }
        }
      }
    }
    .homebanner2 {
      width: 100%;
      background: #f7f8fb;
      .banner-light-wallet {
        padding-bottom: 50px;
        text-align: center;
        h3 {
          padding-top: 50px;
          padding-bottom: 10px;
          font-size: 19px;
          color: #1b1f2c;
          font-weight: 700;
        }
        h4 {
          font-size: 15px;
          padding-top: 0;
          width: 303px;
          margin: 0 auto;
          display: block;
          line-height: 24px;
        }
        .row {
          margin: 0 !important;
          .col {
            flex-grow: 1;
            position: relative;
            // width: 100%;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
            .banner-light-wallet-img1 {
              display: block;
              margin: 0;
              width: 50%;
              padding: 15px 0;
              margin: 0 auto;
              padding-top: 46px;
            }
            .left-zone {
              padding-left: 5px;
              text-align: left;
              .title {
                padding-top: 26px;
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 29px;
                width: 100%;
              }
              .content-ft {
                margin-bottom: 24px;
                font-size: 16px;
              }
              .content-ft ::before {
                content: "";
                display: block;
                width: 14px;
                height: 10px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAAXNSR0IArs4c6QAAAKlJREFUKBVjZCARBD3ol2T++5OVmRR9IE1/f/7a/4+B4R0TsRphmpiY/i/YoFoxnSn01VQeQpqRNa1XregAqWf6/eHz5sBbnXm4NGPTBNYI9GX8f4b/+dg049IE0sgIIkLvdsj9/suwn5GBceJ6tfJJIDF8mkDyYI0gBrJmRja21aDQAwUEzE8gNcgArhEkCNP8/z8jF1DTRFyakA2As0GaA253ZMIFcDAA7iRm6rAqciwAAAAASUVORK5CYII=)
                  no-repeat 50%;
                position: absolute;
                top: 5.5px;
                left: 0;
              }
            }
          }
          .banner-light-wallet-img-zone {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            .banner-light-wallet-img {
              display: none;
            }
            img {
              padding-top: 170px;
              margin-left: auto;
              display: block;
              padding-bottom: 86px;
              margin-right: 10px;
            }
          }
        }
      }
    }
    .cold-wallet-all {
      padding-bottom: 65px;
      .banner-cold-wallet {
        box-sizing: border-box;
        .row {
          margin: 0 !important;
          display: flex;
          flex-wrap: wrap;
          .banner-light-wallet-img-zone {
            display: none;
            .banner-cold-wallet-img {
              padding-top: 115px;
              margin-left: -16px;
              padding-bottom: 110px;
            }
          }
          .col {
            flex-grow: 1;
            max-width: 100%;
            flex-basis: 0;
            .banner-cold-wallet-imgh5 {
              width: 70%;
              margin: 0 auto;
              display: block;
              padding-top: 60px;
              padding-bottom: 54px;
            }
            .left-zone {
              padding-left: 5px;
              .title {
                padding-top: 0;
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 29px;
                color: #242121;
                line-height: 24px;
                text-align: left;
              }
              .content-ft {
                padding-left: 28px;
                font-size: 16px;
                color: #5f6167;
                line-height: 21px;
                position: relative;
                margin-bottom: 24px;
              }
              .content-ft::before {
                content: "";
                display: block;
                width: 14px;
                height: 10px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAAXNSR0IArs4c6QAAAKlJREFUKBVjZCARBD3ol2T++5OVmRR9IE1/f/7a/4+B4R0TsRphmpiY/i/YoFoxnSn01VQeQpqRNa1XregAqWf6/eHz5sBbnXm4NGPTBNYI9GX8f4b/+dg049IE0sgIIkLvdsj9/suwn5GBceJ6tfJJIDF8mkDyYI0gBrJmRja21aDQAwUEzE8gNcgArhEkCNP8/z8jF1DTRFyakA2As0GaA253ZMIFcDAA7iRm6rAqciwAAAAASUVORK5CYII=)
                  no-repeat 50%;
                position: absolute;
                top: 5.5px;
                left: 0;
              }
            }
          }
        }
      }
    }
    .micro-account-all {
      background: #f7f8fb;
      .banner-micro-account {
        padding-bottom: 66px;
        .row {
          margin: 0 !important;
          .col {
            flex-basis: 0;
            flex-grow: 1;
            // max-width: 100%;
            position: relative;
            // width: 100%;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
            .banner-micro-account-img2 {
              display: block;
              width: 60%;
              margin: 0 auto;
              padding: 53px 0;
            }
            .left-zone {
              padding-left: 5px;
              .title {
                padding-top: 0;
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 29px;
                color: #242121;
                line-height: 24px;
                text-align: left;
              }
              .content-ft {
                padding-left: 28px;
                color: #5f6167;
                line-height: 21px;
                position: relative;
                font-size: 16px;
                margin-bottom: 24px;
              }
              .content-ft ::before {
                content: "";
                display: block;
                width: 14px;
                height: 10px;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAAXNSR0IArs4c6QAAAKlJREFUKBVjZCARBD3ol2T++5OVmRR9IE1/f/7a/4+B4R0TsRphmpiY/i/YoFoxnSn01VQeQpqRNa1XregAqWf6/eHz5sBbnXm4NGPTBNYI9GX8f4b/+dg049IE0sgIIkLvdsj9/suwn5GBceJ6tfJJIDF8mkDyYI0gBrJmRja21aDQAwUEzE8gNcgArhEkCNP8/z8jF1DTRFyakA2As0GaA253ZMIFcDAA7iRm6rAqciwAAAAASUVORK5CYII=)
                  no-repeat 50%;
                position: absolute;
                top: 5.5px;
                left: 0;
              }
              .more {
                display: block;
                width: 119px;
                height: 40px;
                background-color: #1abb9a;
                border-radius: 20px;
                color: #fbfbfb;
                text-align: center;
                line-height: 40px;
                margin-left: 28px;
              }
            }
          }
          .banner-micro-account-img2-zone {
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
            .banner-micro-account-img {
              display: none;
            }
            img {
              padding-top: 130px;
              margin-right: 20px;
              margin-left: auto;
              display: block;
              padding-bottom: 100px;
            }
          }
        }
      }
    }
    .banner5 {
      max-width: 1080px;
      padding: 0 12px;
      margin: 0 auto;
      padding-bottom: 40px;
      h3 {
        text-align: center;
        font-size: 19px;
        color: #000;
        line-height: 31px;
        padding-top: 52px;
        margin-bottom: 0;
        font-weight: 700;
      }
      p {
        text-align: center;
        font-size: 15px;
        line-height: 21px;
        color: gray;
        padding-top: 10px;
        margin-bottom: 10px;
      }
      .icon-zone {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        div {
          width: 25%;
          img {
            display: block;
            margin: 0 auto;
            padding-top: 30px;
            width: 40px;
          }
        }
      }
      .icon-zone1 {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        box-sizing: border-box;
        div {
          width: 25%;
        }
      }
    }
    .added-service-zone {
      padding: 0 16px;
      background-color: #f7f8fb;
      line-height: 1;
      text-align: center;
      color: #1b1f2c;
      h3 {
        padding-top: 52px;
        margin-bottom: 0;
        padding-bottom: 43px;
        color: #1b1f2c;
        font-size: 19px;
        font-weight: 700;
      }
      .content_zone {
        display: block;
        width: 100%;
        margin: 0 auto;
        padding-bottom: 50px;
        .card_zone {
          box-shadow: 7px 7px 13px 0 rgba(0, 0, 0, 0.1);
          height: 91px;
          background: #fff;
          width: 100%;
          display: flex;
          align-items: center;
          img {
            width: 39.5px;
            height: 43.5px;
            padding: 0;
            margin-left: 23.5px;
            margin-right: 39px;
          }
          p {
            margin: 0;
            text-align: left;
          }
        }
        .card_zone2 {
          box-shadow: 7px 7px 13px 0 rgba(0, 0, 0, 0.1);
          height: 91px;
          background: #fff;
          width: 100%;
          display: flex;
          align-items: center;
          margin: 20px 0;
          img {
            width: 39.5px;
            height: 43.5px;
            padding: 0;
            margin-left: 23.5px;
            margin-right: 39px;
          }
          p {
            margin: 0;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>