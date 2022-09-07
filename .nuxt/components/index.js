export { default as Calendar } from '../../components/Calendar.vue'
export { default as Categories } from '../../components/Categories.vue'
export { default as Contact } from '../../components/Contact.vue'
export { default as DaySelector } from '../../components/DaySelector.vue'
export { default as FilterSelector } from '../../components/FilterSelector.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Listing } from '../../components/Listing.vue'
export { default as Modal } from '../../components/Modal.vue'
export { default as Twitter } from '../../components/Twitter.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
