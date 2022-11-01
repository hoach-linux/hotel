<template>
  <form @submit.prevent>
    <h2 class="text-white text-4xl">Create Menu</h2>
    <my-input
      v-focus
      v-model:value="menu.title"
      type="text"
      placeholder="Title"
      required
      minlength="1"
      class="input-modal"
    />
    <input
      type="text"
      v-bind:value="menu.description"
      @input="menu.description = $event.target.value"
      placeholder="Description"
      required
      minlength="1"
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
    <my-button class="btn-menu" @click="canClickBtn" type="submit">Create</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      menu: {
        title: "",
        logo: "",
        description: "",
      },
    };
  },
  methods: {
    createMenu() {
      this.file = document.getElementById("file");

      this.$emit("create", this.menu, this.file);

      this.menu = {
        title: "",
        logo: "",
        description: "",
      };
    },
    canClickBtn() {
      this.file = document.getElementById("file");

      let myInput = document.querySelector(".input-modal");
      if (this.file.files[0] == undefined) alert("Please choose a file");
      if (myInput.value.length >= 1 && this.file.files[0] != undefined)
        return this.createMenu();
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
