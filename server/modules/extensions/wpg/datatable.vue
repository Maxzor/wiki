<template lang='pug'>
  v-data-table(
    :items='data'
    :page.sync='pagination'
    :items-per-page='15'
    :loading='loading'
  )
    template(slot='no-data')
      v-alert.ma-3(icon='mdi-alert', :value='true', outlined, color='grey')
        em.caption {{$t('profile:pages.emptyList')}}
  .text-center.py-2.animated.fadeInDown(v-if='this.pageTotal > 1')
    v-pagination(v-model='pagination', :length='pageTotal')
</template>

<script>
export default {
  props: {
    myProp: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      selectedPage: {},
      pagination: 1,
      pages: [],
      loading: false
    }
  },
  computed: {
    pageTotal () {
      return Math.ceil(this.pages.length / 15)
    }
  },
  methods: {
    goToPage(id) {
      window.location.assign(`/i/` + id)
    }
  }
}
</script>

<style lang='scss'>

</style>
