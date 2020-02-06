<template>
    <!-- keep-alive:因为每次切换回重新渲染，用keep-alive可以缓存 -->
    <keep-alive>
        <router-view/>
    </keep-alive>
</template>