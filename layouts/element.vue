<template>
  <el-container class="p-0">
    <el-header>
      <el-menu
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :ellipsis="false"
        :router="true"
        :default-active="$route.path"
      >
        <el-menu-item index="0">LOGO</el-menu-item>
        <div style="flex-grow: 1" />
        <el-menu-item index="/"> Home </el-menu-item>
        <el-menu-item index="/element"> Element </el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
      </el-menu>
    </el-header>
    <el-main> <slot /> </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script setup lang="ts"></script>
