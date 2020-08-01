<template>
  <i v-if="myIconfont" :class="['vue-admin-icon' , 'vue-admin-' + name]" :style="styles" />
  <i v-else :class="'el-icon-' + name" :style="styles" />
</template>

<script>
import { isNumber } from '@/utils'
export default {
  name: 'SvgIcon',
  props: {
    myIconfont: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      required: 'true'
    },
    size: {
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
    size: {
      handler: function (size) {
        if (isNumber(size)) {
          size += 'px'
        }
        if (size) {
          this.styles.fontSize = size
        } else {
          this.styles.fontSize = 'inherit'
        }
      },
      immediate: true
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
