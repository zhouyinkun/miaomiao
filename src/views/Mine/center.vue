<template>
    <!-- <div>
        <div>个人中心</div>
        <div>当前用户：{{$store.state.user.name}} <li @touchstart="handToLogout">退出</li></div>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
    </div> -->

    <el-container>
        <el-header>喵喵个人中心，欢迎用户：{{$store.state.user.name}}</el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu default-active="1" class="el-menu-vertical-demo">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <router-link to='/Mine/users' tag='span' slot="title">用户管理</router-link>
                    </el-menu-item>
                    <el-menu-item index="2" disabled>
                        <i class="el-icon-document"></i>
                        <router-link to='/Mine/movie' tag='span' slot="title">电影管理</router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <router-link to='/Mine/cinema' tag='span' slot="title">影院管理</router-link>
                    </el-menu-item>
                    </el-menu>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
import axios from 'axios';
export default {
    name : 'center',
    methods : {
        handToLogout(){
            this.axios.get('/api2/users/loginout').then((res)=>{
                var status = res.data.status;
                if(status===0){
                    localStorage.removeItem('name');
                    this.$store.commit('user/USER_NAME',{name:''})
                    this.$router.push('/mine/login');
                }
            })
        }
    },
    beforeRouteEnter (to, from, next) {
        axios.get('/api2/users/getUser').then((res)=>{
            var status = res.data.status;
            if(status === 0){
                next(vm => {
                    localStorage.setItem('name',res.data.data.username);
                    vm.$store.commit('user/USER_NAME',{ 
                        name : res.data.data.username , 
                    });
                });
            }
            else{
                next('/mine/login');
            }
        });
    }
    
}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    padding-left: 60px;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>