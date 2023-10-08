<template>
  <div>
    <b-row>
      <b-col>
        <strong class="pt-2">종합결과코드</strong>
      </b-col>
      <b-col>
        <b-input-group size="sm">
          <b-form-input
            size="sm"
            placeholder="search"
            autocomplete="off"
            v-model="searchText"
            @focus="onFocusDataList"
            @blur="onFocusOutDataList"
            @keydown.up="onKeyUp"
            @keydown.down="onKeyDown"
            @keyup.enter="onEnterResultCd"
            ref="inputField" 
          >
          </b-form-input>
          <div class="searchFrame skmcSearch" v-show="inputFocus" ref="scrollCdContainer">
            <div
              class="dataOptions"
              v-for="(resultItem, index) in filteredResultCdOptions"
              :key="index"
              :value="resultItem.text"
              :class="{active:index===selectedCd}"
              @click="onChangeResultCd(resultItem)"
              ref="cdOption"
            >
            {{resultItem.text}}
            </div>
          </div>
        </b-input-group>
      </b-col>
    </b-row>
    <br>
    <br>
    <br>
    <br>
    <div>{{overallResultCd}}</div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        searchText:"",
        inputFocus:false,
        selectedCd:-1,
        overallResultCd:'00',
        overallResultCdOptionsOrg:[],
        overallResultCdOptions: [
            { text: "aa", value:"aa 관한 코드" },
            { text: "abc", value:"abc 관한 코드" },
            { text: "azxc", value:"azxc 관한 코드" },
            { text: "bb", value:"bb 관한 코드" },
            { text: "cc", value:"cc 관한 코드" },
            { text: "dd", value:"dd 관한 코드" },
            { text: "ee", value:"ee 관한 코드" },
            { text: "ff", value:"ff 관한 코드" },
            { text: "gg", value:"gg 관한 코드" },
            { text: "hh", value:"hh 관한 코드" },
            { text: "ii", value:"ii 관한 코드" },
            { text: "jj", value:"jj 관한 코드" },
            { text: "kk", value:"kk 관한 코드" },
            { text: "ll", value:"ll 관한 코드" },
            { text: "mm", value:"mm 관한 코드" },
            { text: "nn", value:"nn 관한 코드" },
            { text: "oo", value:"oo 관한 코드" },
        ],
      }
    },
    mounted() {
      this.$refs.inputField.focus(); // inputField는 실제로 입력 필드의 ref로 설정된 이름으로 변경해야 합니다.
    },
    computed: {
      filteredResultCdOptions() {
        // searchText가 포함된 항목만 필터링
        const lowerCaseSearchText = this.searchText.toLowerCase();
        return this.overallResultCdOptions.filter((resultItem) =>
          resultItem.text.toLowerCase().includes(lowerCaseSearchText)
        );
      },
    },
    watch:{
      searchText:function(newVal){
        var self=this;

        self.overallResultCdOptions.filter(function(codeItem) {          
          return codeItem.text.substr(0, newVal.length).toLowerCase() === newVal.toLowerCase()
        })

        this.inputFocus = true
      }
    },
    methods:{
      onFocusDataList(){
        //클릭하면 포커스 true됨
        this.inputFocus=true
      },
      onFocusOutDataList(){
        var self=this;
        setTimeout(function(){
          self.inputFocus=false
        },300)
      },
      onKeyUp(){
        if(this.selectedCd>0){
          this.selectedCd--;
          this.onScrollCdOption();
        }
      },
      onKeyDown(){
        if(this.selectedCd<this.overallResultCdOptions.length-1){
          this.selectedCd++;
          this.onScrollCdOption();
        }
      },
      onScrollCdOption(){
        var container=this.$refs.scrollCdContainer;
        var option=this.$refs.cdOption[this.selectedCd];
        if(container && option){
          var containerRect=container.getBoundingClientRect();
          var optionRect=option.getBoundingClientRect();
          if(optionRect.bottom>containerRect.bottom){
            container.scrollTop+=optionRect.bottom-containerRect.bottom;
          } else if (optionRect.top<containerRect.top){
            container.scrollTop-=containerRect.top-optionRect.top
          }
        }
      },
      onChangeResultCd (item) {
        console.log(item.text,"/", item.value); //{text:"xxx", value:"xxxxxx"}
        this.overallResultCd = item.value
        this.searchText = item.text
        // ipcRenderer.send(Constant.GET_SKMC_FAVORITE, JSON.stringify({resultCd: this.overallResultCd}))
      },
      onEnterResultCd(){
        const selectedItem = this.filteredResultCdOptions[this.selectedCd];
        if (selectedItem) {
          this.onChangeResultCd(selectedItem);
        }
        this.onFocusOutDataList()
      }
    }
  }
</script>

<style scoped>
  .searchFrame{
    position: absolute;
    background-color: white;
    border-top: none;
    overflow-y: scroll;
    top: 30px;
    padding: 15px;
    height: 100px;
    max-height: 200px;
    z-index: 100;
  }
  
  /* .skmcSearch{
    width: 430px;
  } */
  .dataOptions,.dataRemarkOptions {
    color: black;
    cursor: pointer;
    z-index: 200;
  }
  .dataOptions:hover, .dataOptions.active, .dataRemarkOptions.active {
    background-color: lightblue;
  }
</style>
