export default {
  props: {
    isScreenshot: Boolean,
    isVideo: Boolean,
    src: String,
    mat: String,
    alt: {type: String, default: ''},
    height: {type: Number, default: 0},
    width: {type: Number, default: 0},
  },
  template: /* html */ `
    <template v-if="isScreenshot">
      <div class="image-mat" :style="{'--mat-color': mat}">
        <video v-if="isVideo" :src="src" :title="alt" autoplay muted loop playsinline></video>
        <img v-else @load="$emit('load')" :width="width" :height="height" :src="src" :alt="alt"/>
      </div>
    </template>
    <template v-else>
      <video v-if="isVideo" :src="src" :title="alt" autoplay muted loop playsinline></video>
      <img v-else @load="$emit('load')" :width="width" :height="height" :src="src" :alt="alt"/>
    </template>
  `
};