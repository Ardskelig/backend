<template>
    <div ref="bpmnContainer" class="bpmn-renderer-container"></div>
  </template>
  
  <script setup>
  import { onMounted, ref, watch } from 'vue';
  import BpmnJS from 'bpmn-js/lib/Modeler'; // 引入bpmn-js库
  
  // 定义组件的 props，接收传入的 BPMN XML 数据
  const props = defineProps({
    bpmnXml: {
      type: String,
      required: true,
    },
  });
  
  const bpmnContainer = ref(null); // 用于绑定 DOM 元素
  
  // 使用 onMounted 来初始化 bpmn-js
  onMounted(() => {
    if (bpmnContainer.value && props.bpmnXml) {
      // 初始化 BPMN 渲染器
      const bpmnModeler = new BpmnJS({
        container: bpmnContainer.value, // 绑定渲染容器
        width: '100%',
        height: '100%',
      });
  
      // 加载并渲染 BPMN XML
      bpmnModeler.importXML(props.bpmnXml, (err) => {
        if (err) {
          console.error('BPMN 文件加载失败：', err);
        } else {
          console.log('BPMN 文件加载成功');
        }
      });
    }
  });
  
  // 监听 bpmnXml 的变化，如果发生变化则重新加载 BPMN 图
  watch(
    () => props.bpmnXml,
    (newXml) => {
      if (bpmnContainer.value && newXml) {
        const bpmnModeler = new BpmnJS({
          container: bpmnContainer.value,
          width: '100%',
          height: '100%',
        });
  
        bpmnModeler.importXML(newXml, (err) => {
          if (err) {
            console.error('BPMN 文件加载失败：', err);
          } else {
            console.log('BPMN 文件加载成功');
          }
        });
      }
    }
  );
  </script>
  
  <style scoped>
  .bpmn-renderer-container {
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    background-color: #fafafa;
  }
  </style>
  