<template>
  <div class="row my-5">
    <div class="col-md-12">
      <Permendikbud />
    </div>
  </div>

  <div class="row mb-5">
    <div class="col-md-9">
      <img src="~/assets/img/illustration.webp" alt="illustraion" class="illustration">
    </div> <!-- close ./col-md-8 -->

    <div class="col-md-3 bg-white">
      <div class="fs-3 fw-bold">Apa itu e-PKL?</div>
      <p>Aplikasi pemetaan dan jurnal peserta Praktik Kerja Lapangan.</p>
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
      <div class="fs-3 fw-bold">Contoh Roadmap.</div>
      <p>Siswa berkonsultasi dan mendapatkan rekomendasi tempat PKL dari Kaprog. Biarkan TU mencetak surat.</p>
    </div>
    <div class="col-md-9">
      <img src="~/assets/img/workflow-pemetaan.webp" alt="illustraion" class="illustration">
    </div> 
  </div>

  <div class="row mt-2 mb-5">
    <div class="col-md-8 mb-5">
      <div class="card">
        <div class="card-body">
          <div class="fs-3 fw-bold">Statistik</div>

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
  "description": "Website resmi e-PKL SMKN 4 Tasikmalaya."
})
</script>
