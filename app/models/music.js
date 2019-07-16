import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  author: DS.attr('string'),
  image: DS.attr('string'),
  youtube: DS.attr('string'),
});
