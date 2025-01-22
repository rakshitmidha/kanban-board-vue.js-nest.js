<template>
  <div id="app">
    <h1>Kanban Board</h1>
    <div class="board">
      <Column
        v-for="column in columns"
        :key="column.id"
        :column="column"
        @update-column="updateColumnName"
        @delete-column="deleteColumn"
        @add-card="addCard"
      />
    </div>
    <button @click="addColumn">Add Column</button>
  </div>
</template>

<script>
import axios from 'axios';
import Column from './components/Column.vue';
import draggable from 'vuedraggable';

export default {
  components: { Column, draggable },
  
  data() {
    return {
      columns: [],
    };
  },
  methods: {
    async fetchColumns() {
      const response = await axios.get('http://localhost:3000/columns');
      this.columns = response.data;
    },
    
    async addColumn() {
      const response = await axios.post('http://localhost:3000/columns', {
        name: 'New Column',
      });
      this.columns.push(response.data);
    },
    
    async deleteColumn(id) {
      await axios.delete(`http://localhost:3000/columns/${id}`);
      this.columns = this.columns.filter((col) => col.id !== id);
    },
    
    async updateColumnName(column) {
      await axios.patch(`http://localhost:3000/columns/${column.id}`, {
        name: column.name,
      });
    },
    
    async addCard(columnId) {
      const column = this.columns.find((col) => col.id === columnId);
      const newCard = { id: Date.now(), title: 'New Card' };
      column.cards.push(newCard);
    },
  },
  
  async mounted() {
    await this.fetchColumns();
  },
};
</script>
