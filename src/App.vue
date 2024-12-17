<script setup>
import { ref } from 'vue';
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
  <div class="common-layout">
    <el-container>
      <!-- Header -->
      <el-header class="header">
        <h1>BPMN 流程图生成器</h1>
      </el-header>

      <el-container>
        <!-- 左侧导航栏 -->
        <el-aside width="200px" class="aside">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1"> 首页 </el-menu-item>
            <el-menu-item index="2"> 流程生成 </el-menu-item>
            <el-menu-item index="2"> 历史记录 </el-menu-item>
          </el-menu>
        </el-aside>

        <!-- Main 区域 -->
        <el-container>
          <el-main class="main">
            <el-row :gutter="20" class="main-row">
              <!-- 左侧聊天区域 -->
              <el-col :span="10" class="chat-section">
                <el-header class="header">
                  <h1>Chat</h1>
                </el-header>
                <div class="chat-window">
                  <!-- 聊天消息区 -->
                  <div class="chat-messages">
                    <div
                      v-for="(message, index) in chatMessages"
                      :key="index"
                      :class="['chat-message', message.sender]"
                    >
                      <span class="sender">{{ message.sender === 'user' ? '我' : 'chat_bpmn' }}:</span>
                      <p class="message-text">{{ message.text }}</p>
                    </div>
                  </div>

                  <!-- 输入框和按钮 -->
                  <el-input
                    placeholder="请输入您的问题"
                    type="textarea"
                    :rows="3"
                    class="input-box" 
                    
                  />
                  <el-button
                    type="primary"
                    class="generate-btn"
                    
                  >
                    生成BPMN流程图
                  </el-button>
                </div>
              </el-col>

              <!-- 右侧 BPMN 图展示区域 -->
              <el-col :span="14" class="bpmn-section">
                <h3>BPMN 流程图</h3>
                <div v-if="bpmnXml" class="bpmn-container">
                  <!-- 传递 BPMN XML 数据 -->
                  <BpmnRenderer :bpmnXml="bpmnXml" />
                </div>
                <div v-else class="bpmn-placeholder">
                  请输入流程描述并点击按钮以生成流程图
                </div>
              </el-col>
            </el-row>
          </el-main>

          <!-- Footer -->
          <el-footer class="footer">
            <p>© 2024 BPMN 流程图生成器</p>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
/* 整体布局样式 */
.common-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #409eff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.aside {
  background-color: #f9f9f9;
  border-right: 1px solid #ddd;
}

.main {
  padding: 20px;
  background-color: #fff;
}

.footer {
  background-color: #f0f2f5;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
}

/* Main 区域左右分栏 */
.main-row {
  height: 100%;
}

.chat-section {
  padding-right: 10px;
  border-right: 1px solid #eee;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.bpmn-section {
  padding-left: 10px;
}

/* 聊天区域样式 */
.chat-window {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 10px;
}

.chat-message {
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  max-width: 80%;
  clear: both;
}

.chat-message.user {
  background-color: #d0f0c0;
  align-self: flex-end;
}

.chat-message.model {
  background-color: #f0f0f0;
  align-self: flex-start;
}

.sender {
  font-weight: bold;
  margin-right: 5px;
}

.message-text {
  word-wrap: break-word;
  word-break: break-word;
}

.input-box {
  margin-top: 10px;
}

.generate-btn {
  margin-top: 10px;
}

/* BPMN 图展示区域 */
.bpmn-container {
  width: 100%;
  height: 400px;
  border: 1px solid #ddd;
}

.bpmn-placeholder {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  border: 1px dashed #ccc;
  background-color: #f9f9f9;
}
</style>
