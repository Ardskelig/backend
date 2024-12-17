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
// import BpmnRenderer from "../components/BpmnRenderer.vue"; // 引入BPMN图渲染组件

// 模拟的聊天消息
const chatMessages = ref([
  { sender: 'model', text: '你好！请告诉我你的流程描述，我会为你生成一个BPMN流程图。' },
  { sender: 'user', text: '我想创建一个简单的流程，包含开始、结束和一个任务。' },
  { sender: 'model', text: '好的，我已经生成了一个简单的BPMN流程图。' },
  { sender: 'user', text: '那能否加入更多的任务节点，并定义每个节点的负责人？' },
  { sender: 'model', text: '我已经更新了流程，加入了更多的任务节点，并设置了负责人。' },
  { sender: 'user', text: '请将这个流程保存下来，并提供下载链接。' },
  { sender: 'model', text: '流程图已保存，您可以通过下面的链接下载它。' },
]);
// 模拟的BPMN图数据
const bpmnXml = ref(`
  <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
    <bpmn:process id="Process_1" isExecutable="false">
      <bpmn:startEvent id="StartEvent_1" name="开始" />
      <bpmn:task id="Task_1" name="任务" />
      <bpmn:endEvent id="EndEvent_1" name="结束" />
      <bpmn:sequenceFlow id="Flow_1" sourceRef="StartEvent_1" targetRef="Task_1" />
      <bpmn:sequenceFlow id="Flow_2" sourceRef="Task_1" targetRef="EndEvent_1" />
    </bpmn:process>
  </bpmn:definitions>
`);

</script>

<template>
  <div class="layout">
    <!-- 左侧侧边栏 -->
    <el-aside class="sidebar">
      <h2>链证</h2>
      <!-- <el-button type="primary" class="new-chat-btn">New chat</el-button> -->
      <div class="menu">
        <div class="menu-item "       @click="goToHome" >主页-管理</div>
        <div class="menu-item active" @click="goToChat" >chat_bpmn</div>
        <div class="menu-item"        @click="goToClubs">社团管理</div>
        <div class="menu-item">验证</div>
      </div>
      <div class="footer">Start Free Trial</div>
    </el-aside>

    <!-- 主内容区 -->
    <el-main class="main-content">
      <!-- 聊天区域 -->
      <div class="chat-section">
        <h3>Chat</h3>
        <div class="chat-messages">
          <div
              v-for="(message, index) in chatMessages"
              :key="index"
              :class="['chat-message', message.sender]"
          >
            {{ message.text }}
          </div>
        </div>
        <div class="input-area">
          <el-input
              placeholder="Ask a question"
              class="input-box"
          />
          <el-button type="primary" class="send-btn">Send</el-button>
        </div>
      </div>

      <!-- BPMN 图展示区域 -->
      <div class="bpmn-section">
        <h3>Process diagrams</h3>
        <div class="toolbar">
          <el-button plain size="small">Download as image</el-button>
          <el-button plain size="small">Export as .bpmn</el-button>
          <el-button plain size="small">Fit to view</el-button>
        </div>
        <div class="bpmn-placeholder">
          <!-- BPMN 图占位区域 -->
          <BpmnRenderer :bpmnXml="bpmnXml" />
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

</style>
