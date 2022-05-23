
<template>
  <div>
    <i-card shadow title="社区">
      <i-row class="join-page" :gutter="32">
        <i-col span="10">
          <img class="qq-group-img" src="../assets/images/icon-qr-qq-wechat.png">
          <i-row type="flex" justify="center">
            <i-col span="12">
              <p>QQ 群号：621780943</p>
            </i-col>
            <i-col span="12"></i-col>
          </i-row>
        </i-col>
        <i-col span="14">
          <div class="join-page-other">
            <i-button to="https://zhuanlan.zhihu.com/feview" target="_blank" size="large">
              <img src="../assets/images/icon-social-zhihu.svg" class="join-page-other-icon">
              iView 知乎专栏
            </i-button>
            <i-button to="https://juejin.im/user/56fe494539b0570054f2e032" target="_blank" size="large">
              <img src="../assets/images/icon-social-juejin.svg" class="join-page-other-icon">
              掘金
            </i-button>
            <i-button to="https://live.bilibili.com/1353202" target="_blank" size="large">
              <img src="../assets/images/icon-social-bilibili.svg" class="join-page-other-icon">
              活动直播间
            </i-button>
            <i-button to="https://twitter.com/iViewUI" target="_blank" size="large">
              <img src="../assets/images/icon-social-twitter.svg" class="join-page-other-icon">
              Twitter
            </i-button>
          </div>
        </i-col>
      </i-row>
    </i-card>
  </div>
</template>

<script lang="babel">
import { 
    Input,Form,FormItem,Button,Slider,Select,Option,Row,Col,DatePicker,TimePicker,RadioGroup,Radio,
    CheckboxGroup,Checkbox,Switch,Card
} from 'iview';
export default {
    name: 'join_page',
    components: {
        iInput:Input,
        iForm:Form,
        iFormItem:FormItem,
        iButton:Button,
        iSlider:Slider,
        iSelect:Select,
        iOption:Option,
        iRow:Row,
        iCol:Col,
        iDatePicker:DatePicker,
        iTimePicker:TimePicker,
        iRadioGroup:RadioGroup,
        iRadio:Radio,
        iCheckboxGroup:CheckboxGroup,
        iCheckbox:Checkbox,
        iSwitch:Switch,
        iCard:Card
    },
    data () {
        return {
        }
    }
};
</script>
<style>
  .join-page{
    text-align: center;
  }
  .qq-group-img{
    width: 100%;
  }
  .join-page-other-icon{
    width: 20px;
    vertical-align: middle;
    margin-right: 6px;
  }
  .join-page-other{
    text-align: left;
  }
  .join-page-other .ivu-btn{
    margin-right: 6px;
  }
</style>