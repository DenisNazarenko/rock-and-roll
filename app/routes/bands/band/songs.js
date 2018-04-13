import Route from '@ember/routing/route';
import { capitalize as capitalizeWords } from 'rock-and-roll/helpers/capitalize';

export default Route.extend({
  model() {
    return this.modelFor('bands.band');
  },

  actions: {
    didTransition() {
      let band = this.modelFor('bands.band');
      let name = capitalizeWords(band.get('name'));
      document.title = `${name} songs - Rock & Roll`;
    }
  },

  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    })
  }
});
