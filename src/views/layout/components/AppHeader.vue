<template>
  <section class="app-header-content">
    <transition name="fade" mode="out-in" appear>
      <Header/>
    </transition>
  </section>
</template>

<script>
import Header from '@/components/common/Header'

export default {
  components: {
    Header
  },
  name: 'AppHeader',
  computed: {
  }
}
</script>