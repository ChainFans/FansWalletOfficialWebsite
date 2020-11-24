<template>
  <div class="costom">
    <div class="nav-header">
      <div class="header-div">
        <div class="header-left">
          <img src="../../assets/mlqb/logo (2).png" alt />
          <p>FansWallet</p>
        </div>
        <div class="header-right" @click="showPopup">
          <img src="../../assets/mlqb/download.png" alt />
        </div>
      </div>
      <div v-show="show" class="navs">
        <p @click="gocustom(1)">首页</p>
        <p @click="gocustom(2)">定制钱包</p>
         <p @click="gocustom(3)">官网</p>
      </div>
    </div>
    <div class="bitwind-contentA">
      <div class="waper">
        <h2 class="bitwind-contentA-title">
          <font>\</font>&nbsp;FansWallet解决方案&nbsp;
          <font>/</font>
        </h2>
        <div
          class="bitwind-contentA-subtitle"
        >FansWallet解决方案，围绕HD钱包、云端钱包、EOS钱包核心产品，打造资产托管、综合支付、全功能钱包三大解决方案，助您快速搭建自己的钱包。</div>
        <div class="hicoin-contentA-image">
          <div class="hicoin-contentA-image-bg">
            <img src="../../assets/mlqb/introduce_illustration-pur.png" alt />
          </div>
          <div class="hicoin-contentA-image-txt">
            <span>资产托管</span>
            <span>综合支付</span>
            <span>全功能钱包</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bitwind-contentB">
      <div class="waper">
        <ul class="clearfix">
          <li>
            <span class="contentB-head"></span>
            <span class="contentB-title">30+项安全技术保障</span>
            <span class="contentB-sub">无需担心钱包技术和安全问题</span>
          </li>
          <li>
            <span class="contentB-head"></span>
            <span class="contentB-title">覆盖多层次交易属性</span>
            <span class="contentB-sub">中心化钱包、去中心化钱包自由选择</span>
          </li>
          <li>
            <span class="contentB-head"></span>
            <span class="contentB-title">多级别风控预警</span>
            <span class="contentB-sub">全球监控以确保私钥安全</span>
          </li>
          <li>
            <span class="contentB-head"></span>
            <span class="contentB-title">灵活性高</span>
            <span class="contentB-sub">功能模块独立，多产品自由组合，多终端支持</span>
          </li>
          <li>
            <span class="contentB-head"></span>
            <span class="contentB-title">功能齐全</span>
            <span class="contentB-sub">多样化的运营功能，多种流量来源</span>
          </li>
          <li>
            <span class="contentB-head"></span>
            <span class="contentB-title">全天候客户系统支持</span>
            <span class="contentB-sub">为您提供7×24小时专业的运维服务</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="bitwind-contentC">
      <div class="waper">
        <h2 class="bitwind-contentC-title">
          <font>\</font>&nbsp;解决方案和功能&nbsp;
          <font>/</font>
        </h2>
        <div class="solutions-and-features">
          <div
            class="solutions-and-features-item hicoin-solutions-and-features-item"
            id="hicoin-assets"
          >
            <div class="solutions-and-features-item-top">
              <div class="solutions-and-features-item-top-left">
                <div class="solutions-and-features-item-top-left-top">资产托管解决方案</div>
                <div class="solutions-and-features-item-top-left-bottom">
                  <div class="s-a-f-i-t-l-b-left">功能</div>
                  <div class="s-a-f-i-t-l-b-right">
                    <ul>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>OTC场外交易系统开发</p>
                      </li>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>理财系统</p>
                      </li>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>数字货币余额宝</p>
                      </li>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>闪兑</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="solutions-and-features-item-top-right-common solutions-and-features-item-top-right"
              >
                <img src="../../assets/mlqb/function_assets_illustration.png" alt />
              </div>
              <div class="h5-solutions-and-features-item-top-left-top">资产托管解决方案</div>
            </div>
            <hr />
            <div class="solutions-and-features-item-bottom">
              <div class="s-a-f-i-b-left">优势</div>
              <div class="s-a-f-i-b-right">
                <ul class="s-a-f-i-b-right-list">
                  <li>
                    <img src="../../assets/mlqb/function_assets_advantage_ic_1.png" alt />
                    <p>双向交易、买卖自由、安全可靠</p>
                  </li>
                  <li>
                    <img src="../../assets/mlqb/function_assets_advantage_ic_2.png" alt />
                    <p>数字货币定期理财，满足用户投资需求</p>
                  </li>
                  <li>
                    <img src="../../assets/mlqb/function_assets_advantage_ic_3.png" alt />
                    <p>数字货币行业的余额宝，实现存币升息、收益日结、随取随用</p>
                  </li>
                  <li>
                    <img src="../../assets/mlqb/function_assets_advantage_ic_4.png" alt />
                    <p>自由设置各类交易对，实现快速交易</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="solutions-and-features-item hicoin-solutions-and-features-item"
            id="hicoin-payment"
          >
            <div class="solutions-and-features-item-top">
              <div class="solutions-and-features-item-top-left">
                <div class="solutions-and-features-item-top-left-top">综合支付解决方案</div>
                <div class="solutions-and-features-item-top-left-bottom">
                  <div class="s-a-f-i-t-l-b-left">功能</div>
                  <div class="s-a-f-i-t-l-b-right">
                    <ul>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>游戏入金支付</p>
                      </li>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>线下二维码支付</p>
                      </li>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>在线商店支付</p>
                      </li>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>数字货币支付OPEN API</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="solutions-and-features-item-top-right-common2 solutions-and-features-item-top-right"
              >
                <img src="../../assets/mlqb/function_payment_illustration2.png" alt class="img2" />
              </div>
              <div class="h5-solutions-and-features-item-top-left-top">综合支付解决方案</div>
            </div>
            <hr />
            <div class="solutions-and-features-item-bottom">
              <div class="s-a-f-i-b-left">优势</div>
              <div class="s-a-f-i-b-right">
                <ul class="s-a-f-i-b-right-list">
                  <li>
                    <img src="../../assets/mlqb/function_payment_advantage_ic_1.png" alt />
                    <p>打通游戏生态，可用数字资产抵扣游戏中的收益和消费</p>
                  </li>
                  <li>
                    <img src="../../assets/mlqb/function_payment_advantage_ic_2.png" alt />
                    <p>支持线下实体店扫一扫支付数字货币</p>
                  </li>
                  <li>
                    <img src="../../assets/mlqb/function_payment_advantage_ic_3.png" alt />
                    <p>数字货币版的“淘宝”，可使用数字货币在线购物</p>
                  </li>
                  <li>
                    <img src="../../assets/mlqb/function_payment_advantage_ic_4.png" alt />
                    <p>提供第三方支付接口，设置赏罚机制提高商家诚信度，保证交易可靠</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="solutions-and-features-item hicoin-solutions-and-features-item"
            id="hicoin-wallet"
          >
            <div class="solutions-and-features-item-top">
              <div class="solutions-and-features-item-top-left">
                <div class="solutions-and-features-item-top-left-top">全功能钱包解决方案</div>
                <div class="solutions-and-features-item-top-left-bottom">
                  <div class="s-a-f-i-t-l-b-left">功能</div>
                  <div class="s-a-f-i-t-l-b-right">
                    <ul>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>任务、挖矿、经纪人、红包系统</p>
                      </li>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>糖果激励政策</p>
                      </li>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>锁仓系统</p>
                      </li>
                      <li>
                        <div>
                          <div class="arrow-right"></div>
                        </div>
                        <p>数字货币支付OPEN API</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="solutions-and-features-item-top-right-common solutions-and-features-item-top-right"
              >
                <img src="../../assets/mlqb/function_wallet_illustration3.png" alt />
              </div>
              <div class="h5-solutions-and-features-item-top-left-top">全功能钱包解决方案</div>
            </div>
            <hr />
            <div class="solutions-and-features-item-bottom">
              <div class="s-a-f-i-b-left">优势</div>
              <div class="s-a-f-i-b-right">
                <ul class="s-a-f-i-b-right-list">
                  <li>
                    <img src="../../assets/mlqb/function_wallet_advantage_ic_1.png" alt />
                    <p>后台可配置各种系统和推广活动，自由灵活</p>
                  </li>
                  <li>
                    <img src="../../assets/mlqb/function_wallet_advantage_ic_2.png" alt />
                    <p>后台支持发布锁仓任务、设置解锁规则</p>
                  </li>
                  <li>
                    <img src="../../assets/mlqb/function_wallet_advantage_ic_3.png" alt />
                    <p>强大的经纪人系统，可通过裂变的方式提升用户流量</p>
                  </li>
                  <li>
                    <img src="../../assets/mlqb/function_wallet_advantage_ic_4.png" alt />
                    <p>用户可通过参与不同类型的活动获得红包/糖果奖励</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bitwind-contentF">
      <div class="waper">
        <h2 class="bitwind-contentF-title">
          <font>\</font>&nbsp;选择适合您的钱包解决方案&nbsp;
          <font>/</font>
        </h2>
        <ul>
          <li>
            <img src="../../assets/mlqb/solution_assets_ic.png" alt />
            <div>
              <span>资产管理的解决方案</span>
              <p>适用于交易所、量化/基金、OTC交易方、项目方等场景下，使用OTC场外交易、理财、余额宝、闪兑等形式进行多链协同托管或者全托管。</p>
            </div>
          </li>
          <li>
            <img src="../../assets/mlqb/solution_payment_ic.png" alt />
            <div>
              <span>综合支付解决方案</span>
              <p>适用于游戏入金、在线商店、实体线下等货币支付场景，打通与其他产品的用户账户体系。</p>
            </div>
          </li>
          <li>
            <img src="../../assets/mlqb/solution_wallet_ic.png" alt />
            <div>
              <span>全功能钱包解决方案</span>
              <p>适用于企业促销、用户裂变、加盟代理、合作账期、员工激励等场景。通过不同体系和激励政策实现Token赋能实体经济。</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bitwind-contentG hicoin-contentG">
      <div class="waper">
        <h2 class="bitwind-contentG-title hicoin-contentG-title">
          <font>\</font>&nbsp;完善的风控安全体系&nbsp;
          <font>/</font>
        </h2>
        <div>
          <ul>
            <li>
              <span>风控100%全覆盖</span>
              <p>全方位风险管理，三重财务对账，钱包资金安全实时监控，严重报警主动干预。资产流转智能监控异常报警，提现阻断，DDos防御、流量清洗等30+项防御机制。</p>
            </li>
            <li>
              <span>行为态势感知</span>
              <p>对用户行为进行大数据分析，从用户、管理员、资产、服务器多维度无死角监测，做到特殊用户打标，风险及时发现威胁，主动防御高危行为，系统攻击分析和主动拦截。</p>
            </li>
          </ul>
          <!-- <div class="img-box">
            <img src="../../assets/mlqb/6_image.png" alt />
          </div>-->
          <ul>
            <li>
              <span>智能合约/代码审计</span>
              <p>由第三方机构出具专业的审计报告，采用形式化验证技术，自动扫描代码安全性；数十项安全检测项目，排查安全隐患，避免黑客攻击，保证智能合约安全性。</p>
            </li>
            <li>
              <span>职务作恶防控</span>
              <p>高级别操作权限隔离，高危操作多重确认。异常登录审核、尝试越权操作、服务端高频访问、前序行为异常等管理员行为自查。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bitwind-contentH exchange-contentJ">
      <div class="waper">
        <h2 class="bitwind-contentH-title exchange-contentJ-title">
          <font>\</font>&nbsp;如何接入FansWallet&nbsp;
          <font>/</font>
        </h2>
        <div>
          <div>
            <ul class="h5-access-process">
              <li>
                <div class="access-ic">1</div>
                <span>确认部署</span>
                <div class="vertical-line"></div>
                <div class="arrow-down"></div>
              </li>
              <li>
                <div class="access-ic">2</div>
                <span>甲方提供部署资料</span>
                <div class="vertical-line"></div>
                <div class="arrow-down"></div>
              </li>
              <li>
                <div class="access-ic">3</div>
                <span>钱包部署</span>
                <div class="vertical-line"></div>
                <div class="arrow-down"></div>
              </li>
              <li>
                <div class="access-ic">4</div>
                <span>功能通过测试验证</span>
                <div class="vertical-line"></div>
                <div class="arrow-down"></div>
              </li>
              <li>
                <div class="access-ic">5</div>
                <span>交付甲方</span>
                <div class="vertical-line"></div>
                <div class="arrow-down"></div>
              </li>
              <li>
                <div class="access-ic">6</div>
                <span>运营及运维服务</span>
              </li>
            </ul>
            <!-- <div class="bitwind-contentH-consulting">
              <div class="bitwind-contentH-consulting-btn j-talk">
                立即接入
                <span class="before-arrow">—</span>
                <span class="arrow"></span>
              </div>
            </div>-->
          </div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showPopup() {
      this.show = !this.show;
    },
    gocustom(val) {
      this.show = false;
      if (val == 1) {
        this.$router.push("/");
      }
      if (val == 2) {
        this.$router.push("customh5");
      }
      if (val == 3) {
        location.href="https://www.chainfans.io"
      }
    },
  },
};
</script>

