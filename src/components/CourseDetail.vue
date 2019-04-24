<template>
<div>
<h1>{{$route.params.name}}</h1>
<router-link to="/courses">Back</router-link>
<h2>{{$route.params.id}}</h2>
<h3>{{courses}}</h3>
<router-view/>
</div>
</template>

<script>
import CourseList from'./CourseList.vue'
export default {
  components:{
      CourseList,
  },
  data(){
      return {
          courses,
      };
  },
}
</script>