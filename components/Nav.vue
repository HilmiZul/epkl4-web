<template>
  <nav class="navbar navbar-expand fixed-top bg-white border-bottom border-2 border-dark">
    <div class="container">
      <NuxtLink class="navbar-brand lexend-mega mx-auto">
        <span class="py-1 px-2 text-bg-dark fs-4">e-PKL</span> <br>
        <span class="mt-1 quicksand smaller text-muted">SMKN 4 Tasikmalaya.</span>
      </NuxtLink>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list-nested"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <NuxtLink to="https://guru.epkl.web.id" target="_blank" class="btn btn-success btn-sm border border-2 border-dark nav-link fw-bold" aria-current="page">Guru <i class="bi bi-box-arrow-up-right"></i></NuxtLink>
          <NuxtLink to="https://siswa.epkl.web.id" target="_blank" class="btn btn-warning btn-sm border border-2 border-dark nav-link fw-bold" aria-current="page">Siswa <i class="bi bi-box-arrow-up-right"></i></NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.smaller {
  font-size: .9rem;
}
</style>
