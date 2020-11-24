<template >
  <div class="nav" id="nav">
    <!-- 导航 -->
    <div class="nav-header">
      <div class="header-div">
        <div>tubiao</div>
        <div @click="showPopup">简体中文</div>
        <van-popup
          v-model="show"
          position="right"
          class="popup"
          :style="{width:'40%',height:'100%'}"
        >
          <div class="language">
            <span>语言</span>
            <span>简体中文</span>
            <span>English</span>
          </div>
        </van-popup>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="carousel">
      <div class="block">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" height="150px" width="100%" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 公告 -->
    <div class="bulletin">
      <div class="article">
        <van-notice-bar
          background="#000"
          color="#bfc5d7"
          left-icon="volume-o"
          text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
        >
          <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
            <van-swipe-item>系统维护中。。。</van-swipe-item>
            <van-swipe-item>最新交易行情。。</van-swipe-item>
          </van-swipe>
        </van-notice-bar>
      </div>
    </div>
    <!-- 交易对 -->
    <div class="trading-pair">
      <van-tabs
        v-model="activeName"
        @click="onClick"
        background="#121728"
        color="blue"
        title-inactive-colo="#eee"
        title-active-color="#ccc"
      >
        <van-tab title="全部" name="a"></van-tab>
        <van-tab title="USDT" name="b"></van-tab>
        <van-tab title="BTC" name="c"></van-tab>
        <div>
          <ul class="trading-title">
            <li style="text-align: left">币种</li>
            <li>价格</li>
            <li>涨幅榜</li>
          </ul>
          <ul class="tradinglist">
            <li>
              <div class="currency">
                <div class="currency-b">
                  <span class="bz">BTC</span>/USDT
                </div>
                <div class="desc-1">成交量：17600</div>
              </div>
              <div class="price">
                <div class="usdtvalue">10228.87</div>
                <div class="desc-1">≈70578.1 CNY</div>
              </div>
              <div class="increase">
                <span>+2.52%</span>
              </div>
            </li>
            <li>
              <div class="currency">
                <div class="currency-b">
                  <span class="bz">BTC</span>/USDT
                </div>
                <div class="desc-1">成交量：17600</div>
              </div>
              <div class="price">
                <div class="usdtvalue">10228.87</div>
                <div class="desc-1">≈70578.1 CNY</div>
              </div>
              <div class="increase">
                <span>+2.52%</span>
              </div>
            </li>.
            <li>
              <div class="currency">
                <div class="currency-b">
                  <span class="bz">BTC</span>/USDT
                </div>
                <div class="desc-1">成交量：17600</div>
              </div>
              <div class="price">
                <div class="usdtvalue">10228.87</div>
                <div class="desc-1">≈70578.1 CNY</div>
              </div>
              <div class="increase">
                <span>+2.52%</span>
              </div>
            </li>.
            <li>
              <div class="currency">
                <div class="currency-b">
                  <span class="bz">BTC</span>/USDT
                </div>
                <div class="desc-1">成交量：17600</div>
              </div>
              <div class="price">
                <div class="usdtvalue">10228.87</div>
                <div class="desc-1">≈70578.1 CNY</div>
              </div>
              <div class="increase">
                <span>+2.52%</span>
              </div>
            </li>.
            <li>
              <div class="currency">
                <div class="currency-b">
                  <span class="bz">BTC</span>/USDT
                </div>
                <div class="desc-1">成交量：17600</div>
              </div>
              <div class="price">
                <div class="usdtvalue">10228.87</div>
                <div class="desc-1">≈70578.1 CNY</div>
              </div>
              <div class="increase">
                <span>+2.52%</span>
              </div>
            </li>
            <li>
              <div class="currency">
                <div class="currency-b">
                  <span class="bz">BTC</span>/USDT
                </div>
                <div class="desc-1">成交量：17600</div>
              </div>
              <div class="price">
                <div class="usdtvalue">10228.87</div>
                <div class="desc-1">≈70578.1 CNY</div>
              </div>
              <div class="increase">
                <span>+2.52%</span>
              </div>
            </li>
          </ul>
        </div>
      </van-tabs>
    </div>
    <!-- 简介 -->
    <div class="Introduction">
      <div class="content">
        <div class="title">数字资产交易平台的弄潮儿</div>
        <div
          class="description"
        >GX数字资产交易所由区块链行业老兵组成，他们遍布交易所、媒体、公链等各行各业，GX数字资产交易所致力于为全球100多个国家和地区的用户提供安全、快捷、高效的数字资产交易服务。</div>
        <div class="desc">
          <ul>
            <li>
              <div class="desc-img">
                <img src="../../assets/home/all-round.png" alt />
              </div>
              <div class="desc-title">1、全方位服务</div>
              <div class="desc-content">汇集行业顶级资源，为B端C端客户提供交易、理财、孵化等多维服务。</div>
            </li>
            <li>
              <div class="desc-img">
                <img src="../../assets/home/Safety.png" alt />
              </div>
              <div class="desc-title">安全稳定</div>
              <div class="desc-content">多集群部署、分布式架构等技术、钱包实现冷热分离，为用户安全、快捷交易保驾护航。</div>
            </li>
            <li>
              <div class="desc-img">
                <img src="../../assets/home/Features.png" alt />
              </div>
              <div class="desc-title">标新立异</div>
              <div class="desc-content">即将推出GXlab，不断开拓数字货币行业新疆界，为用户带来新颖的交易体验。</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="placeholder-bottom"></div>
    <!-- 关于我们 -->
    <!-- <div class="about">
      <div class="about-title">
        <div>服务</div>
        <div>支付</div>
        <div>关于</div>
        <div>联系我们</div>
      </div>
    </div>-->
    <div class="download">
      <div class="download-left">Fans数字货币交易所</div>
      <div class="btn">官方APP下载</div>
    </div>
  </div>
