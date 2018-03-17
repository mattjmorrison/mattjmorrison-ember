import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  store: service(),
  quotes: computed(function() {
    return this.get('store').findAll('quote');
  }),
  random: computed('quotes.@each', function() {
    if (this.get("quotes.length")) {
      var index = Math.floor(Math.random() * Math.floor(this.get('quotes.length') - 1)) + 1;
      return this.get('store').peekRecord('quote', index);
    }
  })
});
