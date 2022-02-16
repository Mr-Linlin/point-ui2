<template>
  <div class="flex-col page">
    <!-- <navbar title="积分明细"></navbar> -->
   <div class="flex-col header">
      <div class="justify-center group_2">
        <!-- <img
          @click="handleNav"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16444602414285520398.png"
          class="image_3"
        /> -->
        <span>积分明细</span>
      </div>
    </div>
    <div class="flex-col group_3">
      <div @scroll="handleScroll" class="flex-col list">
        <div class="list-item justify-between" :key="i" v-for="(item, i) in list">
          <div class="flex-col">
            <span class="text_2">{{item.desc}}</span>
            <span class="text_4">{{item.created_at}}</span>
          </div>
          <div class="right-group flex-row">
            <span class="text_8">{{ item.type === '1' ? '+' :'-' }}{{item.integral}}</span>
            <span class="text_4">当前余额: {{item.after_integral}}</span>
          </div>
        </div>
        <Empty v-if="list.length === 0" description="暂无数据" />
      </div>
    </div>
  </div>
</template>

<script>
import {sumPoint} from "../../service/user";
import { Empty } from 'vant';
import {navbar} from "../../mixins/navbar";

export default {
  mixins:[navbar],
  data() {
    return {
      list: []
    };
  },
  components:{
    Empty
  },
  created() {
    this.getList()
  },
  methods:{
    handleScroll(event){
      // 滚动条距离底部的距离scrollBottom
      let scrollBottom =
        event.target.scrollHeight -
        event.target.scrollTop -
        event.target.clientHeight;
      // console.log(scrollBottom) // 滚动到底部的距离
      if ( scrollBottom <= 0) { // 判断滚动到底部时
        console.log("到了。。")
        //  操作
      }
    },
    getList(){
      sumPoint().then(e=>{
        this.list = e.data;
      })
    }
  }
};
</script>

<style scoped lang="css">
@import url("../../style/public.css");
.list-item {
  padding: 1.13rem 1rem 1.19rem 1.03rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.25rem;
  box-shadow: 0px 0.5rem 1rem rgba(188, 153, 133, 0.07);
}
.right-group {
  flex-direction: column;
  text-align: right;
  align-self: center;
}
.text_2 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 1.1rem;
  font-weight: bold;
  width: 16rem;
  word-break: break-word;

}
.text_4 {
  margin-top: 0.81rem;
  color: rgba(0, 0, 0, 0.44);
  font-size: 0.94rem;
  white-space: nowrap;
}
.text_6 {
  margin-top: 0.19rem;
  color: rgba(0, 0, 0, 0.66);
  font-size: 1.1rem;
  line-height: 0.44rem;
  font-weight: 500;
  white-space: nowrap;
}
.text_8 {
  color: rgba(0, 0, 0, 0.66);
  font-size: 1.33rem;
  font-weight: 500;
  white-space: nowrap;
}
.page {
  background-color: #F7F9FE;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.group_3 {
  padding-bottom: 0.34rem;
  flex: 1 1 auto;
  overflow-y: auto;
}
.group {
  padding-left: 0.31rem;
  color: rgb(26, 26, 28);
  font-size: 0.75rem;
  line-height: 0.56rem;
  white-space: nowrap;
}

.list {
  padding: 1rem 1rem 4.38rem;
  height: calc( 100vh - 5.5rem );
  overflow-y: scroll;
  /*background-color: rgb(247, 249, 255);*/
}

.text-wrapper {
  padding: 0.5rem 0 0.31rem;
  border-radius: 0.66rem;
  overflow: hidden;
  width: 3.38rem;
  height: 1.31rem;
}
.group_1 {
  align-self: center;
}

.list-item:not(:first-of-type) {
  margin-top: 0.63rem;
}
.image {
  width: 1.13rem;
  height: 0.69rem;
}
.image_1 {
  margin-left: 0.31rem;
  width: 0.88rem;
  height: 0.63rem;
}
.image_2 {
  margin-left: 0.31rem;
  width: 1.53rem;
  height: 0.72rem;
}
.header{
  height: 3rem;
  line-height: 3rem;
  /* background: red; */
}
</style>
