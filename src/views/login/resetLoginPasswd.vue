<template>
  <div class="login">
    <div class="login-in">
      <div class="login-box">
        <div class="login-title">重置密码</div>
        <div class="login-info">
          <el-form label-position="right" :model="userinfo" class="login-form">
            <el-form-item label="邮箱/手机号">
              <el-input v-model="userinfo.admin" placeholder="邮箱/手机号" >
                <i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-form-item>
            <el-form-item label="密码" >
              <el-input v-model="userinfo.password"  placeholder="密码">
                <i slot="prefix" class="el-input__icon el-icon-key"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userinfo: {
        admin: "",
        password: "",
      },
    };
  },
  mounted() {},
  methods: {
    resetLoginPasswd() {
      this.$router.push("resetLoginPasswd");
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
    height: 403px;
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

        border-bottom: 1px solid  #ebeef5;
      }
      .login-info {
        padding: 10px;
        .login-form {
          width: 406px;
          margin: 10px auto;
          el-form-item {
            margin-bottom: 22px;
          }
        }
      }
    }
  }
}
</style>