<template>
  <div class="settings-section-container">
    <h1 class="settings-section-title">Mémoire ram</h1>
    <div class="settings-subsection-container column">
      <h1 class="settings-subsection-title">Information</h1>
      <p class="settings-subsection-content">
        Cette page permet de configurer la quantité de mémoire RAM que votre
        système d'exploitation va allouer à Paladium. <br /><br />Plus cette
        quantité est importante, plus votre jeu sera stable et aura de bonnes
        performances. <br />Toutefois, même si vous en avez beaucoup de
        disponible sur votre ordinateur, il est inutile d'allouer une très
        grande quantité de RAM à Paladium. <br /><br /><b>- RAM Maximum:</b>
        Indique la quantité totale de RAM à allouer à Paladium. Il est
        recommander de ne pas dépasser 50% de la quantité totale de RAM présente
        sur votre PC. Si votre ordinateur a plus de 8Go de RAM, nous
        recommandons d'allouer 3Go. Si votre ordinateur a 4Go ou moins,
        n'allouez pas plus de 2Go. <br /><br /><b>- RAM Minimum:</b> Indique la
        quantité minimale de RAM allouée au démarrage de Paladium. Il n'est pas
        recommandé de mettre plus de 3Go pour cette valeur. La valeur typique
        est de 1Go.
      </p>
    </div>
    <div class="settings-memory-container">
      <div class="settings-pickers-container settings-subsection-content">
        <p class="settings-memory-text"><b>RAM Maximum</b></p>
        <div class="settings-picker-slider-container">
          <vue-slider
            class="settings-picker-slider"
            v-model="maxRam"
            v-bind="options"
            @change="maxRamSliderChange()"
          >
          </vue-slider>
          <p class="settings-memory-text"><b>{{ parseFloat(maxRam).toFixed(1) }}Go</b></p>
        </div>
        <p class="settings-memory-text"><b>RAM Minimum</b></p>
        <div class="settings-picker-slider-container">
          <vue-slider
            class="settings-picker-slider"
            v-model="minRam"
            v-bind="options"
            @change="minRamSliderChange()"
          >
          </vue-slider>
          <p class="settings-memory-text"><b>{{ parseFloat(minRam).toFixed(1) }}Go</b></p>
        </div>
      </div>
      <div class="settings-subsection-content settings-memory-info-container">
        <p class="settings-memory-text">
          <b>RAM Total sur votre ordinateur :  </b>{{ totalRam.toFixed(1) }}Go
        </p>
        <p class="settings-memory-text">
          <b>RAM Total sur votre ordinateur :  </b>{{ totalRam.toFixed(1) }}Go
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getComputerMaxMemory,
  getComputerFreeMemory,
  BytesToGo,
} from '@/helpers/memory';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/antd.css';
import store from '@/store/store';

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      maxRam: localStorage.optionsMaxRam
        ? localStorage.optionsMaxRam
        : store.state.currentUser.options.maxRam,
      minRam: localStorage.optionsMinRam
        ? localStorage.optionsMinRam
        : store.state.currentUser.options.minRam,
      totalRam: BytesToGo(getComputerMaxMemory()),
      availableRam: BytesToGo(getComputerFreeMemory()),
      options: {
        dotSize: 0,
        width: '100%',
        min: 2,
        max: BytesToGo(getComputerMaxMemory()),
        interval: 0.5,
        duration: 0.5,
        adsorb: true,
        tooltip: 'none',
        dotStyle: {
          position: 'absolute',
          top: '-10px',
          width: '8px',
          height: '20px',
          backgroundColor: 'white',
          borderRadius: '3px',
          cursor: 'ew-resize',
        },
        railStyle: {
          backgroundColor: 'rgb(59, 59, 59)',
          marginRight: '16px',
          height: '7px',
          borderRadius: '3px 0px 0px 3px',
        },
        processStyle: {
          backgroundColor: 'rgb(232, 224, 144)',
          height: '7px',
          borderRadius: '3px 0px 0px 3px',
        },
        labelActiveStyle: {
          color: '#C52807',
        },
      },
    };
  },
  methods: {
    maxRamSliderChange() {
      console.log('localStorage.optionsMaxRam = ', localStorage.optionsMaxRam);
      localStorage.optionsMaxRam = this.maxRam;
      console.log('localStorage.optionsMaxRam = ', localStorage.optionsMaxRam);
    },
    minRamSliderChange() {
      console.log('localStorage.optionsMinRam = ', localStorage.optionsMinRam);
      localStorage.optionsMinRam = this.minRam;
      console.log('localStorage.optionsMinRam = ', localStorage.optionsMinRam);
    },
  },
};
</script>

<style scoped>
.settings-memory-container {
  display: flex;
  flex-direction: row;
  margin-top: 16px;
}

.settings-picker-slider-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
}

.settings-picker-slider {
  width: 300px !important;
  padding-right: 16px !important;
}

.settings-memory-text {
  margin: 0;
}

.settings-memory-info-container {
  margin-top: 0px;
  margin-left: 24px;
}

</style>
