<template>
    <transition
    name="fade"
    mode="out-in"
    appear="ture"
    appear-active-class="fadeIn"
    leave-active-class="fadeOut"
    >
    <div 
    class="courseList"
    >
    <h1>CourseList</h1>
    <div>
        <div class="course" v-for='course in courses' :key='course' >
            <div class="courseImg"/>
                <div class="text">
                <router-link :to="`/courses/${course.path}`">
                <img :src="course.img" class='list'>
                    <br/>
                <span>{{course.name}} </span>
                </router-link>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
import img1 from './../assets/imgs/SPA1.jpg';
import img2 from './../assets/imgs/SPA2.jpg';
import img3 from './../assets/imgs/SPA3.jpg';

export default {
  data(){
      return{
        courses: [
            {id: 1, img: img1, name: 'Basic Course', path:'basic'},
            {id: 2, img: img2, name: 'Advanced Course', path:'advanced'},
            {id: 3, img: img3, name: 'Extreme Course', path:'extreme'}
        ],
      }
  }
}
</script>

<style>

</style>



