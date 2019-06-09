import i18n from '../_lang';

export default class AddressMatchParameter {
  constructor(options) {
    this.url = options.url;
    this.name = options.name || i18n.t('commontypes.addressMatch');
  }
}