import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue';
import About from '../components/About.vue';
import Booking from '../components/Booking.vue';
import CourseList from '../components/CourseList.vue';
import Courses from '../components/Courses.vue';
import Basic from '../components/courses/Basic.vue';
import Advanced from '../components/courses/Advanced.vue';
import Extreme from '../components/courses/Extreme.vue';
import Drink from '../components/Drink/Drink.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      component: App, 
      children: [
          {path: 'About', component: About},
          {path: 'booking', component: Booking},
          {
          path: 'courses', 
          component: Courses,
          children: [
              {path: '', component: CourseList},
              {path: 'basic', component: Basic},
              {path: 'advanced', component: Advanced},
              {path: 'extreme', component: Extreme},
              ]},
          {path: 'drink', component: Drink},
      ]
    },
  ]
})
