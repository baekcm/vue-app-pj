URL : 
https://awesomeopensource.com/project/michaelfitzhavey/vue-json-tree-view


npm install --save vue-json-tree-view


[main.js]
import TreeView from "vue-json-tree-view"
Vue.use(TreeView)


[tree 관련 페이지]
<div>
    <tree-view :data="jsonSource" :options="{maxDepth: 3}"></tree-view>
</div>


[options]
{
  maxDepth: 4,
  rootObjectKey: "root",
  modifiable: false,
  link: false,
  limitRenderDepth: false
}