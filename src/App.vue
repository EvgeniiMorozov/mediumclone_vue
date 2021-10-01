<template>
  <div id="app">
    <mcv-topbar />
    <router-view />
  </div>
</template>

<script>
import McvTopbar from '@/components/TopBar'
import {actionsTypes} from '@/store/modules/auth'

export default {
  name: 'McvApp',
  components: {
    McvTopbar
  },
  mounted() {
    console.log('hello app')
    this.$store.dispatch(actionsTypes.getCurrentUser)
  }
}
</script>

<style></style>
