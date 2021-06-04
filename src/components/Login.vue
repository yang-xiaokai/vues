<template>
    <el-form ref="loginForm" :model="loginForm" label-width="80px" id="loginCla">
        <div>
            <input type="text">
            <input type="text">
        </div>
    </el-form>
</template>
import axios from "../api/common";
<script>

  export default {
    name:"Login",
    data() {
      return {
        loginForm: {
          userName: '',
          passWord: ''
        }
      };
      //https://github.com/yang-xiaokai/vues.git
    },
    methods: {
      login(){
        console.log(loginForm.userName);
        console.log(loginForm.passWord);
          this.axios.put('/login',this.loginForm).then((res=>{
            this.loginForm=res.data.data
              console.log(userName);
              console.log(passWord);

          }))
      }
    }
  }
</script>

<style scoped>
  #loginCla{
    width: 500px;
   margin: 0% auto;
   height: 50%;
   margin-bottom: 0px;


  }


</style>