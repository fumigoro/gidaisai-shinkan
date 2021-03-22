<template>
  <div class="container">
    <h2 class="mt-5 h2">部署紹介</h2>
    <p class="lead">
      岐大祭執行委員会では、多岐にわたるお仕事を部署ごとにこなしています。
    </p>
    <p class="lead">
      1年生は最初、主に企画部や広報局デザイン担当の中から希望部署を選ぶことができます。
    </p>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div v-for="(department, key) in departments" :key="key" class="col">
        <a v-bind:href="'/shinkan' + department.path"> </a>
        <div class="card shadow-sm">
          <div class="card-body">
            <h1 class="card-title">{{ department.name }}</h1>
            <p class="card-text">{{ department.description }}</p>
            <p class="text-muted">構成：{{ department.grade }}</p>
          </div>
        </div>
      </div>
    </div>

    <a href="/shinkan/" class="btn btn-primary" role="button"
      >Topへ</a
    >
    <p></p>
  </div>
</template>
<script>
export default {
  components: {},
  async asyncData({ $content }) {
    const departments = await $content("departments").sortBy("index").fetch();

    return {
      departments,
    };
  },
};
</script>
<style>
.h2 {
  /* font-size: 3rem; */
  margin: 30px 0;
  border-bottom: 3px solid rgb(87, 174, 255);
  max-width: 15rem;
  /* color: rgb(38, 150, 255); */
}

.card-title {
  text-align: center;
  color: rgb(38, 150, 255);
  margin: 2rem 0;
}
.col {
  padding: 1rem;
}
.col a {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99;
}
.col a:hover {
  background-color: rgb(255, 255, 255);
  opacity: 0.4;
}
</style>