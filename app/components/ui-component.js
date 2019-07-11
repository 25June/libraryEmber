import Component from '@ember/component';

export default Component.extend({
  actions: {
    showUI(item) {
      alert(item);
    }
  }
});
