import { withKnobs } from '@storybook/addon-knobs';
import { toI18n } from '../../.storybook/lang';

export default { title: 'Chart/liquidfill', decorators: [withKnobs] };

export const Liquidfill = () => ({
  template: `
  <sm-liquid-fill style="width:200px; height:200px" value="0.5"></sm-liquid-fill>
  `
});
Liquidfill.story = {
  name: toI18n('basicComponent.basic')
};

export const WaveLiquidfill = () => ({
  template: `
  <sm-liquid-fill 
  style="width:200px; height:200px" 
  :waveCount="2"
  :waveAnimation="true"
  value="0.5">
  </sm-liquid-fill>
  `
});
WaveLiquidfill.story = {
  name: toI18n('chartComponent.liquidfill.type')
};

export const ColorfulLiquidfill = () => ({
  template: `
  <sm-liquid-fill 
  style="width:200px; height:200px" 
  waveColor="red"
  borderColor="blue"
  labelColor="#626c91"
  insideLabelColor="#fff"
  backgroundColor="yellow"
  value="0.5">
  </sm-liquid-fill>
  `
});
ColorfulLiquidfill.story = {
  name: toI18n('chartComponent.liquidfill.color')
};
