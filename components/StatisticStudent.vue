<template>
  <div class="row">
    <div class="col-md-6">
      <div class="alert alert-secondary">
        <LoadingPlaceholder v-if="isLoadingStudent" :row="1" :col="2" />
        <div v-else class="fs-2 fw-bold">{{ students }}</div>
        <div class="text-muted fw-bold">Peserta</div>
      </div>
    </div>


    <div class="col-md-6">
      <div class="alert">
        <LoadingPlaceholder v-if="isLoadingJurusan" :row="1" :col="2" />
        <div v-else class="fs-2 fw-bold">{{ jurusan }}</div>
        <div class="text-muted fw-bold">Konsentrasi Keahlian</div>
      </div>
    </div>
  </div>
</template>


<script setup>
const client = usePocketBaseClient()
const isLoadingStudent = ref(false)
const isLoadingJurusan = ref(false)

const students = ref(0)
const jurusan = ref(0)


async function getData(collectionName) {
  isLoadingStudent.value = true
  isLoadingJurusan.value = true

  try {
    let res = await client.collection(collectionName).getList(1,1)

    if(collectionName == 'count_peserta') {
      students.value = res.items[0].jumlah_siswa
      isLoadingStudent.value = false
    }
    else if(collectionName == 'count_prokel') {
      jurusan.value = res.items[0].jumlah_prokel
      isLoadingJurusan.value = false
    }

  } catch(error) {
    console.error(error)
    isLoadingStudent.value = false
    isLoadingJurusan.value = false
  }
}


onMounted(() => {
  getData('count_peserta')
  getData('count_prokel')
})
</script>
