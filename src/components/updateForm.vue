<template>
  <form @submit.prevent>
    <h2 class="text-white text-4xl">{{ menuUpdate.title }}</h2>
    <my-input
      v-focus
      v-model:value="menu.title"
      type="text"
      placeholder="New Title"
      required
      class="input-modal"
    />
    <input
      type="text"
      v-bind:value="menu.description"
      @input="menu.description = $event.target.value"
      placeholder="New Description"
      required
      class="input-modal"
    />
    <input
      type="file"
      id="file"
      class="
        block
        w-full
        text-sm text-slate-500
        file:mr-4
        file:py-2
        file:px-4
        file:rounded-full
        file:border-0
        file:text-sm
        file:font-semibold
        file:bg-violet-50
        file:text-sky-600
        hover:file:bg-blue-600 hover:file:text-white
      "
    />
    <my-button class="btn-menu" @click="updateMenu" type="submit"
      >Update</my-button
    >
  </form>
</template>

<script>
export default {
  props: {
    menuUpdate: {
      type: Object,
    },
  },
  data() {
    return {
      menu: {
        title: this.menuUpdate.title,
        logo: this.menuUpdate.logo,
        description: this.menuUpdate.description,
        hotelName: this.menuUpdate.hotelName,
        id: this.menuUpdate.id,
      },
      userData: JSON.parse(localStorage.getItem("userData")),
    };
  },
  methods: {
    async updateMenu() {
      this.file = document.getElementById("file");

      this.$emit("update", this.menu, this.file);
    },
  },
  mounted() {},
};
</script>

<style scoped>
form {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
h2 {
  margin-bottom: 10px;
}
.btn-menu {
  margin-top: 20px;
  min-width: 100%;
}
.btn-menu:hover {
  min-width: 100%;
}
.input-modal {
  min-width: auto;
  color: #fff;
}
#file {
  cursor: pointer;
  margin-top: 5px;
}
</style>
