<script type="text/javascript">
  import Vue from 'vue'
  const VueResource = require('vue-resource')
  Vue.use(VueResource)
  Vue.http.interceptors.push((request, next)  => {
    request.headers.set('Authorization',"test-jwt");
    if(localStorage.getItem('jwt')){
      console.log(true)
    }
    else{
      console.log(false)
      
    }
    // continue to next interceptor
    next((response) => {
      if (response.status && response.status.code === 401) {
        localStorage.removeItem('jwt-token')
      }
      if (response.headers && response.headers.Authorization) {
        localStorage.setItem('jwt-token', response.headers.Authorization)
      }
      if (response.entity && response.entity.token && response.entity.token.length > 10) {
        localStorage.setItem('jwt-token', 'Bearer ' + response.entity.token)
      }
    });
  });
</script>
