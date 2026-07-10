<template>
  <div class="row mb-5 justify-content-center">
    <div class="col hero">
      <Permendikbud />
    </div>
  </div>

  <div class="row mb-5" id="epkl">
    <div class="col-md-9">
      <img src="~/assets/img/illustration.webp" alt="illustraion" class="illustration">
    </div> <!-- close ./col-md-8 -->

    <div class="col-md-3 bg-white">
      <div class="fs-3 fw-bold">Apa itu e-PKL?</div>
      <p>
        Aplikasi pemetaan dan jurnal peserta Praktik Kerja Lapangan. <br>
        <span class="fw-bold border-bottom border-2 border-dark">EKOSISTEM</span> dibangung disini!
      </p>
      <button class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#video"><i class="bi bi-camera-video"></i> Tonton video</button>
    </div>

    <div class="modal" id="video" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-body">
            <iframe src="https://drive.google.com/file/d/1Uj_aV41lSi223ZzVexYuLfR0MJzvcmrF/preview" width="100%" height="480"></iframe>
            <!-- <video controls width="100%" height="480"> -->
            <!--   <source src="https://drive.google.com/file/d/1Uj_aV41lSi223ZzVexYuLfR0MJzvcmrF/view" type="video/mp4" /> -->
            <!-- </video> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row mb-5">
    <div class="col-md-3 bg-white">
      <div class="fs-3 fw-bold">Pemetaan.</div>
      <p>Siswa berkonsultasi dan mendapatkan rekomendasi tempat PKL dari Kaprog. Biarkan TU mencetak surat.</p>
    </div>
    <div class="col-md-9">
      <img src="~/assets/img/roadmap-pemetaan.webp" alt="illustraion" class="illustration">
    </div> 
  </div>

  <div class="row mb-5">
    <div class="col-md-9">
      <img src="~/assets/img/journaling.webp" alt="illustraion" class="illustration">
    </div> 
    <div class="col-md-3 bg-white">
      <div class="fs-3 fw-bold">Journaling.</div>
      <p>
        <span class="fw-bold">Realtime</span>. Paperless. Friendly. <br>
        Tap ❤️ to validation! <br>
        Wakasek? Just scrolling! <br>
      </p>
    </div>
  </div>

  <div class="row mb-5">
    <div class="col-md-3 bg-white">
      <div class="fs-3 fw-bold">Rapor.</div>
      <p>
        Submit. Validasi. Cetak. <br>
        Walikelas? Duduk manis! <br>
        Kurikulum? Just download! <br>
        <span class="fw-bold border-bottom border-2 border-dark">The Ecosystem</span> is more than enough!
      </p>
    </div>
    <div class="col-md-9">
      <img src="~/assets/img/roadmap-rapor.webp" alt="illustraion" class="illustration">
    </div> 
  </div>

  <div class="row mt-2 mb-5">
    <div class="col-md-8 mb-5">
      <div class="card">
        <div class="card-body">
          <div class="fs-3 fw-bold">Statistik</div>
          <p class="small text-muted">Ringkasan statistik Peserta, IDUKA dan Guru Pembimbing.</p>

          <StatisticStudent />

          <StatisticIduka />

          <StatisticGuru />

        </div>
      </div>
    </div>

    <Jurnal />
  </div>
</template>


<script setup>
useHead({
  "title": "e-PKL.",
  "meta": [
    { name: "description", content: "Website Resmi Informasi Publik PKL SMKN 4 Tasikmalaya." }
  ]
})
</script>


<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 70vh;
}
</style>
