<template>
  <div class="settings-section-container">
    <h1 class="settings-section-title">Mon compte</h1>
    <div v-show="user" class="settings-subsection-container account">
      <img :src="'https://mc-heads.net/head/' + user.name" class="settings-account-picture" />
      <div class="settings-account-info-container">
        <h1 class="settings-subsection-title">Nom d'utilisateur</h1>
        <span class="settings-subsection-content" v-if="user">{{ user.name }}</span>
        <h1 class="settings-subsection-title">Email</h1>
        <span class="settings-subsection-content" v-if="user">{{ user.email }}</span>
      </div>
      <Button variant="danger" text="Déconnexion" class="settings-account-logout-button"/>
    </div>
  </div>
</template>

<script>
import store from '@/store/store';
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
  computed: {
    user() {
      return store.state.currentUser;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

/* Global style that may be move out of here */
.settings-section-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 94%;
  padding: 32px;
}
.settings-section-container.imaged {
  background-image: url('../../assets/images/header.png');
  background-repeat: no-repeat;
}

.settings-section-title {
  font-family: "Roboto Light";
  color: #ffffff;
  text-transform: uppercase;
  font-size: 18px;
}

.settings-subsection-container {
  display: flex;
  padding: 20px;
  width: 96%;
  background-color: rgb(43, 43, 46);
  border: solid 1px rgb(39, 39, 40);
  border-radius: 3px;
  max-height: 500px;
  overflow-y: scroll;
}

.settings-subsection-container.column {
  flex-direction: column;
  align-items: flex-start;
}

.settings-subsection-title {
  font-family: "Roboto Light";
  color: #ffffff;
  font-size: 11px;
  text-transform: uppercase;
  margin: 0;
}

.settings-subsection-content {
  color: #838383;
  font-size: 13px;
  margin-bottom: 10px;
  text-align: start;
}

/* Specific styles */
.settings-subsection-container.account {
  align-items: center;
}

.settings-account-info-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 16px;
}

.settings-account-picture {
  width: 10%;
}

.settings-account-logout-button {
  margin-left: auto;
  align-self: flex-start;
}

</style>
