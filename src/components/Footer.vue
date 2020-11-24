<template>
  <div class="about">
    <!-- <div class="about-title">
      <div class="about-logo" @click="gohome">
        <img src="../assets/logo.png" alt />
      </div>
      <div class="service">
        <ul>
          <li>服务</li>
          <li>支持</li>
          <li>关于</li>
          <li>联系我们</li>
        </ul>
        <ul>
          <li>新手教程</li>
          <li>提交工单</li>
          <li>风险提示</li>
          <li>联系我们</li>
        </ul>
        <ul>
          <li>API文档</li>
          <li>上币申请</li>
          <li>用户协议</li>
          <li>商务合作：service@gx.com</li>
        </ul>
        <ul>
          <li>费率说明</li>
          <li>常见问题</li>
          <li>法律声明</li>
          <li>60 PAYA LEBAR ROAD #08-55 PAYA LEBAR SQUARE SINGAPORE 409051</li>
        </ul>
      </div>
    </div>-->
    <!-- 联系我们 -->
    <div class="bottom_top_zone">
      <div class="bottom_content_zone">
        <div class="bottom_left">
          <p>
            <i class="icon1"></i>客服邮箱：business@chainfans.io
          </p>
          <p>
            <i class="icon2"></i>咨询热线：027-5976-2021
          </p>
          <p>
            <i class="icon3"></i>网址：www.chainfans.io
          </p>
          <!-- <p style="margin-top: 10px; padding-bottom: 69px;">
            <span class="span1">上币合作：</span>
            <button class="btn1">点击申请</button>
            <span class="span2">DApp接入：</span>
            <button class="btn1">点击申请</button>
            <span class="span3">其他合作：</span>
            <button class="btn1">点击申请</button>
          </p> -->
        </div>
        <div class="bottom_right">
          <div class="flex_bottom_right">
            <div class="qr_code_zone1">
              <p>微信公众号</p>
              <div class="qr_img1"></div>
            </div>
            <div class="qr_code_zone2">
              <p>客服微信</p>
              <div class="qr_img2"></div>
            </div>
          </div>
          <div class="bottom-img-zone">
            <a
              rel="noopener"
              href="https://weibo.com/p/1006066414521474/home?from=page_100606&amp;mod=TAB&amp;is_all=1#place"
              target="_blank"
              class
            >
              <i class="weibo-ico"></i>
            </a>
            <a rel="noopener" href="https://t.me/Byingofficial" target="_blank" class>
              <i class="feiji-ico"></i>
            </a>
            <a
              rel="noopener"
              href="https://www.facebook.com/-1980556595490056/?modal=admin_todo_tour"
              target="_blank"
              class
            >
              <i class="f-ico" style="margin-right: 47px;"></i>
            </a>
            <a rel="noopener" href="https://twitter.com/Bying_official" target="_blank" class>
              <i class="niao-ico" style="margin-right: 0px;"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gohome() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="less" scoped>
