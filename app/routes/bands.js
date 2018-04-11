import { Promise as EmberPromise } from 'rsvp';
import Route from '@ember/routing/route';

function wait(delay) {
  return new EmberPromise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, delay);
  });
}

export default Route.extend({
  async model() {
    await wait(3000);
    return this.store.findAll('band');
  },

  actions: {
    didTransition() {
      document.title = 'Bands - Rock & Roll';
    }
  }
});
