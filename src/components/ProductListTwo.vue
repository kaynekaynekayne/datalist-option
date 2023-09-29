<template>
    <div id="product-list-one">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="(p,i) in saleProducts" :key="i">
                <span>{{p.name}} </span>
                <span>${{p.price}}</span>
            </li>
        </ul>
        <button @click="onReducePrice(4)">Reduce Price</button>
    </div>
</template>

<script>
    export default {
        computed:{
            products(){
                return this.$store.state.products
            },
            saleProducts(){
                return this.$store.getters.saleProducts
            }
        },
        methods:{
            onReducePrice(amount){
                return this.$store.dispatch('reducePrice',amount);
            }
        }
    }
</script>