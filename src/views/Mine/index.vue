<template>
    <div id="main">
        <Header title="我的喵喵"/>
        <div id="content">
            <router-view />
        </div>
        <TabBar />
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
//2级路由导入
import Login from '@/components/Login'
export default {
    name : 'Mine',
    components : {
        Header,
        TabBar,
        Login
    }
}
</script>

<style>

</style>