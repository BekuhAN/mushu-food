<template>
  <main>
    <Title :title="'Контакты'" />
    <HomeContacts />
    <ContactsForm />
  </main>
</template>

<script>
import Title from "../components/titlePage.vue";
import HomeContacts from "../components/homeContacts.vue";
import ContactsForm from "../components/contactsForm.vue";
export default {
  components: {
    Title,
    HomeContacts,
    ContactsForm,
  },
};
</script>

<style></style>
