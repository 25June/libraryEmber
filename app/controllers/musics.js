import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByAuthor(param) {
      if(param !== '') {
        return this.store.query('music', {author: param});
      } else {
        return this.store.findAll('music');
      }
    }
  }
});
