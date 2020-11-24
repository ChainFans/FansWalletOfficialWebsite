<template>
  <div class="login">
    <div class="login-in">
      <div class="login-box">
        <div class="login-title">注册</div>
        <div class="login-info">
          <el-form label-position="right" :model="userinfo" class="login-form">
            <el-form-item label class="login-phone">
              <el-select v-model="userinfo.PhoneAreaId" placeholder="+86">
                <el-option label="+86" value="中国大陆">中国大陆</el-option>
                <el-option label="+1" value="美国">美国</el-option>
                <el-option label="+65" value="新加坡">新加坡</el-option>
                <el-option label="+62" value="印度尼西亚">印度尼西亚</el-option>
                <el-option label="+44" value="英国">英国</el-option>
                <el-option label="+82" value="韩国">韩国</el-option>
                <el-option label="+852" value="中国香港">中国香港</el-option>
                <el-option label="+886" value="中国台湾">中国台湾</el-option>
              </el-select>
              <el-input v-model="userinfo.phone" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item label class="captcha">
              <el-input v-model="userinfo.verifyCode" placeholder="验证码" style="margin-right:20px"></el-input>
              <el-button
                type="primary"
                size="small"
                @click="getCaptcha"
                v-show="isgetCaptcha"
              >{{getcaptcha}}</el-button>
              <el-button
                type="danger"
                size="small"
                style="width:92px"
                v-show="isshow"
              >{{getcaptcha}}s</el-button>
            </el-form-item>
            <el-form-item label>
              <el-input v-model="userinfo.nickname" placeholder="昵称"></el-input>
            </el-form-item>
            <el-form-item label>
              <el-input v-model="userinfo.password" type="password" placeholder="8-20位字符 不能位纯数字"></el-input>
            </el-form-item>

            <el-form-item label>
              <el-input v-model="userinfo.InvCode" placeholder="邀请码"></el-input>
            </el-form-item>
            <el-form-item>
              <!-- <div style="text-align:left;color:#468EDf;display:flex">
                <el-checkbox-group v-model="userinfo.type">
                  <el-checkbox label="0" name="type" style="margin-right:20px">我已阅读并同意</el-checkbox>
                </el-checkbox-group>
                <span>用户协议</span>
                <span>风险提示书</span>
              </div> -->
              <el-button
                type="primary"
                @click="submitForm('ruleForm')"
                style="width:100%;font-size:16px"
              >注册账号</el-button>
            </el-form-item>
            <div class="gologin">
              <span>已有帐号？</span>
              <span @click="goLogin">欢迎登录</span>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRegisteredCode, registered } from "../../api/login";
import CryptoJS from "crypto-js";
export default {
  data() {
    return {
      userinfo: {
        phone: "",
        nickname: "",
        password: "",
        PhoneAreaId: "86",
        type: "",
        InvCode: "",
        verifyCode: "",
      },
      getcaptcha: "获取验证码",
      isshow: false,
      isgetCaptcha: true,
      timer: null,
    };
  },
  mounted() {},
  methods: {
    goLogin() {
      this.$router.push("login");
    },
    getCaptcha() {
      if (!this.userinfo.phone) {
        this.$message.warning("手机号不能为空");
        return;
      } else if (!/^1[3456789]\d{9}$/.test(this.userinfo.phone)) {
        this.$message.warning("手机号格式不正确");
        return;
      }
      const data = {
        PhoneAreaId: this.userinfo.PhoneAreaId,
        Phone: this.userinfo.phone,
        Type: 1,
        Remark: "",
      };
      getRegisteredCode(data).then((res) => {
        console.log(res);
        const time = 60;
        if (res.code === 0) {
          this.$message.success("验证码已成功发送");
          if (!this.timer) {
            this.getcaptcha = time;
            this.isshow = true;
            this.isgetCaptcha = false;
            this.timer = setInterval(() => {
              if (this.getcaptcha > 0 && this.getcaptcha <= time) {
                this.getcaptcha--;
                if (this.getcaptcha == 0) {
                  this.getcaptcha = "获取验证码";
                  this.isshow = false;
                  this.isgetCaptcha = true;
                }
              }
            }, 1000);
          }
        } else {
          this.$message.error(res.messages);
        }
      });
    },
    submitForm() {
      
      console.log(this.userinfo.type);
      if (!this.userinfo.phone) {
        this.$message.warning("手机号不能为空");
        return;
      }
      if (
        !/^1[3456789]\d{9}$/.test(this.userinfo.phone) ||
        this.userinfo.phone.length != 11
      ) {
        this.$message.warning("手机号格式不正确");
        return;
      }
      if (!this.userinfo.verifyCode) {
        this.$message.warning("验证码不能为空");
        return;
      }
      if (!this.userinfo.password) {
        this.$message.warning("密码不能为空");
        return;
      }
      if (!/[0-9a-zA-Z]{8,20}/.test(this.userinfo.password)) {
        this.$message.warning("请输入正确的密码");
        return;
      }
      const data = {
        phoneAreaId: this.userinfo.PhoneAreaId,
        phone: this.userinfo.phone,
        nickname: this.userinfo.nickname,
        password: CryptoJS.MD5(
          CryptoJS.MD5(this.userinfo.password).toString().toLocaleUpperCase() +
            888888
        )
          .toString()
          .toLocaleUpperCase(),
        verifyCode: this.userinfo.verifyCode,
        type: 0,
        InvCode: this.userinfo.InvCode,
      };
      registered(data).then((res) => {
        console.log(res);
        if (res.code === 0) {
          this.$message.success("注册成功");
          this.$router.push({ path: `/?#download` });
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.login {
  min-width: 1200px;
  min-height: 800px;
  .login-in {
    width: 518px;
    height: 607px;
    background-color: #fff;
    border-radius: 6px;
    margin: 80px auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .login-box {
      .login-title {
        color: #3d424c;
        font-size: 22px;
        margin-bottom: 5px;
        padding: 10px;
        padding-top: 60px;
        text-align: center;
      }
      .login-info {
        padding: 10px;
        .login-form {
          width: 406px;
          margin: 10px auto;
          el-form-item {
            margin-bottom: 22px;
          }
          .login-phone {
            /deep/ .el-form-item__content {
              display: flex;
              .el-select {
                width: 120px;
                margin-right: 20px;
              }
            }
          }
          .gologin {
            text-align: right;
            span:nth-child(1) {
              font-size: 12px;
              color: #7f8999;
            }
            span:nth-child(2) {
              font-size: 12px;
              color: #468edf;
              cursor: pointer;
            }
          }
          .captcha {
            /deep/ .el-form-item__content {
              display: flex;
            }
          }
        }
      }
    }
  }
}
</style>