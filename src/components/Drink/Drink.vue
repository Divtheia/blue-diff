<template>
    <transition
    name="fade"
    mode="out-in"
    appear="ture"
    appear-active-class="fadeInLeft"
    leave-active-class="fadeOut"
    >
  <div class="drink">
      <h1>DrinksList</h1>
      <form>
        <ul v-for="(order,index) in drinkOrder" :key='order' :index='index'>
          <li @click="deletOrder(index)" class="deletOrder">{{index+1}} - {{order.orderTitle}} {{order.orderSize}} {{order.orderPrice}}</li>
        </ul>
      </form>
      <div class="orderTitle">總共:{{priceSum}}元</div>
    <div>
    <table class="drinkTable">
    <thead>
      <th class="drinkType">種類</th>
      <th class="drinkTitle">名稱</th>
      <th class="drinkMprice">M size</th>
      <th class="drinkLprice">L size</th>
    </thead>
    <tbody>
      <tr v-for='(drink,index) in drinks' :key='drink' :index='index'>
        <td class="drinkType">{{drink.type}}</td>
        <td class="drinkTitle">{{drink.title}}</td>
        <td class="drinkMprice" @click="addMprice(index)">{{drink.mprice}}</td>
        <td class="drinkLprice" @click="addLprice(index)">{{drink.lprice}}</td>
      </tr>
    </tbody>
    </table>
    </div>
  </div>
  </transition>
</template>

<script>
import { drinks } from './DrinksList.js'

export default {
  data(){
    return{
      drinks,
      drinkOrder:[],
      drinkSum:[],
      priceSum:0,
    };
  },
  methods:{
    addMprice(index){
      this.drinkOrder.push({orderTitle:this.drinks[index].title, orderSize:'中杯', orderPrice:this.drinks[index].mprice});
      this.drinkSum.push(this.drinks[index].mprice)
    },

    addLprice(index){
      this.drinkOrder.push({orderTitle:this.drinks[index].title, orderSize:'大杯', orderPrice:this.drinks[index].lprice});
      this.drinkSum.push(this.drinks[index].lprice)
    },

    deletOrder(index){
      this.drinkOrder.splice(index,1);
      this.drinkSum.splice(index,1);
    },
  },
  watch:{
    drinkSum(){
      return this.priceSum = this.drinkSum.reduce((a,b) => a+b, 0)
      }
    },
}
</script>