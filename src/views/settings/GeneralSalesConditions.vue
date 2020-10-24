<template>
  <div class="settings-section-container imaged">
    <h1 class="settings-section-title">Conditions générales de ventes</h1>
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
.terms-markdown {
  text-align: left;
}

.terms-markdown h3 {
  color: #ffffff;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.terms-markdown p {
  color: #bdbdbd;
  font-size: 14px;
}

.terms-markdown a {
  color: #bdbdbd;
  text-decoration: underline;
}

</style>