.about {
  padding: 10px 0;
  background: #131b2e;
  font-size: 12px;
  .about-title {
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #99a9bf;
    margin: 0 auto;
    padding: 10px 0;
    .about-logo {
      margin-right: 20px;
      img {
        width: 100px;
      }
    }
    .service {
      ul {
        display: flex;
        li {
          margin: 10px 20px;
          width: 160px;
          font-size: 12px;
          text-align: left;
        }
        li:nth-child(4) {
          width: 454px;
        }
      }
      ul:nth-child(1) {
        li {
          font-size: 14px;
          color: #57607d;
        }
      }
    }
  }
  .bottom_top_zone {
    background-color: #121212;
    background: #000;
    padding-bottom: 26px;
    font-size: 12px;
    color: #fff;
    line-height: 16px;
    text-align: center;
    .bottom_content_zone {
      width: 1200px;
      margin: 0 auto;
      display: -ms-flexbox;
      display: flex;
      box-sizing: border-box;

      .bottom_left {
        text-align: left;
        float: left;
        -ms-flex: 1;
        flex: 1;
        padding-top: 83px;
        p {
          display: flex;
          font-size: 16px;
          -ms-flex-align: center;
          align-items: center;
          padding-bottom: 34px;
          margin-bottom: 0;
          .icon1 {
            display: block;
            width: 19px;
            height: 13px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAANCAYAAABLjFUnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjU3MDBCNjhGODg3MTFFOTg2Nzc5QzUyMEEzNDcxRTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjU3MDBCNjlGODg3MTFFOTg2Nzc5QzUyMEEzNDcxRTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0IwQ0Q0QkY4ODcxMUU5ODY3NzlDNTIwQTM0NzFFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0IwQ0Q0Q0Y4ODcxMUU5ODY3NzlDNTIwQTM0NzFFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg2PqkYAAAEISURBVHjapNM/S0JRGMfxx5saItjg0uTi3uDS6ODsFuLuHAU1CeISOUTQG8jBRcS30CIqDvoCchQCG8LBlkzl+D32CHkhvXYf+Az33HN/POfPFWPMMepYYvFPfSQDNkhE8rjCFGHxXgsE8YR3IewDPYgPRRiHxAlekcYLEh67OkITl+uuRD5tmEEEY5xjhNs9QVnMcIEhQutRuhti8KvlsvmpN6Rcy4mjpe8biOj4A6absK7royQ6+lEVMVzr8xgZ1/zKrrCNgtmuxz/m3dswZ8/ePOt+3uEMN7smBz2c2hdKXo7X0cC5+Ktvm2WDTvR6+KlTRO3vZO9UETVdUuCAEKOry6G9EmAAgx5owTCn8DQAAAAASUVORK5CYII=);
            background-repeat: no-repeat;
            margin-right: 16px;
          }
          .icon2 {
            display: block;
            width: 21px;
            height: 19px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjU3MDBCNkNGODg3MTFFOTg2Nzc5QzUyMEEzNDcxRTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjU3MDBCNkRGODg3MTFFOTg2Nzc5QzUyMEEzNDcxRTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTcwMEI2QUY4ODcxMUU5ODY3NzlDNTIwQTM0NzFFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NTcwMEI2QkY4ODcxMUU5ODY3NzlDNTIwQTM0NzFFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtLUXZ4AAAFnSURBVHjaYvj//z8DHtwHxC1YxG2AuAiXPnwGTv+PAM1I4tZI4htJMXQ1VJMaEBtA2SVArIlkiRGUfZQYQ5dDFWsgiRkjuS4WSVwYm8G4DFTFYpkJVK4QTVwQKn4Mm6EroZLKeMJZF6pmMpo4P1T8MLKhS7B4GReGhWUfmjgvEP8B4i0gziyoInUiDIRhTRwGl/6HMkBgJpGGOQHxHLSgmAjlS0D5C0CcBijHGo9h8kDMBMRyULWXoOJ6SGH8HxqM8DDtgAra4DB0CxB/hbKZoGovQPleUP4sbLHfB5W0hPJZoTarQPkvgPgtlM0CxD+AeBHU8CP40mk/1GBjKP8WlM8M5b8C4jdI6kHgETE5qhfNxXuhfBYki0Bip4H4ACl5fxLUIAMo/xiUj+zCF+SUUj1QzSZQ/lYgvgrE17EVIsQaiuxiLSQXPiWUnolJ8E1IJdQeYjIJI9hkwqAViGWBOI4YxQABBgBfMNKgSodaAQAAAABJRU5ErkJggg==);
            background-repeat: no-repeat;
            margin-right: 16px;
          }
          .icon3 {
            display: block;
            width: 17px;
            height: 17px;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjU3MDBCNzBGODg3MTFFOTg2Nzc5QzUyMEEzNDcxRTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjU3MDBCNzFGODg3MTFFOTg2Nzc5QzUyMEEzNDcxRTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTcwMEI2RUY4ODcxMUU5ODY3NzlDNTIwQTM0NzFFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NTcwMEI2RkY4ODcxMUU5ODY3NzlDNTIwQTM0NzFFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuXrHX4AAADzSURBVHjaYvz//383AwNDEBB/YyAP/GEEGvIFyPAD4otkGqLDAiTuAfFVIH5LpiHXmYAEIxDzM5AP+JgYqACoZog8ELNRashSIH5HiSGgKKbUNyqgKJ4K9dItIJ4NijJyvHMKiC8DsSEQHwDiLSS7BeQdJCwJxKeA+CMQi6DJ4cIqIJesBeIrQDwfiJ8DsRkQHwLiR6S4hAOIjYF4HxD/BWJlqA0fgHgqMS4BEXFArAkVmAnEf6BsEyD+CsTsxBiy8D8EdEMFXwNxC5T9AogTCRgiBksnRtBw4AHiPCD2hOI1QHwOiNuAWBuIubGEiBJAgAEAXvf/dB1p574AAAAASUVORK5CYII=);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin-right: 16px;
          }
          .span1 {
            padding-left: 35px;
          }
          .btn1 {
            width: 111px;
            height: 40px;
            background-color: #1abb9a;
            border-radius: 20px;
            font-size: 18px;
            color: #fff;
            border: 0;
            margin-left: 7px;
            cursor: pointer;
          }
        }
      }
      .bottom_right {
        width: 269px;
        padding-top: 70px;
        .flex_bottom_right {
          display: flex;
          .qr_code_zone1 {
            width: 127px;
            margin-right: 15px;
            p {
              margin-top: 0;
              margin-bottom: 16px;
            }
            .qr_img1 {
              width: 127px;
              height: 127px;
              background-image: url("../assets/mlqb/ma.jpg");
              background-size: contain;
            }
          }
          .qr_code_zone2 {
            width: 127px;
            p {
              margin-top: 0;
              margin-bottom: 16px;
            }
            .qr_img2 {
              width: 127px;
              height: 127px;
              background-image: url("../assets/mlqb/ma.jpg");
               background-size: contain;
            }
          }
        }
      }
    }
  }
}
</style>