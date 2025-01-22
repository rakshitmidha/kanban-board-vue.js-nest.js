<template>
  <div class="column">
    <h2>
      <input v-model="column.name" @change="$emit('update-column', column)" />
      <button @click="$emit('delete-column', column.id)">Delete</button>
    </h2>
    <div class="cards">
      <draggable
        v-model="column.cards"
        :group="'cards'"
        :move="onMove"
        item-key="id"
        @start="onDragStart"
        @end="onDragEnd"
      >
        <template v-slot:item="{ element }">
          <Card :key="element.id" :card="element" />
        </template>
      </draggable>
    </div>
    <button @click="$emit('add-card', column.id)">Add Card</button>
  </div>
</template>

<script>
import Card from './Card.vue';
import draggable from 'vuedraggable';

export default {
  props: ['column'],
  components: { Card, draggable },
  methods: {
    onDragStart(evt) {
      // Handle drag start
    },
    onDragEnd(evt) {
      // Handle drag end
    },
    onMove(evt) {
      // Handle move between columns if needed
      return true;
    }
  },
  created() {
    if (!Array.isArray(this.column.cards)) {
      this.column.cards = [];
    }
  }
};
</script>