<style  lang="less"  scoped>
.costom {
  text-align: center;
  background: #f7f8fb;
  .nav-header {
    background: #fff;
    // width: 375px;
    width: 100vw;
    position: fixed;
    z-index: 9999;
    top: 0;
    border-bottom: 1px solid #d3d3d3;
    .header-div {
      height: 50px;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      color: #000;
      position: relative;
      .header-left {
        text-align: left;
        width: 50%;
        padding-left: 15px;
        display: flex;
        align-items: center;
        img {
          width: 50px;
        }
      }
      .header-right {
        text-align: right;
        width: 50%;
        padding-right: 30px;
        // position: absolute;
        // right: 50px;
        img {
          width: 25px;
          height: 20px;
        }
      }
    }
    .navs {
      background-color: #fff;
      height: 160px;
      text-align: left;
      p {
        padding: 12px 15px;
        font-size: 16px;
        color: #1abb9a;
      }
    }
  }
  .bitwind-contentA {
    // background-color: #1d1c2a;
    background-color: #fff;
    padding: 65px 0px;
    height: 100%;
    .waper {
      overflow-x: hidden;
      padding: 0 10px;

      .bitwind-contentA-title {
        padding-top: 0;
        font-size: 21px;
        line-height: 32px;
        text-align: center;
        // color: #fffefe;
        // color: #323233;
        color: #3dac93;
        font {
          // color: #3dac93;
          color: #43a015;
        }
      }
      .bitwind-contentA-subtitle {
        padding: 20px 15px 0 15px;
        width: auto;
        font-size: 14px;
        line-height: 23px;
        // color: #dcd8d8;
        color: #323233;
        letter-spacing: 0;
        text-align: center;
      }
      .hicoin-contentA-image {
        margin-top: 72px;
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        // background-color: #4f5258;
        background-color: #3dac93;
        border-radius: 5px;
        .hicoin-contentA-image-bg {
          width: 100%;
          background: none;
          height: auto;
          // background-image: url("../../assets/mlqb/introduce_illustration-pur.png");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center 0;
          img {
            display: block;
            width: 100%;
          }
        }
        .hicoin-contentA-image-txt {
          margin-top: 16px;
          padding-bottom: 20px;
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          span {
            display: block;
            width: 176px;
            text-align: center;
            color: #f3f6f7;
            font-size: 14px;
            line-height: 1;
            font-weight: normal;
          }
        }
      }
    }
  }
  .bitwind-contentB {
    margin-top: 0;
    height: auto;
    // background: #1d1c2a;
    background: #f7f8fb;
    // padding-top: 80px;
    .waper {
      // width: 100%;
      overflow: hidden;
      padding: 0 10px;
      margin: 0 auto;
      .clearfix {
        width: 100%;
        padding-top: 8px;
        text-align: left;
        li {
          margin-bottom: 10px;
          width: 100%;
          float: left;
          // margin-right: 20px;
          height: 120px;
          // background: #282735;
          // background: #c8c9cc;
          background: #3dac93;
          position: relative;
          .contentB-head {
            display: inline-block;
            position: absolute;
            top: 36px;
            left: 31px;
            width: 4px;
            height: 47px;
            // background: #3dac93;
            background: #f3da2c;
          }
          .contentB-title {
            color: #e7eef1;
            // color: #323233;
            font-size: 16px;
            line-height: 22px;
            margin-top: 33px;
            margin-bottom: 5px;
            margin-left: 42px;
            display: block;
            width: auto;
          }
          .contentB-sub {
            display: block;
            width: auto;
            margin-left: 44px;
            margin-right: 42px;
            font-size: 14px;
            color: #d9dadc;
            // color: #323233;
            //  color: #3dac93;
            line-height: 30px;
          }
        }
      }
    }
  }
  .bitwind-contentC {
    margin-top: 0px;
    padding-bottom: 40px;
    height: auto;
    // background: #1d1c2a;
    background-color: #fff;
    padding-top: 40px;
    .waper {
      padding: 0 10px;
      width: 100%;
      box-sizing: border-box;
      margin: 0 auto;
      height: 100%;
      position: relative;
      overflow-x: hidden;
      .bitwind-contentC-title {
        padding-top: 60px;
        padding-bottom: 41px;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        // color: #fff;
        // color: #1d1c2a;
        color: #3dac93;
        font {
          color: #3dac93;
        }
      }
      .solutions-and-features {
        display: flex;
        flex-direction: column;
        .solutions-and-features-item {
          padding-bottom: 64px;
          width: 100%;
          height: auto;
          min-height: 520px;
          // background: #282735;
          background: #f7f8fb;
          .solutions-and-features-item-top {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column-reverse;
            justify-content: flex-start;
            flex-wrap: wrap;
            position: relative;
            .solutions-and-features-item-top-left {
              text-align: left;
              padding-top: 0px;
              display: flex;
              flex-direction: column;
              .solutions-and-features-item-top-left-top {
                display: none;
                font-size: 20px;
                font-weight: bold;
                color: #3dac93;
                line-height: 18px;
              }
            }
            .solutions-and-features-item-top-left-bottom {
              padding-top: 0;
              padding-left: 20px;
              padding-right: 20px;
              display: flex;
              flex-direction: column;
              .s-a-f-i-t-l-b-left {
                font-size: 16px;
                font-weight: bold;
                color: #3dac93;
                text-align: center;
                line-height: 24px;
                white-space: nowrap;
                padding-top: 30px;
                padding-bottom: 30px;
                padding-right: 0;
                text-align: left;
              }
              .s-a-f-i-t-l-b-right {
                width: auto;
                ul {
                  list-style: none;
                  li {
                    display: flex;
                    flex-direction: row;
                    margin-bottom: 10px;
                    div {
                      display: flex;
                      align-items: center;
                      height: 24px;
                      line-height: 24px;
                      .arrow-right {
                        width: 0;
                        height: 0;
                        border-top: 3px solid transparent;
                        border-bottom: 3px solid transparent;
                        border-left: 4px solid #3dac93;
                        display: inline-block;
                        padding-right: 15px;
                      }
                    }
                    p {
                      font-size: 16px;
                      // color: #f9f9f9;
                      color: #3dac93;
                      letter-spacing: 0;
                      line-height: 24px;
                    }
                  }
                }
              }
            }
            .solutions-and-features-item-top-right-common {
              margin: 0;
              // padding: 28px 0 0 0;
            }
            .h5-solutions-and-features-item-top-left-top {
              display: block;
              padding-top: 30px;
              // padding-left: 20px;
              padding-bottom: 40px;
              font-size: 20px;
              font-weight: bold;
              color: #3dac93;
              line-height: 18px;
            }
            .solutions-and-features-item-top-right-common2 {
              margin: 0;
              padding: 28px 30px 0 0;
            }
            .solutions-and-features-item-top-right {
              // width: 100%;
              // height: 100%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .solutions-and-features-item-bottom {
            display: flex;
            flex-direction: column;
            .s-a-f-i-b-left {
              padding-right: 31px;
              font-size: 16px;
              font-weight: bold;
              color: #3dac93;
              text-align: center;
              line-height: 24px;
              white-space: nowrap;
              padding-top: 20px;
              padding-left: 20px;
              text-align: left;
            }
            .s-a-f-i-b-right {
              display: flex;
              flex-direction: row;
              .s-a-f-i-b-right-list {
                display: flex;
                flex-wrap: wrap;
                align-items: flex-start;
                justify-content: space-between;
                padding-bottom: 40px;
                li {
                  padding-top: 44px;
                  padding-right: 20px;
                  padding-left: 20px;
                  display: flex;
                  align-items: flex-start;
                  img {
                    margin-right: 19px;
                    width: 30px;
                    height: 30px;
                  }
                  p {
                    flex: 1;
                    width: auto;
                    font-size: 14px;
                    // color: #ececec;
                    color: #3dac93;
                    letter-spacing: 1px;
                    text-align: left;
                    line-height: 1.8;
                  }
                }
              }
            }
          }
        }
        .hicoin-solutions-and-features-item {
        }
      }
    }
  }
  .bitwind-contentF {
    margin-top: 0;
    padding-bottom: 60px;
    height: auto;
    // background: #1d1c2a;
    background: #fff;
    .waper {
      box-sizing: border-box;
      overflow-x: hidden;
      margin: 0 auto;
      height: 100%;
      position: relative;
      margin: 0 auto;
      height: 100%;
      padding: 0 10px;
      .bitwind-contentF-title {
        padding-top: 40px;
        padding-bottom: 30px;
        font-size: 21px;
        line-height: 32px;
        text-align: center;
        // color: #fff;
        color: #3dac93;
        font {
          color: #3dac93;
        }
      }
      ul {
        display: flex;
        flex-direction: column;
        li {
          margin: 0 0 10px 0;
          min-height: 150px;
          height: auto;
          display: flex;
          flex-direction: row;
          // background: #282735;
          background: #e4e7ed;
          border-radius: 15px;
          img {
            padding: 20px 0 0 20px;
            width: 60px;
            height: 60px;
          }
          div {
            padding: 0 19px 27px 15px;
            text-align: left;
            span {
              display: block;
              padding-top: 20px;
              line-height: 22px;
              font-size: 16px;
              font-weight: bold;
              color: #2fac93;
              letter-spacing: 0;
            }
            p {
              padding-top: 8px;
              line-height: 18px;
              font-size: 14px;
              // color: #e1e3e4;
              color: #2fac93;
              letter-spacing: 0;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
  .bitwind-contentG {
    padding-bottom: 60px;
    // background: #1d1c2a;
    background: #f7f8fb;
    .waper {
      padding: 0 10px;
      margin: 0 auto;
      height: 100%;
      position: relative;
      // background-color: #fff;
      .bitwind-contentG-title {
        padding-top: 60px;
        padding-bottom: 40px;
        font-size: 21px;
        line-height: 32px;
        text-align: center;
        // color: #f3f6f7;
        color: #2fac83;
        font {
          color: #2fac83;
        }
      }
      div {
        //  background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        ul {
          // padding-top: 0px;
          display: flex;
          flex-direction: column;
          padding: 0 10px;
          li {
            padding: 18px 0;
            width: auto;
            text-align: left;
            background-color: #fff;
            border-radius: 15px;
            margin-bottom: 15px;
            span {
              display: inline-block;
              padding-right: 12px;
              padding-left: 100px;
              font-size: 16px;
              font-weight: bold;
              color: #2fac93;
              letter-spacing: 0;
              line-height: 22px;
            }
            p {
              padding-right: 12px;
              padding-left: 100px;
              padding-top: 16px;
              font-size: 14px;
              // color: #cecece;
              color: #3dac93;
              letter-spacing: 0;
              line-height: 22px;
            }
          }
          li::before {
            display: inline-block;
            position: absolute;
            margin-left: 12px;
            height: 70px;
            width: 70px;
            content: " ";
          }
          li:nth-child(1):before {
            background: url("../../assets/mlqb/security_risk_management_ic_1.png")
              no-repeat;
            background-size: 100% 100%;
          }
          li:nth-child(2):before {
            background: url("../../assets/mlqb/security_risk_management_ic_3.png")
              no-repeat;
            background-size: 100% 100%;
          }
          // li:nth-child(3):before {
          //   background: url("../../assets/mlqb/security_risk_management_ic_2.png")
          //     no-repeat;
          //   background-size: 100% 100%;
          // }
          // li:nth-child(4):before {
          //   background: url("../../assets/mlqb/security_risk_management_ic_4.png")
          //     no-repeat;
          //   background-size: 100% 100%;
          // }
        }
        ul:nth-child(2) {
          li:nth-child(1):before {
            background: url("../../assets/mlqb/security_risk_management_ic_2.png")
              no-repeat;
            background-size: 100% 100%;
          }
          li:nth-child(2):before {
            background: url("../../assets/mlqb/security_risk_management_ic_4.png")
              no-repeat;
            background-size: 100% 100%;
          }
        }
        .img-box {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          img {
            width: 532px;
            height: 519px;
          }
        }
      }
    }
  }
  .bitwind-contentH {
    padding-bottom: 72px;
    // background: #1d1c2a;
    background-color: #fff;
  }
  .exchange-contentJ {
    padding-bottom: 1px;
    .waper {
      padding: 0 10px;
      overflow-x: hidden;
      // width: 100%;
      margin: 0 auto;
      height: 100%;
      position: relative;
      .bitwind-contentH-title {
        padding-top: 48px;
        padding-bottom: 36px;
        font-size: 21px;
        line-height: 32px;
        text-align: center;
        // color: #ffffff;
        color: #3dac93;
      }
      div {
        margin-bottom: 0;
        .h5-access-process {
          display: block;
          padding: 24px 0;
          li {
            padding: 5px 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .access-ic {
              width: 50px;
              height: 50px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              // color: #ffffff;
              color: #3dac93;
              background-image: url("../../assets/mlqb/access_ic.png");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center 0;
            }
            .vertical-line {
              width: 1px;
              height: 25px;
              background: #c8ced0;
              hr {
                width: 100%;
                height: 1px;
                // background: #e1e3e4;
                color: #3dac93;
              }
            }
            .arrow-down {
              width: 0;
              height: 0;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-top: 5px solid #3dac93;
              display: inline-block;
            }
            span {
              line-height: 22px;
              font-size: 12px;
              // color: #d4d7d8;
              color: #3dac93;
              letter-spacing: 0;
              text-align: center;
              display: block;
              height: 44px;
            }
          }
        }
      }
    }
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
      text-align: left;
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
            width: 100%;
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
}
</style>