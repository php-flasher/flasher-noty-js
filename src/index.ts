import Flasher, { Envelope, FlasherInterface, FlasherOptions } from '@flasher/flasher';
import Noty from 'noty';

import 'noty/lib/noty.css';
import 'noty/lib/themes/mint.css';

export default class NotyFactory implements FlasherInterface {
  render(envelope: Envelope): void {
    const { notification } = envelope;

    const options: Noty.Options = {
      text: notification.message,
      type: notification.type,
      ...notification.options,
    } as Noty.Options;

    new Noty(options).show();
  }

  renderOptions(options: FlasherOptions): void {
    Noty.overrideDefaults(options);
  }
}

const flasher = Flasher.getInstance();
flasher.addFactory('noty', new NotyFactory());
