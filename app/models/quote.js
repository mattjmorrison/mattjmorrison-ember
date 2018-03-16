import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  attribution: DS.attr('string')
});
