import Controller from '@ember/controller';

export default Controller.extend({
  isAddingBand: false,
  newBandName: '',

  actions: {
    addBand() {
      this.set('isAddingBand', true);
    },

    cancelBand() {
      this.set('isAddingBand', false);
    },

    saveBand() {

    }
  }
});
