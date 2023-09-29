import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store=new Vuex.Store({
    state:{
        products:[
            {name:'banana',price:20},
            {name:'shiny',price:40},
            {name:'green',price:60},
            {name:'red',price:80},
        ]
    },
    getters:{
        saleProducts(state){ //state까먹지마
            const saleProducts=state.products.map(pd=>{
                //state를 고치는게 아니라 새로운 배열을 반환하는 것
                //mutation은 아예 state를 고침
                return {
                    name:`**${pd.name}**`,
                    price:pd.price/2
                }
            })
            return saleProducts;
        }
    },
    mutations:{ //computed 가 아닌 methods 에 등록
        reducePrice(state, payload){
            state.products.forEach(pd=>{
                // return pd.price-=1
                return pd.price-=payload
            })
        }
    },
    actions:{
        reducePrice:(context,payload)=>{//context->store itself
            setTimeout(function(){
                context.commit('reducePrice', payload);//mutations의
            },2000);
        }
    }
});