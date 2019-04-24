<template>
    <transition
    name="fade"
    mode="out-in"
    appear="ture"
    appear-active-class="fadeInLeft"
    leave-active-class="bounceOut"
    >
        <div 
        class="advanced"
        style="animation-duration:2s"
        >
            <img src="../../assets/imgs/SPA2.jpg" width="30%" style="display:block; margin:auto;" />
            <router-link to='/courses'>＜Back</router-link>
            <router-view/>
            <h2>Basic Course</h2>
            <p>In non sagittis dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam eu volutpat eros. Suspendisse condimentum mi et metus cursus, quis consectetur lacus varius. Maecenas lobortis urna justo, ac congue ligula euismod eu. Nulla bibendum tellus ac est efficitur vehicula. Fusce felis est, pretium nec justo id, suscipit gravida neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lobortis, nisl at ultrices condimentum, eros dui rutrum neque, eu efficitur nulla enim id leo. Morbi convallis blandit tellus, id auctor orci finibus ut. Donec non fringilla ante, vel porttitor nisi. Morbi at enim a elit dapibus sollicitudin id a ipsum. </p> 
        </div>
    </transition>
</template>

<script>
export default {
    
}
</script>
