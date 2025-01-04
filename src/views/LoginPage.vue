<script setup>
// import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
//控制注册与登录表单的显示， 默认显示注册
const isRegister = ref(false)
</script>

<template>
    <el-row class="login-page">
        <el-col :span="12" class="bg"></el-col>
        <el-col :span="6" :offset="3" class="form">
            <!-- 注册表单 -->
            <el-form ref="form" size="large" autocomplete="off" v-if="isRegister">
                <el-form-item>
                    <h1>注册</h1>
                </el-form-item>
                <el-form-item>
                    <el-input :prefix-icon="User" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input :prefix-icon="Lock" type="password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input :prefix-icon="Lock" type="password" placeholder="请输入再次密码"></el-input>
                </el-form-item>
                <!-- 注册按钮 -->
                <el-form-item>
                    <el-button class="button" type="primary" auto-insert-space>
                        注册
                    </el-button>
                </el-form-item>
                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="isRegister = false">
                        ← 返回
                    </el-link>
                </el-form-item>
            </el-form>
            <!-- 登录表单 -->
            <el-form ref="form" size="large" autocomplete="off" v-else>
                <el-form-item>
                    <div class="login-container">
                      <!-- 顶部提示 -->
                      <div class="login-header">
                        <h2>扫码登录</h2>
                        <p>请使用移动端扫描二维码</p>
                      </div>
                      <!-- 二维码区域 -->
                      <el-image
                        src="http://yanzushengkai.oss-cn-beijing.aliyuncs.com/hit.png"
                        class="qr-code"
                        alt="二维码"
                      ></el-image>
                      <!-- 自动登录选项 -->
                      <div class="auto-login">
                        <el-checkbox v-model="autoLogin">30 天内自动登录</el-checkbox>
                      </div>
                    </div>
                    
                </el-form-item>
                

                <el-form-item class="flex">
                    <el-link type="info" :underline="false" @click="isRegister = true">
                        注册 →
                    </el-link>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
/* 样式 */
.login-page {
    height: 100vh;
    background-color: #fff;

    .bg {
        background: url('@/assets/chaindid-removebg-preview.png') no-repeat 50% center / 300px auto,
            url('@/assets/login_bg.jpg') no-repeat center / cover;
        border-radius: 0 20px 20px 0;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        user-select: none;

        .title {
            margin: 0 auto;
        }

        .button {
            width: 100%;
        }

        .flex {
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    }
}
/* 登录容器样式 */
.login-container {
  width: 400px;
  background-color: #dfdcdc;
  color: #000000;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* 顶部标题和描述 */
.login-header {
  margin-bottom: 20px;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #000000;
  }
}

/* 二维码样式 */
.qr-code {
  width: 200px;
  height: 200px;
  margin: 0 auto 20px;
  border-radius: 5px;
  background-color: #000000;
}

/* 自动登录复选框 */
.auto-login {
  font-size: 14px;

  .el-checkbox__label {
    color: #000000;
  }
}
</style>