<template>
    <transition
    name="fade"
    mode="out-in"
    appear="ture"
    appear-active-class="fadeInLeft"
    leave-active-class="bounceOut"
    >
        <div 
        class="extreme"
        style="animation-duration:2s"
        >
            <img src="../../assets/imgs/SPA3.jpg" width="30%" style="display:block; margin:auto;" />
            <router-link to='/courses/#'>＜Back</router-link>
            <router-view/>
            <h2>Basic Course</h2>
            <p>Nunc convallis auctor viverra. Nullam tincidunt leo eu neque egestas, efficitur fringilla magna dictum. Nullam tristique tortor a porta egestas. Nulla vel lacinia libero, sed ornare erat. Donec quam magna, rutrum posuere pretium in, aliquam non neque. Aliquam finibus velit aliquam nisi consectetur, vel posuere velit ultrices. Proin at purus nisl. Suspendisse in est id sem ullamcorper viverra. Phasellus quis lectus sed sapien ultricies rhoncus ac quis leo. Donec at orci metus. Morbi feugiat leo non purus dapibus, sed sagittis felis facilisis. Donec auctor lectus eget justo suscipit fringilla. Fusce justo sem, dignissim aliquam posuere a, dapibus vitae dolor. Pellentesque imperdiet vestibulum tellus. Sed elementum quam massa, et hendrerit urna molestie eget. </p>    
        </div>
    </transition>
</template>

<script>
export default {
    
}
</script>
