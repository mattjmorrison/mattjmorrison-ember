import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  store: service(),
  currentTag: '',
  currentArticles: '',
  tags: computed(function() {
    return this.get('store').findAll('tag');
  }),
  sortedTags: computed('tags.@each', function() {
    return this.get('tags').sortBy('name');
  }),
  actions: {
    selectTag(tag) {
      this.get('tags').forEach((tag) => {
        tag.set('active', false);
      });
      tag.set('active', true);
      this.set('currentTag', tag);
      this.set('currentArticles', tag.get('articles'));
    }
  }
});
