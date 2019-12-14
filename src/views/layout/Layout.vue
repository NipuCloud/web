<template>
  <div class="page-frame-layout">
    
    <div class="main-header">
      <app-header/>
    </div>

    <div class="main-container">
      <app-main/>
    </div>

    <div class="main-footer">
      <app-footer/>
    </div>
    
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>