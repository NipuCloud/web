<template>
  <section class="app-footer-content">
    <transition name="fade" mode="out-in" appear>
      <Footer/>
    </transition>
  </section>
</template>

<script>
import Footer from '@/components/common/Footer'

export default {
  components: {
    Footer
  },
  name: 'AppFooter',
  computed: {
  }
}
</script>