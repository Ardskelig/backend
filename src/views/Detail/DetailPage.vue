<script setup>
import { ref } from 'vue';

// 活动信息
const activity = ref({
  name: '校园科技创新挑战赛',
  organizer: '科技创新协会',
  startTime: '2023-01-28',
  status: '进行中', // 状态：进行中、已结束
});

// 参与统计信息
const participants = ref({
  total: 100, // 总人数
  joined: 75, // 已参加人数
});

const unjoined = ref(participants.value.total - participants.value.joined); // 未参加人数
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
        <!-- <div class="menu-item"        @click="goToClubs">社团管理</div> -->
        <div class="menu-item"        >咨询</div>
        <div class="menu-item"        >日程</div>
      </div>
      <!-- <div class="footer">Start Free Trial</div> -->
    </el-aside>
    <!-- 主内容区 -->
    <el-main class="main-content">
        <el-container style="height: 100vh; display: flex; flex-direction: column;">
    <!-- 上半部分 (活动详细信息) -->
    <!-- 上半部分 (活动详细信息) -->
    <el-card style="height: 20%; margin: 10px; display: flex; flex-direction: column; justify-content: center;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <!-- 左侧部分: 活动名称、主办方、时间 -->
        <div style="flex: 1; text-align: left;">
          <h1>活动详细信息 <el-tag
            :type="activity.status === '进行中' ? 'success' : 'info'"
            size="large"
          >
            {{ activity.status }}
          </el-tag></h1>
          <p><strong>活动名称：</strong>{{ activity.name }}</p>
          <p><strong>主办方：</strong>{{ activity.organizer }}</p>
          <p><strong>开展时间：</strong>{{ activity.startTime }}</p>
        </div>
        
        <!-- 右侧部分: 活动状态 -->
        <div style="text-align: center;">
          
        </div>
      </div>
    </el-card>

    <!-- 下半部分 (活动地图) -->
    <el-card style="height: 80%; margin: 10px; display: flex; flex-direction: column; align-items: center;"> <!-- Center the map -->
      <h3>活动地图</h3>
      <el-image 
        src="http://yanzushengkai.oss-cn-beijing.aliyuncs.com/map.jpg" 
        fit="contain"
        style="max-width: 1000px; max-height: 1200px; border-radius: 5px;"
      />
    </el-card>
  </el-container>
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
.el-card {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: left;
}

.el-image {
  display: block;
  max-width: 100%;
  max-height: 80%;  /* Ensure it fits in the container */
}
</style>