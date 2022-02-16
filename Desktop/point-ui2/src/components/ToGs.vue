<template>
  <div class="dialog" v-show="showMask">
    <div class="dialog-container">
      <div class="dialog-title">{{title}}</div>
      <!--
      <div class="content" v-html="content"></div>
      -->
      <van-form @submit="onSubmit">
        <van-field
          v-model="amount"
          name="point"
          label="积分余额"
          disabled
          placeholder=""
        />
        <van-field
          v-model="point"
          name="point"
          label="积分"
          placeholder="请输入消费积分金额"
          :rules="[{ required: true, message: '请输入积分金额', number: true, message: '消费积分必须是整数类型' }]"
          :oninput="getGsAmount()"
        />
        <!--
        :rules="[{ required: true, message: '请输入积分金额', number: true, message: '积分必须是整数类型' }]"
        -->
        <van-field
          v-model="gs"
          name="point"
          label="GS"
          disabled
          placeholder=""
        />
        <van-field
          v-model="rate"
          name="point"
          label="兑换比例1:"
          disabled
        />
      </van-form>
      <div class="btns">
        <div v-if="type != 'confirm'" class="default-btn" @click="closeBtn">
          {{cancelText}}
        </div>
        <div v-if="type == 'danger'" class="danger-btn" @click="dangerBtn">
          {{dangerText}}
        </div>
        <div v-if="type == 'confirm'" class="confirm-btn" @click="confirmBtn">
          {{confirmText}}
        </div>
      </div>
      <div class="close-btn" @click="closeMask"><i class="iconfont icon-close"></i></div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'ToGs',
  props: {
    value: {},
    // 类型包括 defalut 默认， danger 危险， confirm 确认，
    type:{
      type: String,
      default: 'default'
    },
    content: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    dangerText: {
      type: String,
      default: '兑换'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
  },
  data(){
    return{
      point: 0,
      gs: 0.00,
      rate: 0.00,
      amount: 0,
      showMask: false,
    }
  },
  methods:{
    getGsAmount() {
      this.gs = this.point / this.rate
    },

    closeMask(){
      this.showMask = false;
    },
    closeBtn(){
      this.$emit('cancel');
      this.closeMask();
    },
    dangerBtn(){
      this.$emit('danger');
      this.closeMask();
    },
    confirmBtn(){
      this.$emit('confirm');
      this.closeMask();
    }
  },
  mounted(){
    this.showMask = this.value;
    // this.rate = this.$parent.rate;
  },
  watch:{
    value(newVal, oldVal){
      // eslint-disable-next-line no-unused-vars
      let setOldVal = oldVal;
      this.showMask = newVal;
    },
    showMask(val) {
      this.$emit('input', val);
    }
  },
}
</script>
<style lang="less" scoped>

</style>
