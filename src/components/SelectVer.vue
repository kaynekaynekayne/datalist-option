<template>
    <b-row class="mt-2 pl-2 pr-2">
        <b-col class="fontSize14 pt-1">
            <div @click="onCopySize">Size</div>
        </b-col>
        <b-col>
            <b-form-select class="inputCustom" v-model="rbcSize" size="sm" :options="rbcSizeOptions"
            ></b-form-select>
        </b-col>
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
                @keydown="onPasteFromClipboard($event, index)"
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
                    { title: "hh" },
                    { title: "ii" },
                    { title: "jj" },
                    { title: "kk" },
                    { title: "ll" },
                    { title: "mm" },
                    { title: "nn" },
                    { title: "oo" },
                ],
            };
        },
        methods:{
            onCopySize (){
                console.log("복사")
                this.copied = this.rbcSizeOptions.find(option => option.value === this.rbcSize).text;
            },
            onClickInput (event, index){
                // input 요소를 클릭하고 붙여넣기를 처리
                // const inputElement = event.target;
                // const newValue = inputElement.value + " " + this.searchRemark2;
                // inputElement.value = newValue;
                // this.remarkContents[index].title = newValue;
                console.log(event, index)
            },
            onPasteFromClipboard(event, index) {
                if (event.ctrlKey && event.key === "v") {
                    console.log("복붙", index)
                    event.preventDefault();
                    const newValue = this.remarkContents[index].title + " " +this.copied;
                    this.remarkContents[index].title = newValue;
                }
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
