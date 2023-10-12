<template>
    <b-row class="mt-2 pl-2 pr-2">
        <b-col class="fontSize14 pt-1">
            <div @click="onCopySize">Size</div>
        </b-col>
        <b-col>
            <b-form-select class="inputCustom" v-model="rbcSize" size="sm" :options="rbcSizeOptions"
            ></b-form-select>
        </b-col>
        <b-row class="mt-1">
            <b-col class="fontSize14 pt-1">
                <div @click="onCopyChrom">Chromicity</div>
            </b-col>
            <b-col>
                <b-form-select class="inputCustom" v-model="rbcChromia" size="sm" :options="rbcChromiaOptions"></b-form-select>
            </b-col>
        </b-row>



        <b-col class="pointer pl-2 pr-2">
            <b-form-input type="text"
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
        <!-- <input type="hidden" id="focusRemark" :value="focusRemark"> -->
    </b-row>
</template>

<script>
    export default {
        data() {
            return {
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
                copied:"",
                searchRemark2: "",
                remarkContents: [
                    { title: "aa" },
                    { title: "bb" },
                    { title: "cc" },
                    { title: "dd" },
                    { title: "ee" },
                    { title: "ff" },
                    { title: "gg" },
                ],
            };
        },
        methods:{
            onCopySize (evt) {
                if (evt.ctrlKey) {
                    console.log("복사")
                    this.copied = this.rbcSizeOptions.find(opt => opt.value === this.rbcSize).text;
                }
            },
            onCopyChrom (evt) {
                if (evt.ctrlKey) {                  
                    console.log("복사")
                    this.copied = this.rbcChromiaOptions.find(opt => opt.value === this.rbcChromia).text;
                }
            },
            onPaste (evt, index) {
                if (evt.ctrlKey && evt.key === "v") {
                    console.log("복붙", index)
                    evt.preventDefault();
                    this.remarkContents[index].title = this.remarkContents[index].title + " " +this.copied
                }
            },
            onClickInput (){
            
            },
            onFocusInput (){

            },
            onSelectText ( ){

            }
        },
        mounted(){
            this.EventBus.$on('LOG_TEXT',(item)=>{
                console.log(item)
            })
        }
    };
</script>

<style scoped>
    .datalist-container {
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
