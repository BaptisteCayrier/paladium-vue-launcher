<template>
  <button class="button-container" :class="[variant, size]">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'danger',
    },
    size: {
      type: String,
      default: 'medium',
    },
    text: {
      type: String,
      default: 'Click me !',
    },
  },
  // computed: {
  //   style() {
  //     return 'background-color: ' + this.hovering ? this.color : 'red';
  //   },
  // },
};

// export default {
//   name: "SquareButton",
//   props: ["color"],
//   computed: {
//     style() {
//       return "background-color: " + this.hovering ? this.color : "red";
//     },
//   },
// data() {
//   return {
//     hovering: false,
//   };
// },
// methods: {
//   mouseOver() {
//     this.hovering = !this.hovering;
//   },
// },
// };
</script>

<style scoped>
.button-container {
  padding: 6px;
  border-radius: 3px;
}

/* Colors & Font */
.danger {
  background-color: rgba(240, 71, 71, 0.05);
  border: 1px solid rgba(240, 71, 71, 0.8);
  font-size: 12px;
  color: rgba(240, 71, 71, 0.8);
}

/* Sizes */
.medium {
  width: 100px;
  height: 30px;
}
</style>
