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
      <b-col cols="1">
        <b-button class="custom-blue-btn" @click="onResultSave" size="sm">Save</b-button>
      </b-col>
    </b-row>
    <br>
    <br>
    <br>
    <br>
    <div>{{overallResultCd}}</div>

    <b-row class="mt-2 pl-2 pr-2">
      <b-col class="text-center colorWhite border">
        <strong>RBC morphology</strong>
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col>
        <b-row>
          <b-col class="fontSize14 pt-1">
            <div @click="onCopySize">Size</div>
          </b-col>
          <b-col>
            <b-form-select class="inputCustom" v-model="rbcSize" size="sm" :options="rbcSizeOptions"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col class="fontSize14 pt-1">
            <div>Chromicity</div>
          </b-col>
          <b-col>
            <b-form-select class="inputCustom" v-model="rbcChromia" size="sm" :options="rbcChromiaOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col class="fontSize14 pt-1">
            <div>Anisocytosis</div>
          </b-col>
          <b-col>
            <b-form-select class="inputCustom" v-model="anisocytosis" size="sm" :options="degreeOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col class="fontSize14 pt-1">
            <div>Poikilocytosis</div>
          </b-col>
          <b-col>
            <b-form-select class="inputCustom" v-model="poikilocytosis" size="sm" :options="degreeOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col class="fontSize14 pt-1">
            <div>elliptocyte</div>
          </b-col>
          <b-col>
            <b-form-select class="inputCustom" v-model="elliptocyte" size="sm" :options="degreeOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col class="fontSize14 pt-1">
            <div>burr cell</div>
          </b-col>
          <b-col>
            <b-form-select class="inputCustom" v-model="buurCell" size="sm" :options="degreeOptions"></b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-1">
          <b-col class="fontSize14 pt-1">
            <div>target cell</div>
          </b-col>
          <b-col>
            <b-form-select class="inputCustom" v-model="targetCell" size="sm" :options="degreeOptions"></b-form-select>
          </b-col>
        </b-row>
      </b-col>

      <b-col>
        <!-- <b-row class="mt-1">
          <b-col class="fontSize14 pt-1">
            <div>Nucleated RBC</div>
          </b-col>
          <b-col>
            <b-row>
              <b-col class="pr-0">
                <b-form-input class="inputCustom" type="number" size="sm" v-model="nucleatedRbc"></b-form-input>
              </b-col>
              <b-col>
                <span style="font-size: 12px;">/ 100WBC'S</span>
              </b-col>
            </b-row>
          </b-col>
        </b-row> -->
        <!-- <b-row class="mt-1">
          <b-col class="fontSize14 pt-1">
            <div>기타</div>
          </b-col>
          <b-col>
            <b-row>
              <b-col>
                <b-form-input class="inputCustom" size="sm" v-model="rbcOthers"></b-form-input>
              </b-col>
            </b-row>
          </b-col>
        </b-row> -->
      </b-col>

      <b-col>
        <b-form-input
          :id="'remark' + index"
          v-for="remarkItem, index in remarkContents" :key="index"
          v-model="remarkItem.title" @input="onChangeInput(remarkItem)"
          size="sm"
          @keyup="onClickInput($event, index)"
          @focus="onFocusInput($event, index)"
          @select="onSelectText"
          style="font-size: 12px;"
          @keydown="onPaste($event, index)"
          >
        </b-form-input>
      </b-col>
      <input type="hidden" id="focusRemark" :value="focusRemark">

    </b-row>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        remarkContents: [
          { title: "aa" },
          { title: "bb" },
          { title: "cc" },
          { title: "dd" },
          { title: "ee" },
          { title: "ff" },
          { title: "gg" },
          { title: "hh" },
          { title: "ii" },
          { title: "jj" },
          { title: "kk" },
          { title: "ll" },
          { title: "mm" },
          { title: "nn" },
          { title: "oo" },
        ],
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
        selectedItem: [],
        // rbcInfo: [],
        wbcInfo: [],
        wbcTotalCount: 0,
        serialNo: '',
        reportPrintList: [],
        filterExp: /^.png|.jpg|.bmp$/,
        filterKor: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
        drawClassList: [],
        maxWbcCount: 0,
        wbcCustomClass: [],
        empNo: '',
        lisConnObj: null,
        rbcImages: [],
        // 20230904_LBK : 삼광 결과 입력 팝업 -> report 창으로 이동 [
        wbcOthers: '',
        rbcOthers: '',
        nucleatedRbc: 0,
        remarkOptions:[],
        remarkOptionsOrg:[],
        rbcSize: '01',
        rbcSizeOptions: [
          { value: '01', text: 'microcytic' },
          { value: '02', text: 'normocytic' },
          { value: '03', text: 'macrocytic' }
        ],
        rbcChromia: '01',
        rbcChromiaOptions: [
          { value: '01', text: 'hypochromic' },
          { value: '02', text: 'normochromic' },
          { value: '03', text: 'hyperchromic' }
        ],
        anisocytosis: '00',
        poikilocytosis: '00',
        elliptocyte: '00',
        buurCell: '00',
        targetCell: '00',
        spherocyte: '00',
        schistocyte: '00',
        dimorphism: '00',
        rouleaux: '00',
        polychromasia: '00',
        baso: '00',
        hjBody: '00',
        wbcNumber: '01',
        wbcNumberOptions: [
          { value: '01', text: 'normal' },
          { value: '02', text: 'decreased' },
          { value: '03', text: 'increased' }
        ],
        wbcTocxicgranule: '00',
        wbcTocxicVacuole: '00',
        wbcDohleBody: '00',
        wbcLsMaturation: '00',
        nSegmentation: '01',
        nSegmentationOptions: [
          { value: '01', text: 'normal' },
          { value: '02', text: 'hypersegmented' },
          { value: '03', text: 'hyposegmented' }
        ],
        plateletNumber: '01',
        plateletNumberOptions: [
          { value: '01', text: 'normal' },
          { value: '02', text: 'decreased' },
          { value: '03', text: 'increased' }
        ],
        plateletSize: '00',
        clumping: '00',
        degreeOptions: [
          { value: '00', text: '-' },
          { value: '01', text: 'trace' },
          { value: '02', text: '1+' },
          { value: '03', text: '2+' },
          { value: '04', text: '3+' },
          { value: '05', text: '4+' }
        ],
        pltDegreeOptions: [
          { value: '00', text: '-'},
          { value: '01', text: '1+'},
          { value: '02', text: '2+'},
          { value: '03', text: '3+'}
        ],
        inputMaxByte: 80,
        keyIndex: 0,
        addRemarkCd: 'ADD',
        searchRemark:'',
        focusRemark: '',
        isSelectText: false,
        inputFocusRemark : false,
        // 20230904_LBK : 삼광 결과 입력 팝업 -> report 창으로 이동 ]
        selectedOption:-1,
        copied:"",
        pasted:"",
      }
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
      onCopySize (event) {
        if(event.ctrlKey){
          this.copied = this.rbcSize;
        }
      },
      onPaste (event, index) {
        if (event.ctrlKey && event.key === "v") {
          console.log("복붙", index)
          event.preventDefault();
          const newValue = this.remarkContents[index].title + " " +this.copied;
          this.remarkContents[index].title = newValue;
      }
      },
      onFocusInput () {
        console.log("focus input")
      },
      onClickInput () {
        console.log("click input")
      },
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
      onEnterResultCd(){
        const selectedItem = this.filteredResultCdOptions[this.selectedCd];
        if (selectedItem) {
          this.onChangeResultCd(selectedItem);
        }
        this.onFocusOutDataList()
      },
      onChangeResultCd (item) {
        console.log(item.text,"/", item.value); //{text:"xxx", value:"xxxxxx"}
        this.overallResultCd = item.value
        this.searchText = item.text
        // ipcRenderer.send(Constant.GET_SKMC_FAVORITE, JSON.stringify({resultCd: this.overallResultCd}))
      },

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
