<template>
    <b-row>
        <b-col>
            <!-- <b-input-group size="sm">
                <b-form-input list="remarkSearch" size="sm" v-model="searchRemark2" placeholder="remark"></b-form-input>
                <div class="datalist-container">
                    <select id="remarkSearch" class="transparent-scroll">
                        <option v-for="(opt, i) in remarkOptions2" :key="i">{{ opt.title }}</option>
                    </select>
                </div>
            </b-input-group> -->
            <!-- <div>selectver</div> -->
        </b-col>
    </b-row>
</template>

<script>
    export default {
    data() {
        return {
        searchRemark2: "",
        remarkOptions2: [
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
