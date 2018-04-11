import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit } from '@ember/test-helpers';

module('Acceptance | Bands', function(hooks) {
  setupApplicationTest(hooks);
  test('List bands', async function(assert) {
    server.create('band', { name: 'Radiohead' });
    server.create('band', { name: 'Long Distance Calling' });

    let bandLinks = document.querySelector('.rr-band-link');

    await visit('/');

    assert.equal(bandLinks.length, 2, 'All band links are rendered');

    assert.ok(bandLinks[0].textContent.includes('Radiohead'), 'Firs band link contains the band name');
    assert.ok(bandLinks[1].textContent.includes('Long Distance Calling'), 'The other band link contains the band name');
  })
});
