<template>
    <div>
        <div 
            @click="modal=false" 
            class="black-bg" 
            v-if="modal">
            <div class="white-bg">
                <h4>상세</h4>
                <p>상세 내용</p>
            </div>
        </div>
        <div>
            <h1>원룸</h1>
            <div v-for="(p,i) in products" :key="i">
                <h4 @click="modal=true">{{p.name}}</h4>
                <button @click="p.count++">신고</button>
                <span>신고수: {{p.count}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'about-vue',
        data(){
            return{
                modal:false, //모달창 만들기
                products:[
                    {name:'역삼', count:0},
                    {name:'천호', count:0},
                    {name:'마포', count:0},
                ]
            }
        },
        methods:{
            onClick(){
                
            }
        }
    }
</script>

<style>
    body{
        margin:0
    }
    div{
        box-sizing: border-box;
    }
    .black-bg{
        width:100%;
        height:100%;
        background: rgba(0,0,0,0.5);
        position: fixed;
        padding:20px
    }

    .white-bg{
        width:100%;
        background: white;
        border-radius: 8px;
        padding:20px
    }
</style>