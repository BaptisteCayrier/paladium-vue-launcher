<template>
  <div class="settings-container">
    <div class="settings-panel-left">
      <nav class="settings-nav-container">
        <p class="settings-nav-section-title">Paramètres utilisateur</p>
        <router-link class="settings-nav-item" to="/settings/account"
          >Mon compte</router-link
        >
        <div class="settings-nav-section-divider" />
        <p class="settings-nav-section-title">Paramètres Java</p>
        <router-link class="settings-nav-item" to="/settings/memory"
          >Mémoire Ram</router-link
        >
        <router-link class="settings-nav-item" to="/settings/java-executable">
          Exécutable Java
        </router-link>
        <div class="settings-nav-section-divider" />
        <router-link
          class="settings-nav-item"
          to="/settings/general-sales-conditions"
        >
          Conditions générales de vente
        </router-link>
        <router-link class="settings-nav-item" to="/settings/privacy-policy">
          Politique de confidentialité
        </router-link>
        <router-link class="settings-nav-item" to="/settings/cluf">
          CLUF (EULA)
        </router-link>
        <div class="settings-nav-section-divider" />
        <router-link class="settings-nav-item save" to="/" exact>
          Sauvegarder
        </router-link>
        <div class="settings-nav-section-divider" />
        <div class="settings-nav-social-container">
          <a href="https://discord.gg/paladium" class="settings-nav-social-icon"><Discord class="settings-nav-social-icon" width="30px" height="30px" /></a>
        </div>
      </nav>
    </div>

    <div class="settings-panel-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Discord from '@/assets/icons/brands/Discord.vue';

export default {
  components: {
    Discord,
  },
};
</script>

<style scoped>
.settings-container {
  display: flex;
  flex-direction: row;
  background-color: red;
  border-radius: 10px;
  margin: 32px;
  overflow: auto;
}

.settings-panel-left {
  width: 20%;
  overflow-y: auto;
  background-color: #2b2b2b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
}

.settings-panel-right {
  width: 80%;
  overflow-y: auto;
  background-color: rgba(51, 51, 54);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Navigation Menu */
.settings-nav-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: #ffffff;
}

.settings-nav-section-divider {
  border-bottom: solid 1px #838383;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.settings-nav-section-title {
  font-family: "Roboto Light";
  font-size: 16px;
  text-transform: uppercase;
  width: fit-content;
}

/* Basic item */
.settings-nav-item {
  padding: 8px 10px;
  background: none;
  border: none;
  text-align: left;
  color: #838383;
  font-size: 13px;
  cursor: pointer;
  border-radius: 3px;
  font-family: "Roboto Light";
  text-decoration-line: none;
}

.settings-nav-item:hover {
  background-color: rgba(59, 59, 59, 0.5);
  color: rgba(255, 255, 255, 0.8);
}

.settings-nav-item.router-link-active {
  background-color: rgba(59, 59, 59);
}

.settings-nav-item.router-link-exact-active {
  background-color: rgba(59, 59, 59);
}

/* Save button */
.settings-nav-item.save {
  color: rgba(11, 199, 92);
}

.settings-nav-item.save.router-link-active,
.settings-nav-item.save.router-link-exact-active .settings-nav-item.save:hover {
  background-color: rgba(11, 199, 92, 0.1);
}

/* Social items */
.settings-nav-social-container {
  display: flex;
  flex-direction: row;
}

.settings-nav-social-icon > * {
  cursor: pointer;
  color: #838383;
}

.settings-nav-social-icon:hover {
  color: #ffffff;
}
</style>
