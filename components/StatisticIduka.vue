<template>
  <div class="row">
    <div class="col-md-4">
      <div class="alert alert-secondary">
        <LoadingPlaceholder v-if="isLoading" :row="1" :col="2" />
        <div v-else class="fs-2 fw-bold">{{ iduka }}</div>
        <div class="text-muted fw-bold">Total IDUKA</div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="alert">
        <LoadingPlaceholder v-if="isLoadingLuarKota" :row="1" :col="2" />
        <div v-else class="fs-2 fw-bold">{{ iduka_luar }}</div>
        <div class="text-muted fw-bold">IDUKA Luar Kota</div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="alert">
        <LoadingPlaceholder v-if="isLoadingDalamKota" :row="1" :col="2" />
        <div v-else class="fs-2 fw-bold">{{ iduka_dalam }}</div>
        <div class="text-muted fw-bold">IDUKA Dalam Kota</div>
      </div>
    </div>
  </div>
</template>


<script setup>
const client = usePocketBaseClient()
const isLoading = ref(false)
const isLoadingLuarKota = ref(false)
const isLoadingDalamKota = ref(false)

const iduka = ref(0)
const iduka_dalam = ref(0)
const iduka_luar = ref(0)


async function getData(collectionName) {
  isLoading.value = true
  isLoadingDalamKota.value = true
  isLoadingLuarKota.value = true

  try {
    let res = await client.collection(collectionName).getList(1,1)

    if(collectionName == 'count_iduka') {
      iduka.value = res.items[0].jumlah_iduka
      isLoading.value = false
    } else if(collectionName == 'count_iduka_dalam') {
      iduka_dalam.value = res.items[0].jumlah_iduka
      isLoadingDalamKota.value = false
    } else if(collectionName == 'count_iduka_luar') {
      iduka_luar.value = res.items[0].jumlah_iduka
      isLoadingLuarKota.value = false
    }

  } catch(error) {
    console.error(error)
    isLoading.value = false
    isLoadingDalamKota.value = false
    isLoadingLuarKota.value = false
  }
}


onMounted(() => {
  getData('count_iduka')
  getData('count_iduka_dalam')
  getData('count_iduka_luar')
})
</script>
