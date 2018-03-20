import Controller from '@ember/controller';
import Band from 'rock-and-roll/models/band';

import { empty } from '@ember/object/computed';

export default Controller.extend({
  isAddingBand: false,
  newBandName: '',

  isAddButtonDisabled: empty('newBandName'),

  actions: {
    addBand() {
      this.set('isAddingBand', true);
    },

    cancelBand() {
      this.set('isAddingBand', false);
    },

    saveBand() {
      let newBand = Band.create({ name: this.get('newBandName')});
      this.get('model').pushObject(newBand);
      this.set('newBandName', '');
    }
  }
});
