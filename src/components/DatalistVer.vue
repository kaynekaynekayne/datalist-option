<template>
  <div>

    <b-row>
      <b-col>
        <b-input-group size="sm">
          <b-form-input @keyup.enter="onInsertText" list="remarkSearch" size="sm" v-model="searchRemark" placeholder="remark"></b-form-input>
          <div class="datalist-container">
            <datalist id="remarkSearch" class="transparent-scroll">
              <option v-for="(opt, i) in remarkOptions" :key="i">{{ opt.title }}</option>
            </datalist>
          </div>
        </b-input-group>
      </b-col>
    </b-row>
    <br>
    <br>
    <br>
    <br>
    <b-row>
      <!-- <b-form-checkbox
        v-model="isSelected"
        value="Y"
        unchecked-value="N"
      ></b-form-checkbox> -->
    </b-row>
    <b-row>
      <!--enter를 눌렀을 때 버튼 클릭과 동일한 동작 실행-->
      <!-- <b-button @click="logText">조회</b-button>
      <b-form-input type="text" @keyup.enter="logText"></b-form-input> -->
    </b-row>
    <b-row>
      <div v-for="(opt,index) in selectOptions" :key="index">
        <p>{{opt.title}}</p>
        <p>{{opt.content}}</p>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSelected:"Y",
      searchRemark: "",
      remarkOptions: [
        { title: "aa", content:"에이에이에" },
        { title: "bb", content:"비비비" },
        { title: "cc", content:"씨" },
        { title: "dd", content:"디디디" },
        { title: "ee", content:"이이" },
        { title: "ff", content:"에프에프에프" },
        { title: "gg", content:"지지" },
        { title: "hh", content:"에체체체체" },
        { title: "ii", content:"아이ㅏ잉" },
        { title: "jj", content:"제제" },
        { title: "kk", content:"케이케잌" },
        { title: "ll", content:"엘렝ㄹ" },
        { title: "mm", content:"엠엠" },
        { title: "nn", content:"엔엔" },
        { title: "oo", content:"오오" },
      ],
      selectOptions:[],
    };
  },
  methods:{
    onInsertText:function(){
      //인풋에 적은 값이 remarkOptions 안에 있는 값이어아햠
      this.remarkOptions.forEach(opt=>{
        if(opt.title===this.searchRemark) {
          var obj={
            title:this.searchRemark,
            content:opt.content
          }
          this.selectOptions.push(obj);
        }
      })
      this.searchRemark="";
    },
    // logText:function(){
    //   this.EventBus.$emit("LOG_TEXT",this.remarkOptions[0].title)
    // }
  }
};
</script>

<style scoped>
.datalist-container {
  /* 원하는 높이로 조정하세요. */
  /* max-height: 150px;  */
  overflow-y: auto;
}

/* <datalist> 내부 스크롤 바 스타일을 조절합니다. */
.transparent-scroll::-webkit-scrollbar {
  width: 18px; /* 스크롤 바의 너비를 설정하세요. */
}

.transparent-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0); /* 스크롤 바의 색상을 투명하게 만듭니다. */
}
</style>
