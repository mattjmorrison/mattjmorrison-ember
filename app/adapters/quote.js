import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  urlForFindAll: function() {
    return this._super(...arguments) + '/data.json';
  }
});
