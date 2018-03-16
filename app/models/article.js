import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  tags: DS.hasMany('tag')
});
