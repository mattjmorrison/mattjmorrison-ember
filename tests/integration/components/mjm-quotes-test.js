import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mjm-quotes', 'Integration | Component | mjm quotes', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mjm-quotes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mjm-quotes}}
      template block text
    {{/mjm-quotes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
