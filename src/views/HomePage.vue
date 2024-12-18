<script setup>
import { ref } from 'vue';
import { reactive } from "vue";

import { useRoute,useRouter } from 'vue-router';
const router=useRouter()
const goToHome=()=>{
    router.push('/home')
}
const goToClubs=()=>{
    router.push('/clubs')
}
const goToChat=()=>{
    router.push('/bpmn')
}
  
const activities = reactive([
    { title: "校园开放日", icon: "⭐", bgColor: "#4baef5" },
  ]);

  const office = reactive([
    { title: "会议", icon: "📅", bgColor: "#4baef5" },
    { title: "邮件", icon: "✉️", bgColor: "#4baef5" },
    { title: "办事中心", icon: "📋", bgColor: "#9c6e3c" },
    { title: "网上服务中心", icon: "👤", bgColor: "#b566d5" },
  ]);
  
  const education = reactive([
    { title: "本科生课表新", icon: "📆", bgColor: "#30c8c8" },
    { title: "研究生课表新", icon: "📆", bgColor: "#30c8c8" },
    { title: "本科生空间", icon: "📚", bgColor: "#00b3f5" },
    { title: "AI教务助手", icon: "💡", bgColor: "#b8a1d5" },
    { title: "校园体育", icon: "🏃‍♂️", bgColor: "#f67733" },
  ]);
  
  const student = reactive([
    { title: "微就业", icon: "💼", bgColor: "#e94e77" },
    { title: "迎新", icon: "🎓", bgColor: "#4baef5" },
    { title: "活动平台", icon: "⭐", bgColor: "#39c27b" },
    { title: "异地培养申请", icon: "📝", bgColor: "#4baef5" },
    { title: "心理测评", icon: "💟", bgColor: "#a090c0" },
    { title: "走读申请", icon: "🚶‍♀️", bgColor: "#4baef5" },
    { title: "勤工助学", icon: "💰", bgColor: "#4baef5" },
    { title: "项目报名", icon: "✏️", bgColor: "#9e9e9e" },
    { title: "毕业离校", icon: "🎓", bgColor: "#4baef5" },
    { title: "满意度测评", icon: "📊", bgColor: "#57bfff" },
  ]);
  
  const info = reactive([
    { title: "统一身份认证", icon: "🔒", bgColor: "#39c27b" },
    { title: "支付码", icon: "💳", bgColor: "#f76c9b" },
    { title: "认证码", icon: "🔑", bgColor: "#b566d5" },
    { title: "证件照采集", icon: "🆔", bgColor: "#4baef5" },
    { title: "人脸特征采集", icon: "😊", bgColor: "#89d467" },
    { title: "工大云盘", icon: "☁️", bgColor: "#d67b47" },
    { title: "可信电子凭证", icon: "📜", bgColor: "#d67b47" },
  ]);
</script>

<template>
  <div class="layout">
    <!-- 左侧侧边栏 -->
    <el-aside class="sidebar">
      <h2>链证</h2>
      <!-- <el-button type="primary" class="new-chat-btn">New chat</el-button> -->
      <div class="menu">
        <div class="menu-item active" @click="goToHome" >主页-管理</div>
        <div class="menu-item "       @click="goToChat" >chat_bpmn</div>
        <div class="menu-item"        @click="goToClubs">社团管理</div>
        <div class="menu-item"        >验证</div>
      </div>
      <div class="footer">Start Free Trial</div>
    </el-aside>

    <!-- 主内容区 -->
    <el-main class="main-content">
      <!-- 聊天区域 -->
      <div class="chat-section">
        <h3>服务管理</h3>
        <div class="chat-messages">
            <van-nav-bar left-text="返回" title="校园服务" ></van-nav-bar>
    <div class="container">
    <!-- 新添加活动 -->
      <section>
        <h2 class="section-title">校务办公</h2>
        <div class="grid">
          <div class="grid-item" v-for="item in activities" :key="item.title">
            <div class="icon" :style="{ backgroundColor: item.bgColor }">
              <span>{{ item.icon }}</span>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </section>
      <!-- 校务办公 -->
      <section>
        <h2 class="section-title">校务办公</h2>
        <div class="grid">
          <div class="grid-item" v-for="item in office" :key="item.title">
            <div class="icon" :style="{ backgroundColor: item.bgColor }">
              <span>{{ item.icon }}</span>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </section>
  
      <!-- 教务教学 -->
      <section>
        <h2 class="section-title">教务教学</h2>
        <div class="grid">
          <div class="grid-item" v-for="item in education" :key="item.title">
            <div class="icon" :style="{ backgroundColor: item.bgColor }">
              <span>{{ item.icon }}</span>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </section>
  
      <!-- 学工服务 -->
      <section>
        <h2 class="section-title">学工服务</h2>
        <div class="grid">
          <div class="grid-item" v-for="item in student" :key="item.title">
            <div class="icon" :style="{ backgroundColor: item.bgColor }">
              <span>{{ item.icon }}</span>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </section>
  
      <!-- 信息化服务 -->
      <section>
        <h2 class="section-title">信息化服务</h2>
        <div class="grid">
          <div class="grid-item" v-for="item in info" :key="item.title">
            <div class="icon" :style="{ backgroundColor: item.bgColor }">
              <span>{{ item.icon }}</span>
            </div>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </section>
    </div>
        </div>
        
      </div>
    </el-main>
  </div>
</template>


<style scoped>
/* 布局整体 */
.layout {
  display: flex;
  height: 100vh;
  background-color: #f9fafb;
}

/* 左侧侧边栏 */
.sidebar {
  width: 250px;
  background-color: #1e1e2d;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.new-chat-btn {
  margin-bottom: 20px;
  width: 100%;
}

.menu {
  flex: 1;
}

.menu-item {
  padding: 10px 15px;
  margin: 5px 0;
  border-radius: 8px;
  cursor: pointer;
  color: #c5c7d0;
}

.menu-item.active {
  background-color: #4c4c6e;
  color: white;
}

.footer {
  text-align: center;
  color: #999;
  font-size: 12px;
}

/* 主内容区 */
.main-content {
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 20px;
  gap: 20px;
  background: white;
}

/* 聊天区域 */
.chat-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.chat-section h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background-color: #f5f5f7;
  border-radius: 8px;
}

.chat-message {
  margin: 8px 0;
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 70%;
}

.chat-message.model {
  background-color: #f0f2f5;
  align-self: flex-start;
}

.chat-message.user {
  background-color: #dcf8c6;
  align-self: flex-end;
}

.input-area {
  display: flex;
  margin-top: 10px;
}

.input-box {
  flex: 1;
  margin-right: 10px;
}

.send-btn {
  background-color: #4e59ff;
  color: white;
}

/* BPMN 区域 */
.bpmn-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.bpmn-section h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.bpmn-placeholder {
  flex: 1;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    padding: 16px;
  }
  
  .section-title {
    font-size: 18px;
    color: #333;
    margin-bottom: 12px;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }
  
  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 14px;
    color: #666;
  }

</style>
