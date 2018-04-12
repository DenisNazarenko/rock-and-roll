import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('bands.band');
  },

  actions: {
    didTransition() {
      let band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    }
  },

  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    })
  }
});
