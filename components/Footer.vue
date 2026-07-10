<template>
  <div class="container smallest mb-3 py-2 bg-white text-muted">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-3 mb-3">
                <div class="mb-1">
                  <img src="https://epkl3.netlify.app/img/LOGO-SMKN4.b83eb212.png" alt="logo SMKN 4 tasikmalaya" class="logo me-2">
                  <img src="https://epkl3.netlify.app/img/logo.12ce1e81.png" alt="logo SMKN 4 tasikmalaya" class="logo">
                </div>
                e-PKL merupakan aplikasi Pemetaan dan Jurnal Peserta Praktik Kerja Lapangan yang
                membentuk ekosistem internal meliputi Siswa, Guru, TU, Jurusan, Kepala Sekolah dan Wakasek.
              </div>

              <div class="col-md-3 mb-3">
                <div class="fs-5">Alamat</div>
                Jl.Depok, Sukamenak, Purbaratu <br>
                Kota tasikmalaya - 46196 <br>
                Jawa Barat
              </div>

              <div class="col-md-3">
                <div class="fs-5">Tautan</div>
                <ul>
                  <li><NuxtLink to="https://kemendikdasmen.go.id" target="_blank" class="link-external text-muted">Kemendikdasmen</NuxtLink></li>
                  <li><NuxtLink to="https://disdik.jabarprov.go.id" target="_blank" class="link-external text-muted">Disdik Jawa Barat</NuxtLink></li>
                  <li><NuxtLink to="https://smkn4-tsm.sch.id" target="_blank" class="link-external text-muted">SMKN 4 Tasikmalaya</NuxtLink></li>
                </ul>
              </div>

              <div class="col-md-3">
                <div class="fs-5">Kontak</div>
                <ul>
                  <li>0265-312059</li>
                  <li><NuxtLink to="mailto:info@smkn4-tsm.sch.id" class="link-external text-muted">info@smkn4-tsm.sch.id</NuxtLink></li>
                </ul>
              </div>
            </div>

            <hr>

            <div class="row">
              <div class="col-md-12">
                <div class="text-center">
                  &copy;2018 - {{ year }} e-PKL Website. <br>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div> <!-- ./col-md-12 -->
    </div> <!-- ./row -->

  </div>
</template>


<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
ul {
  padding-left: 0;
}

ul li {
  list-style: none;
  padding-bottom: .4rem;
}

.logo {
  width: 35px;
}

.smaller {
  font-size: smaller;
}
</style>
