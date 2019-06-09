import globalEvent from '../_utils/global-event';

export default {
  props: {
    background: {
      type: String,
      default: 'rgba(255,255,255,0.6)'
    },
    textColor: {
      type: String,
      default: '#333'
    }
  },
  watch: {
    background: function(newValue) {
      this.backgroundData = newValue;
    },
    textColor: function(newValue) {
      this.textColorsData = newValue;
    }
  },
  data() {
    let theme = globalEvent.theme;
    return {
      backgroundData: (theme && theme.background) || this.background,
      textColorsData: (theme && theme.textColor) || this.textColor,
      colorGroupsData: (theme && theme.colorGroup) || ['#3fb1e3', '#6be6c1', '#626c91', '#a0a7e6', '#c4ebad', '#96dee8']
    };
  },
  mounted() {
    globalEvent.$on('change-theme', themeStyle => {
      this.backgroundData = themeStyle.background;
      this.textColorsData = themeStyle.textColor;
      this.colorGroupsData = themeStyle.colorGroup;
      this.$emit('themeStyleChanged');
      // this.themeStyle = Object.assign({}, this.themeStyle, themeStyle)
    });
  },
  computed: {
    getBackgroundStyle() {
      return {
        background: this.backgroundData
      };
    },
    getTextColorStyle() {
      return {
        color: this.textColorsData
      };
    },
    getBackground() {
      return this.backgroundData;
    },
    getTextColor() {
      return this.textColorsData;
    }
  },
  methods: {
    getColorStyle(index) {
      return {
        color: this.colorGroupsData[index]
      };
    },
    getColor(index) {
      return this.colorGroupsData[index];
    }
  }
};