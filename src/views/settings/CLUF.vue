<template>
  <div class="settings-section-container imaged">
    <h1 class="settings-section-title">CLUF</h1>
    <div class="settings-subsection-container column">
      <VueMarkdown class="terms-markdown">{{ cgvMd }}</VueMarkdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
// eslint-disable-next-line
import cgvMd from 'raw-loader!@/assets/terms/cgv.md';

export default {
  components: {
    VueMarkdown,
  },
  data() {
    return {
      cgvMd,
    };
  },
  methods: {
    getContent() {
      this.fileContent = cgvMd;
    },
  },
};
</script>

<style>
</style>
