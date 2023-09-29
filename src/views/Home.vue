<template>
    <div>
        <h1>{{title1}}</h1>
        <input type="text" v-model="input1"/>
        <button type="button" @click="onGetData">get data</button>
        <button type="button" @click="onSetData">set data</button>

        <select @change="onChange" class="form-control" v-model="region">
            <option v-for="(o,i) in options" :value="o.v" :key="i">
                {{o.text}}
            </option>
        </select>

        <table class="table table-border" v-if="tableShow">
            <tr v-for="(o,i) in options" :key="i">
                <td>{{o.v}}</td>
                <td>{{o.text}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name:'home-vue',
        data(){
            return{
                title1:'aa',
                input1:'',
                options:[
                    {v:'S', text:'Seoul'},
                    {v:'J', text:'Jeju'},
                    {v:'B', text:'Busan'},
                ],
                region:"J",
                tableShow:!false
            }
        },
        methods:{
            onGetData(){
                alert(this.input1)
            },
            onSetData(){
                this.input1="12345"
            },
            onChange(){
                alert(this.region)
            }
        },
        watch:{
            input1(){
                console.log(this.input1)
            }
        },
        beforeCreate(){

        },
        created(){

        },
        beforeMount(){

        },
        mounted(){

        },
        beforeUpdate(){

        },
        updated(){

        },
        beforeDestroy(){

        },
        destroyed(){

        }
    }
</script>