export default {
  props: {
    src: String,
    isVideo: Boolean,
    alt: String,
  },
  methods: {
    keyHandler(evt) {
      if (evt.key === "Escape") {
        this.$emit('close');
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", this.keyHandler);
    document.body.classList.add('frozen');
  },
  unmounted() {
    document.removeEventListener("keydown", this.keyHandler);
    document.body.classList.remove('frozen');
  },
  template: /* html */ `
    <div class="lightbox">
      <button class="lightbox__close" @click="$emit('close')">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="sprite--close"
          >
          <line x1="1" y1="1" x2="23" y2="23" vector-effect="non-scaling-stroke" />
          <line x1="1" y1="23" x2="23" y2="1" vector-effect="non-scaling-stroke" />
        </svg>
      </button>
      <slot></slot>
    </div>
  `
};