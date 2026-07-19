<template>
  <div class="col-md-4 smallest">
    <div class="card mb-5">
      <div class="card-body">
        <div class="fs-3 fw-bold">Jurnal</div>
        <div class="text-muted mb-3">Update secara realtime</div>

        <div v-if="isLoading">
          <LoadingPlaceholder :row="1" :col="4" />
          <LoadingPlaceholder :row="3" :col="12" />
          <LoadingPlaceholder :row="1" :col="4" />
          <LoadingPlaceholder :row="3" :col="12" />
        </div>

        <div v-else-if="!isLoading && journals.length <= 0" class="text-center text-muted py-5">
          <i class="bi bi-database fs-2"></i>
          <div class="fs-5">Belum ada jurnal</div>
        </div>

        <ul v-else v-for="(item, i) in journals" :key="i" class="list-group">
          <li class="list-group-item border-bottom border-2 border-grey rounded-0">
            <div class="text-muted mb-2">{{ item.created }}</div>

            <main>
              {{ item.deskripsi }}
            </main>
          </li>
        </ul>
      </div>
    </div> <!-- ./card -->
  </div>
</template>


<script setup>
const client = usePocketBaseClient()
const isLoading = ref(false)
const journals = ref([])

onMounted(() => {
  getJournals()
  client.autoCancellation(false)
  client.collection('jurnal').subscribe('*', function() {
    if(e.action === 'create' || e.action === 'update') {
      getJournals()
    }
  }, {})
})


async function getJournals() {
  isLoading.value = true

  let res = await client.collection('jurnal_publik').getFullList({})

  if(res) {
    journals.value = res

    // konversi waktu UTC dari server ke full date lokal indo
    for(let i=0; i<journals.value.length; i++) {
      const date = new Date(journals.value[i].created);
      const options = {
        dateStyle: "full",
        timeStyle: "short"
      };
      journals.value[i].created = new Intl.DateTimeFormat('id-ID', options).format(date);
    }

    isLoading.value = false
  }
}
</script>
