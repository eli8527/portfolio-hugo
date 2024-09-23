import Lightbox from './lightbox';
import ImageComponent from './image';

export default {
  props: {
    isVideo: {
      type: String,
      default: 'false',
    },
    additionalClasses: {
      type: String,
      default: ''
    },
    isScreenshot: {
      type: String,
      default: 'false',
    },
    src: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '0'
    },
    height: {
      type: String,
      default: '0'
    },
    title: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
    mat: {
      type: String,
      default: ''
    },
    disableInteraction: {
      type: String,
      default: 'false',
    },
  },
  computed: {
    isScreenshotBool: function() {
      return this.isScreenshot === 'true';
    },
    isVideoBool: function() {
      return this.isVideo === 'true';
    },
    disableInteractionBool: function() {
      return this.disableInteraction === 'true';
    },
    widthNum: function() {
      return parseInt(this.width);
    },
    heightNum: function() {
      return parseInt(this.height);
    },
  },
  components: {
    Lightbox,
    ImageComponent,
  },
  mounted() {

  },
  data() {
    return {
      showLightbox: false,
      loaded: false,
    }
  },
  template: /* html */ `
    <figure v-show="loaded || isVideoBool">
      <button v-if="!disableInteractionBool" @click="showLightbox = true">
        <image-component
          :class="additionalClasses"
          :src="src"
          :mat="mat"
          :height="heightNum"
          :width="widthNum"
          :alt="title"
          :is-screenshot="isScreenshotBool"
          :is-video="isVideoBool"
          @load="loaded = true"
        />
      </button>
      <image-component
        v-else
        :class="additionalClasses"
        :src="src"
        :mat="mat"
        :height="heightNum"
        :width="widthNum"
        :alt="title"
        :is-screenshot="isScreenshotBool"
        :is-video="isVideoBool"
        @load="loaded = true"
        />
      <figcaption v-if="caption.length > 0">
        <p v-html="caption" />
      </figcaption>
    </figure>
    <lightbox 
      v-if="showLightbox && !disableInteractionBool"
      @close="showLightbox = false" 
      >
      <image-component
        :class="additionalClasses"
        :src="src"
        :mat="mat"
        :height="heightNum"
        :width="widthNum"
        :alt="title"
        :is-screenshot="isScreenshotBool"
        :is-video="isVideoBool"
      /> 
    </lightbox>
  `
}