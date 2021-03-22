<template>
  <div class="container document">
    <h2 class="mt-5 h2">{{ departments.name }}</h2>
    <p class="lead">{{ departments.description }}</p>
    <p class="lead">主に{{ departments.grade }}で構成されます。</p>

    <div class="row">
      <nuxt-content :document="departments" />
    </div>
    <a href="departments/" class="btn btn-primary" role="button"
      >部署紹介Topへ</a
    >
    <p></p>

  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ $content, params }) {
    const departments = await $content(`departments/${params.slug}`).fetch();

    return {
      departments,
    };
  },
};
</script>

<style>
h2 {
  /* font-size: 3rem; */
  margin: 30px 0;
  border-bottom: 3px solid rgb(87, 174, 255);
  /* max-width: 15rem; */
  /* color: rgb(38, 150, 255); */
}
.nuxt-content-container,
.nuxt-content {
  padding: 0 10px;
}

h3 {
  font-size: 1.2rem;
  color: rgb(87, 174, 255);
  border-left: 3px solid rgb(87, 174, 255);
  padding-left: 1rem;
}

p {
  font-weight: 200;
}

h4 {
  font-size: 1.1rem;
}

img {
  width: 100%;
  max-width: 500px;
  margin: 10px 0;
}
</style>

