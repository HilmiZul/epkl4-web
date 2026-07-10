<template>
  <div class="col-md-4 smallest">
    <div class="card mb-5">
      <div class="card-body">
        <div class="fs-3 fw-bold">Jurnal</div>
        <div class="text-muted mb-3">Update secara realtime</div>

        <ul v-for="(item, i) in journals.items" :key="i" class="list-group">
          <li class="list-group-item border-bottom border-2 border-grey rounded-0">
            <!-- <div class="fw-bold">{{ item.expand }} &bull; <span class="text-muted">{{ item.iduka }}</span></div> -->

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

  let res = await client.collection('jurnal').getList(1, 5, {
    fields: `created, deskripsi`,
    filter: `isDraft=false`,
    sort: `-created, -updated`
  })

  if(res) {
    journals.value = res

    // konversi waktu UTC dari server ke full date lokal indo
    for(let i=0; i<journals.value.items.length; i++) {
      const date = new Date(journals.value.items[i].created);
      const options = {
        dateStyle: "full",
        timeStyle: "short"
      };
      journals.value.items[i].created = new Intl.DateTimeFormat('id-ID', options).format(date);
    }

    isLoading.value = false
  }
}
</script>
