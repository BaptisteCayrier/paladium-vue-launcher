<template>
  <div class="settings-section-container imaged">
    <h1 class="settings-section-title">Politique de confidentialité</h1>
    <div class="settings-subsection-container column">
      <VueMarkdown class="terms-markdown">{{ pdcMd }}</VueMarkdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
// eslint-disable-next-line
import pdcMd from 'raw-loader!@/assets/terms/pdc.md';

export default {
  components: {
    VueMarkdown,
  },
  data() {
    return {
      pdcMd,
    };
  },
};
</script>

<style>
</style>
