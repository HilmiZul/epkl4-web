<template>
  <div class="row">
    <div class="col-md-4">
      <div class="alert alert-secondary">
        <LoadingPlaceholder v-if="isLoadingGuru" :row="1" :col="2" />
        <div v-else class="fs-2 fw-bold">{{ teachers }}</div>
        <div class="text-muted fw-bold">Total Guru Pembimbing</div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="alert">
        <LoadingPlaceholder v-if="isLoadingGuruKejuruan" :row="1" :col="2" />
        <div v-else class="fs-2 fw-bold">{{ teachers_jurusan }}</div>
        <div class="text-muted fw-bold">Guru Kejuruan</div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="alert">
        <LoadingPlaceholder v-if="isLoadingGuruUmum" :row="1" :col="2" />
        <div v-else class="fs-2 fw-bold">{{ teachers_general}}</div>
        <div class="text-muted fw-bold">Guru Umum</div>
      </div>
    </div>
  </div>
</template>


<script setup>
const client = usePocketBaseClient()
const isLoadingGuru = ref(false)
const isLoadingGuruKejuruan = ref(false)
const isLoadingGuruUmum = ref(false)

const teachers = ref(0)
const teachers_jurusan = ref(0)
const teachers_general = ref(0)


async function getData(collectionName) {
  isLoadingGuru.value = true
  isLoadingGuruKejuruan.value = true
  isLoadingGuruUmum.value = true

  try {
    client.autoCancellation(false)
    let res = await client.collection(collectionName).getList(1,1)

    if(collectionName == 'count_guru') {
      teachers.value = res.items[0].jumlah_guru
      isLoadingGuru.value = false
    }
    else if(collectionName == 'count_guru_kejuruan') {
      teachers_jurusan.value = res.items[0].jumlah_guru
      isLoadingGuruKejuruan.value = false
    }
    else if(collectionName == 'count_guru_umum') {
      teachers_general.value = res.items[0].jumlah_guru
      isLoadingGuruUmum.value = false
    }

  } catch(error) {
    console.error(error)
    isLoadingGuru.value = false
    isLoadingGuruKejuruan.value = false
    isLoadingGuruUmum.value = false
  }
}


onMounted(() => {
  getData('count_guru')
  getData('count_guru_kejuruan')
  getData('count_guru_umum')
})
</script>
