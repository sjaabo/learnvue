<template>
  <base-card>
    <h2>Find your coach</h2>
    <form>
      <span class="filter-option">
        <input id="frontend" name="frontend" type="checkbox" checked @change="setFilter"/>
        <label for="frontend">Frontend</label>
      </span>
      <span class="filter-option">
        <input id="backend" name="backend" type="checkbox" checked @change="setFilter"/>
        <label for="backend">Backend</label>
      </span>
      <span class="filter-option">
        <input id="career" name="career" type="checkbox" checked @change="setFilter"/>
        <label for="career">Career</label>
      </span>
    </form>
  </base-card>
</template>

<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                frontend: true,
                backend: true,
                career: true
            }
        }
    },
    methods : {
        setFilter(event){
            const inputId  = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updatedFilters;
            this.$emit('change-filter',updatedFilters);
        }
    }

};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>