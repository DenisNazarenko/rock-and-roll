import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  actions: {
    async signIn(event) {
      event.preventDefault();
      let { email, password } = this.getProperties('email', 'password');

      await this.transitionToRoute('bands');
    }
  }
});
