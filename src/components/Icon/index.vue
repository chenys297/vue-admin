<template>
  <i v-if="myIconfont" :class="['vue-admin-icon' , 'vue-admin-' + iconName]" :style="styles" />
  <i v-else :class="iconName" :style="styles" />
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    myIconfont: {
      type: Boolean,
      default: true
    },
    iconName: {
      type: String,
      required: true
    },
    fontSize: {
      type: [String, Number],
      default: 'inherit'
    },
    color: {
      type: String,
      default: 'inherit'
    }
  },
  data () {
    return {
      styles: {}
    }
  },

  watch: {
    fontSize: {
      handler: function (fontSize) {
        if (fontSize) {
          this.styles.fontSize = fontSize
        } else {
          this.styles.fontSize = 'inherit'
        }
      }
    },

    color: {
      handler: function (color) {
        if (color) {
          this.styles.color = color
        } else {
          this.styles.color = 'inherit'
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
