<template>
  <div class="flex-col header">
    <div class="justify-center group_2">
      <!-- <img
        @click="onClickLeft"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/620478425a7e3f031086986a/62047882d074d70011ef91ae/16444602414285520398.png"
        class="image_3"
      /> -->
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "Navbar",
  components:{

  },
  props:{
    left:{
      type:Boolean,
      default: true
    },
    title:{
      type:String,
      default: ""
    }
  },
  methods:{
    onClickLeft(){
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
.group_2 {
  margin-top: 1.38rem;
  padding: 0.19rem 0 0.25rem;
  color: rgb(26, 26, 28);
  font-size: 1.06rem;
  line-height: 1rem;
  white-space: nowrap;
  position: relative;
}
.header {
  padding: 0.75rem 0.91rem 0.5rem 1rem;
  background-color: rgb(249, 251, 255);
  height: 5.5rem;
}
.image_3 {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1.38rem;
  height: 1.38rem;
}
</style>
