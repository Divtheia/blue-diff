<template>
    <transition
    mode="out-in"
    name="fade"
    appear="ture"
    appear-active-class="fadeInLeft"
    leave-active-class="fadeOutRight"
    >
    <div class='bookStyle'>
        <h1>Booking</h1>
        <form class='bookform'>
            姓　名　<input type="text"/>
        <br/>
            E-mail　<input type="text"/>
        <br/>
            地　址　<input type="text"/>
        <br/>
            電　話　<input type="text"/>
        <br/>
            課　程　<input type="text"/>
        <br/>
        <button type="submit" class="butn">Sibmit</button>
        </form>
    </div>
    </transition>
</template>

<script>
export default {
  
}
</script>

<style>
input {padding:5px 15px; 
    background:rgb(160, 219, 189); 
    border:0 none;
    cursor:pointer;
    margin: 5px;
    -webkit-border-radius: 10px;
    border-radius: 5px;
    color:rgb(7, 151, 55); 
    size: 20px;
    width: 30%;
    max-width: 250px;
    }

.bookStyle {
    text-align-last: center;
}
</style>
