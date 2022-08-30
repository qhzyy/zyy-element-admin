<template>
  <div class="">
    <logo />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :collapse-transition="false"
        mode="vertical"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="4" :route="{ path: '/doc/index' }">
          <i class="el-icon-setting" />
          <span slot="title">导航一111</span>
        </el-menu-item>
        <el-menu-item index="2" :route="{ path: '/doc2/index' }">
          <i class="el-icon-menu" />
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document" />
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from './Logo.vue'
// import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.scss'
import { constantRoutes } from '@/router'

export default {
  components: {
    Logo
  },
  computed: {
    variables() {
      return variables
    }
  },
  created() {
    console.log('constantRoutes', constantRoutes)
    // 将来用到人 permission_routes 就是现在的 constantRoutes
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
