<template>
  <div class="settings-section-container">
    <h1 class="settings-section-title">Java exécutable</h1>
    <div class="settings-subsection-container column">
      <h1 class="settings-subsection-title">Information</h1>
      <p class="settings-subsection-content">
        Cette page permet d'indiquer à Paladium l'emplacement de l'exécutable
        Java.<br /><br />
        Le launcher utilise une version embarquée de Java
        <i>(Java 8 update 51)</i>, si celui-ci n'est pas déjà installé sur votre
        ordinateur.
      </p>
      <p
        v-if="isWin32"
        class="settings-subsection-content"
      >
        Cette version est disponible dans le répertoire
        %appdata%/.paladium/runtime.<br /><br />
        Toutefois, vous pouvez spécifier votre propre exécutable.
        <br />Celui-ci se trouve très souvent à cet emplacement:
        <br />C:\Program Files\Java\jre1.8.0_XXX\bin
        <i>(avec XXX le numéro du build de la version)</i> <br /><br />Deux
        versions de l’exécutable sont disponible dans ce répertoire: <br />
        - java.exe<br />
        - javaw.exe<br /><br />

        Leur fonctionnement est quasi-identique. Java.exe présente l'avantage
        d'écrire les logs pendant l’exécution du jeu, tandis que javaw.exe se
        contente de lancer le jeu.
        <br />Par défaut, utilisez javaw.exe, sauf si vous avez besoin de faire
        du débogage avec la console du launcher..
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isWin32: navigator.platform === 'Win32',
    };
  },
};
</script>

<style>
</style>