</template>
<script>
// import { Toast } from 'vant';
export default {
  data() {
    return {
      value1: 0,
      option1: [
        { text: "简体中文", value: 0 },
        { text: "English", value: 1 },
      ],
      show: false,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
      activeName: "a",
    };
  },
  mounted () {
    
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    showPopup() {
      this.show = true;
    },
    onClick(name) {
      console.log(name);
      // Toast(title);
    },

  },
};
</script>
<style lang="less" scoped >
.nav {
  width: 375px;
  background: #000;
  .nav-header {
    background: #000;
    padding: 0 15px;
    .header-div {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
      /deep/ .van-popup {
        background-color: rgba(18, 23, 40, 0.95);
        .language {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          span {
            height: 50px;
            display: flex;
            align-items: center;
            text-align: center;
          }
        }
      }
    }
  }
  .carousel {
    .block {
      height: 150px;
    }
  }
  .bulletin {
    // background: #0a0f1e;
    overflow: hidden;
    text-align: center;
    .article {
      padding: 5px;
      /deep/ .van-notice-bar {
        height: 30px;
      }
      .notice-swipe {
        height: 40px;
        line-height: 40px;
      }
    }
  }
  .trading-pair {
    background-color: #121728;
    margin: 0 12px;
    border-radius: 3px;
    /deep/ .van-hairline--top-bottom::after,
    .van-hairline-unset--top-bottom::after {
      border-width: 0;
    }
    .trading-title {
      background-color: #161c30;
      display: flex;
      padding: 0 15px;
      li {
        width: 33.3%;
        font-size: 14px;
        padding: 5px 0;
        text-align: right;
      }
    }
    .tradinglist {
      padding: 0 15px;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 67px;
        border-bottom: 1px solid;
        .currency {
          width: 33.3%;
          .currency-b {
            text-align: left;
            font-weight: 500;
            color: #47506f;
            font-size: 12px;
            .bz {
              font-size: 16px;
              font-weight: 500;
              text-align: left;
              color: #dee2f0;
            }
          }
          .desc-1 {
            margin-top: 10px;
            font-size: 12px;
            font-weight: 400;
            text-align: left;
            color: #707996;
          }
        }
        .price {
          width: 33.3%;
          .usdtvalue {
            font-size: 18px;
            font-weight: 500;
            text-align: right;
            color: rgb(22, 168, 127);
          }
          .desc-1 {
            margin-top: 10px;
            font-size: 12px;
            font-weight: 400;
            text-align: right;
            color: #707996;
          }
        }
        .increase {
          width: 33.3%;
          text-align: right;
          span {
            display: inline-block;
            width: 86px;
            height: 32px;
            line-height: 32px;
            background: #16a87f;
            font-size: 16px;
            border-radius: 3px;
            font-weight: 500;
            text-align: center;
            color: #fff;
          }
        }
      }
    }
  }
  .Introduction {
    margin: 15px 12px;
    background-color: #121728;
    border-radius: 3px;
    .content {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        color: #fff;
        margin: 30px 0 15px;
      }
      .description {
        font-size: 12px;
        font-weight: 400;
        text-align: center;
        color: #707996;
        padding: 0 20px;
        margin-bottom: 25px;
        line-height: 18px;
      }
      .desc {
        ul {
          margin: 0 15px;
          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 8px;
            background: linear-gradient(#161f3a, #121728);
            margin-bottom: 20px;
            .desc-img {
              margin-top: 20px;
              img {
                width: 80px;
                height: 80px;
              }
            }
            .desc-title {
              margin-top: 20px;
              font-weight: 500;
              text-align: center;
              color: #dee2f0;
              font-size: 18px;
              margin-bottom: 10px;
            }
            .desc-content {
              font-size: 14px;
              font-weight: 400;
              text-align: center;
              color: #99a2be;
              margin-bottom: 20px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
  .placeholder-bottom {
    height: 100px;
  }
  .download {
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #1d2640;
    padding: 0 10px;
    .download-left {
      padding-left: 20px;
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      color: #fff;
    }

    .btn {
      width: 120px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: -webkit-linear-gradient(#4984f5, #1b57eb);
      background: linear-gradient(#4984f5, #1b57eb);
      border-radius: 3px;
      font-size: 14px;
      font-weight: 500;
      color: #fff;
    }
  }
}
</style>