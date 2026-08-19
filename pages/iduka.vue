<template>
  <div class="col-md-12">
    <div class="text-center my-3">
      <span class="h1 fw-bold">IDUKA</span> <div class="text-muted">(Industri, Dunia Usaha dan Dunia Kerja)</div>
    </div>

    <div v-if="isLoading">
      <LoadingPlaceholder :row="1" :col="4" />
      <LoadingPlaceholder :row="7" :col="12" />
    </div>

    <div v-else class="mb-5">
      <nav class="sticky bg-white py-3">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="dkv-tab" data-bs-toggle="tab" data-bs-target="#nav-dkv" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
            DKV
          </button>
          <button class="nav-link" id="toi-tab" data-bs-toggle="tab" data-bs-target="#nav-toi" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
            TOI
          </button>
          <button class="nav-link" id="rpl-tab" data-bs-toggle="tab" data-bs-target="#nav-rpl" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            RPL
          </button>
          <button class="nav-link" id="tsm-tab" data-bs-toggle="tab" data-bs-target="#nav-tsm" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            TSM
          </button>
          <button class="nav-link" id="tkj-tab" data-bs-toggle="tab" data-bs-target="#nav-tkj" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            TKJ
          </button>
        </div>
      </nav>

      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane show active" id="nav-dkv" role="tabpanel" aria-labelledby="dkv-tab" tabindex="0">
          <ul v-for="(item, i) in items" :key="i" class="list-group list-group-flush">
            <li v-if="item.prokel == 'DKV'" class="list-group-item d-flex justify-content-between align-items-start py-3">
              <div class="me-auto">
                <div class="fw-bold text-muted mb-1">{{ item.nama }}</div>
                <div class="text-muted small">Terisi <strong>{{ item.terisi }}</strong> dari <strong>{{ item.jumlah_kuota }}</strong></div>
                <div v-if="item.wilayah == 'dalam'" class="badge border border-1 border-grey text-muted smallest rounded-pill mb-2 me-2">{{ item.wilayah }} kota</div>
                <div v-else class="badge text-bg-dark smallest rounded-pill mb-2 me-2">{{ item.wilayah }} kota</div>
              </div>
            </li>
          </ul>
        </div>

        <div class="tab-pane" id="nav-toi" role="tabpanel" aria-labelledby="toi-tab" tabindex="0">
          <ul v-for="(item, i) in items" :key="i" class="list-group list-group-flush">
            <li v-if="item.prokel == 'TOI'" class="list-group-item d-flex justify-content-between align-items-start py-3">
              <div class="me-auto">
                <div class="fw-bold text-muted mb-1">{{ item.nama }}</div>
                <div class="text-muted small">Terisi <strong>{{ item.terisi }}</strong> dari <strong>{{ item.jumlah_kuota }}</strong></div>
                <div v-if="item.wilayah == 'dalam'" class="badge border border-1 border-grey text-muted smallest rounded-pill mb-2 me-2">{{ item.wilayah }} kota</div>
                <div v-else class="badge text-bg-dark smallest rounded-pill mb-2 me-2">{{ item.wilayah }} kota</div>
              </div>
            </li>
          </ul>
        </div>

        <div class="tab-pane" id="nav-rpl" role="tabpanel" aria-labelledby="rpl-tab" tabindex="0">
          <ul v-for="(item, i) in items" :key="i" class="list-group list-group-flush">
            <li v-if="item.prokel == 'PPLG'" class="list-group-item d-flex justify-content-between align-items-start py-3">
              <div class="me-auto">
                <div class="fw-bold text-muted mb-1">{{ item.nama }}</div>
                <div class="text-muted small">Terisi <strong>{{ item.terisi }}</strong> dari <strong>{{ item.jumlah_kuota }}</strong></div>
                <div v-if="item.wilayah == 'dalam'" class="badge border border-1 border-grey text-muted smallest rounded-pill mb-2 me-2">{{ item.wilayah }} kota</div>
                <div v-else class="badge text-bg-dark smallest rounded-pill mb-2 me-2">{{ item.wilayah }} kota</div>
              </div>
            </li>
          </ul>
        </div>

        <div class="tab-pane" id="nav-tsm" role="tabpanel" aria-labelledby="tsm-tab" tabindex="0">
          <ul v-for="(item, i) in items" :key="i" class="list-group list-group-flush">
            <li v-if="item.prokel == 'TSM'" class="list-group-item d-flex justify-content-between align-items-start py-3">
              <div class="me-auto">
                <div class="fw-bold text-muted mb-1">{{ item.nama }}</div>
                <div class="text-muted small">Terisi <strong>{{ item.terisi }}</strong> dari <strong>{{ item.jumlah_kuota }}</strong></div>
                <div v-if="item.wilayah == 'dalam'" class="badge border border-1 border-grey text-muted smallest rounded-pill mb-2 me-2">{{ item.wilayah }} kota</div>
                <div v-else class="badge text-bg-dark smallest rounded-pill mb-2 me-2">{{ item.wilayah }} kota</div>
              </div>
            </li>
          </ul>
        </div>

        <div class="tab-pane" id="nav-tkj" role="tabpanel" aria-labelledby="tkj-tab" tabindex="0">
          <ul v-for="(item, i) in items" :key="i" class="list-group list-group-flush">
            <li v-if="item.prokel == 'TJKT'" class="list-group-item d-flex justify-content-between align-items-start py-3">
              <div class="me-auto">
                <div class="fw-bold text-muted mb-1">{{ item.nama }}</div>
                <div class="text-muted small">Terisi <strong>{{ item.terisi }}</strong> dari <strong>{{ item.jumlah_kuota }}</strong></div>
                <div v-if="item.wilayah == 'dalam'" class="badge border border-1 border-grey text-muted smallest rounded-pill mb-2 me-2">{{ item.wilayah }} kota</div>
                <div v-else class="badge text-bg-dark smallest rounded-pill mb-2 me-2">{{ item.wilayah }} kota</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>


<script setup>
useHead({
  "title": "IDUKA — e-PKL.",
  "description": "Daftar IDUKA: DKV, TOI, RPL, TSM dan TKJ — e-PKL SMKN 4 Tasikmalaya."
})

let client = usePocketBaseClient()

let isLoading = ref(true)
let isError = ref(false)
let errorMessages = ref('')
let items = ref([])

onMounted(() => {
  fetchItems()
})


async function fetchItems() {
  try {
    isLoading.value = true
    isError.value = false
    let response = await client.collection('public_iduka').getFullList()

    if(response) {
      items.value = response;

      isLoading.value = false
      isError.value = false
    }
  } catch(err) {
    isError.value = true
    isLoading.value = false
    errorMessages.value = err
  }
}
</script>
