<template>
  <div>
    <div class="page__header">
      <h2>Projekte</h2>
      <w-divider color="white" />
    </div>
    <div>
      <span class="headline">Kanban-Board-App</span>
      <w-card :image="`${projectImg1}`">
        <br>
        <span class="title2">Beschreibung:</span><br><br>
        Dies ist eine Web-App welche mittels Vue3, Vue-Router und Vuex erstellt wurde.
        Als Backend wird Firbase mit ihrer Realtime-Database genutzt, dies ermöglicht Authentifizierungsfunktionen und
        das Speichern der eigenen "Task-Karten", für jeden Nutzer der sich registriert. Mittels der "Drag & Drop"-API können
        die Karten zwischen den einzelnen Kategorien verschoben werden. Das Löschen und Editieren der Karten ist ebenfalls per 
        Knopfdruck möglich.   
        <template #actions>
          <div class="spacer"></div>
          <w-button>Read more</w-button>
        </template>
      </w-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    projectImg1: `./src/images/kanban.webp`,
  }),
};
</script>

<style lang="scss" scoped>
div {
  font-family: "Roboto Condensed", sans-serif;
  width: 90vw;
  margin: 5vh auto 0 auto;
  div.page__header {
    display: block;
    margin: auto;
    h2 {
      font-size: 3rem;
      text-shadow: -3px 3px 3px black;
    }
    .w-divider {
      margin: 0;
    }
  }
}
</style>
