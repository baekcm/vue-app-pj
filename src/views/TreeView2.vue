<template>
  <div id="app">
    <div class="control_wrapper">
        <ejs-treeview id='treeview' :fields="fields" style="text-align: left;"></ejs-treeview>
    </div>
  </div>
</template>
<script>
//--- URL : https://ej2.syncfusion.com/vue/documentation/treeview/getting-started/
//--- npm install @syncfusion/ej2-vue-navigations –save
//--- main.js 파일에 추가
//--- import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
//--- Vue.use(TreeViewPlugin);
export default {
  data () {
    var dataSource =  [
       {
        nodeId: '01', nodeText: 'Music',
        children: [
            { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
        ]
    },
    {
        //--- 하나가 열린 상태로 만들고 싶으면 expanded: true 값을 주면 된다.
        //nodeId: '02', nodeText: 'Videos', expanded: true,
        nodeId: '02', nodeText: 'Videos',
        children: [
            { nodeId: '02-01', nodeText: 'Naturals.mp4' },
            { nodeId: '02-02', nodeText: 'Wild.mpeg' },
        ]
    },
    {
        nodeId: '03', nodeText: 'Documents',
        children: [
            { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
            { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
            { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
            { nodeId: '03-04', nodeText: 'Social Network.pdf' },
            { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
        ]
    }
    ];
    return {
      fields: { dataSource: dataSource, id: 'nodeId', text: 'nodeText', child: 'children' }
    }
  }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
.control_wrapper {
    display: block;
    max-width: 350px;
    max-height: 350px;
    margin: auto;
    overflow: auto;
    border: 1px solid #dddddd;
    border-radius: 3px;
}
</style>