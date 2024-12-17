<script setup>
import { ref } from 'vue';
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
</script>

<template>
  <div class="layout">
    <!-- 左侧侧边栏 -->
    <el-aside class="sidebar">
      <h2>链证</h2>
      <!-- <el-button type="primary" class="new-chat-btn">New chat</el-button> -->
      <div class="menu">
        <div class="menu-item " @click="goToHome" >主页-管理</div>
        <div class="menu-item "       @click="goToChat" >chat_bpmn</div>
        <div class="menu-item active"        @click="goToClubs">社团管理</div>
        <div class="menu-item"        >验证</div>
      </div>
      <div class="footer">Start Free Trial</div>
    </el-aside>

    <!-- 主内容区 -->
    <el-main class="main-content">
    社团管理
      
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
