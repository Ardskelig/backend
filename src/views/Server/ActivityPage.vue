<template>
    <el-container class="layout">
      <!-- 左侧侧边栏 -->
      <el-aside class="sidebar">
        <h2>链证</h2>
        <div class="menu">
          <div class="menu-item active" @click="goToHome">主页-管理</div>
          <div class="menu-item" @click="goToChat">chat_bpmn</div>
          <div class="menu-item">咨询</div>
          <div class="menu-item">日程</div>
        </div>
        <!-- <div class="footer">Start Free Trial</div>s -->
      </el-aside>
  
      <!-- 主内容区 -->
      <el-main class="main-content">
        <!-- 筛选栏 -->
        <el-card class="filter-card">
          <el-tabs v-model="activeName" @tab-click="handleTabClick">
            <el-tab-pane :label="`全部活动(${totals.all})`" name="all"></el-tab-pane>
            <el-tab-pane :label="`进行中活动(${totals.pending})`" name="pending"></el-tab-pane>
            <el-tab-pane :label="`已结束活动(${totals.reviewed})`" name="reviewed"></el-tab-pane>
          </el-tabs>
          <el-form :model="queryParams" label-width="80px" inline>
            <el-form-item label="活动名称">
              <el-input v-model="queryParams.roadName" placeholder="请输入活动名称" size="medium" />
            </el-form-item>
            <el-form-item label="主办单位">
                <el-input v-model="queryParams.roadName" placeholder="请输入主办单位名称" size="medium" />
            </el-form-item>
            <el-form-item label="开展日期">
              <el-date-picker
                v-model="queryParams.checkDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="small"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="handleQuery">查询</el-button>
              <el-button size="small" @click="resetQuery">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
  
        <!-- 卡片列表 -->
        <el-row :gutter="20" class="card-container">
          <el-col v-for="(item, index) in paginatedData" :key="index" :span="6">
            <el-card shadow="always" class="card">
              <div class="card-header">
                <!-- <span class="card-title">Lv1</span> -->
                <span class="road-name">{{ item.roadName }}</span>
              </div>
              <div class="card-content">
                <div><span class="label">主板单位：</span>{{ item.taskName }}</div>
                <div><span class="label">报名人数：</span>{{ item.inspector }}</div>
                <div><span class="label">开展时间：</span>{{ item.checkTime }}</div>
                <div>
                  <span class="label">活动状态：</span>
                  <span :class="['status', getStatusClass(item.status)]">
                    {{ getStatusText(item.status) }}
                  </span>
                </div>
                <!-- <div><span class="label">设备编号：</span>{{ item.deviceId }}</div> -->
              </div>
              <div class="card-footer">
                <el-button type="text" size="large" @click="router.push('detail')">查看具体情况</el-button>
                <!-- <el-button type="text" size="small">回看</el-button>
                <el-button type="text" size="small">密度质量评价</el-button> -->
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  import { useRoute,useRouter } from 'vue-router';
const router=useRouter()
  const activeName = ref("all");
  const totals = ref({
    all: 3,
    pending: 2,
    reviewed: 1,
  });
  const queryParams = ref({
    roadName: "",
    orgId: null,
    checkDate: null,
  });
  const orgOptions = ref([
    { value: "1", label: "单位A" },
    { value: "2", label: "单位B" },
    { value: "3", label: "单位C" },
  ]);
  const data = ref([
    {
      roadName: "创意手工艺工作坊",
      taskName: "艺术设计学院",
      status:0,
      inspector:80,
      checkTime: "2023-01-16",
    },
    {
      roadName: "校园科技创新挑战赛",
      taskName: "科技创新协会",
      inspector:166,
      status:1,
      checkTime: "2023-01-28",
    },
    {
      roadName: "校园十佳歌手大赛",
      taskName: "校团委",
      inspector:160,
      status:1,
      checkTime: "2023-10-28",
    },
  ]);
  
  const pageSize = ref(12);
  const currentPage = ref(1);
  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return data.value.slice(start, end);
  });
  const handleQuery = () => {
    console.log("查询条件：", queryParams.value);
  };
  const resetQuery = () => {
    queryParams.value = {
      roadName: "",
      orgId: null,
      checkDate: null,
    };
    console.log("已重置查询条件");
  };
  const getStatusText = (status) => {
  switch (status) {
    case 0:
      return "已结束";
    case 1:
      return "正在进行";
    case 2:
      return "未开始";
    default:
      return "未知状态";
  }
};  
const getStatusClass = (status) => {
  switch (status) {
    case 0:
      return "reviewed"; // 蓝色
    case 1:
      return "pending"; // 绿色
    case 2:
      return "upcoming"; // 灰色
    default:
      return "";
  }
};

  </script>
  
  <style scoped lang="scss">
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
    flex: 1;
    padding: 20px;
    background: white;
  }
  
  .filter-card {
    margin-bottom: 20px;
  }
  
  .card-container {
    margin-top: 20px;
  }
  
  .card {
    border-radius: 8px;
    overflow: hidden;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }
  .card-content {
    margin: 15px;
  }
  
  .road-name {
    flex: 1;
    text-align: center;
  }
  
  .status {
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    color: white;
  }
  
  .status.pending {
    background-color: #67c23a;
  }
  
  .status.reviewed {
    background-color: #409eff;
  }

  .status {
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  color: white;
  font-weight: bold;
}

.status.pending {
  background-color: #67c23a; /* 绿色 */
}

.status.reviewed {
  background-color: #409eff; /* 蓝色 */
}

.status.upcoming {
  background-color: #909399; /* 灰色 */
}

  </style>
  