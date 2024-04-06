<script setup>
import SmallHeroHeader from '../components/SmallHeroHeader.vue'
import { store } from '../store.js'
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import axios from 'axios'
import { FilterMatchMode } from 'primevue/api';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';



const loading = ref(true);

onMounted(() => {
  var options = {method: 'GET', url: 'https://qclservices.azurewebsites.net/stats/list', encoding:'latin1'};
  if(store.stats.length === 0){
    axios.request(options).then(response => {
    store.stats = response.data;
    loading.value = false;
  })
  } else{
    loading.value = false;
  }

});

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  playerIGN: { value: null, matchMode: FilterMatchMode.CONTAINS },
  league: { value: null, matchMode: FilterMatchMode.EQUALS },
  role: { value: null, matchMode: FilterMatchMode.EQUALS }
});

const divisions = ref([
  "Champions",
  "Académie"
])

const roles = ref([
  "top",
  "jg",
  "mid",  
  "adc",
  "sup"
])

const formatPercentage = (value) => {
    return value + "%";
};

</script>

<template>
  <main>
    <SmallHeroHeader msg="STATISTIQUES DES JOUEURS" />
    <div class="content">
      <DataTable sortField="kda" :sortOrder="-1" :value="store.stats" v-model:filters="filters" paginator :rows="10" dataKey="playerIGN" filterDisplay="row" :loading="loading" tableStyle="min-width: 50rem;max-width:90vw;">
        <template #empty> Aucun joueur trouvé. </template>
        <template #loading> <h3>Chargement des statistiques</h3><div class="lds-ring"><div></div><div></div><div></div><div></div></div></template>
        <Column field="franchiseUrl" header="Franchise" style="max-width: 6rem">
            <template #body="{ data }">
              <img class="logo-franchise" :src="data.franchiseUrl" />
            </template>
        </Column>
        <Column :showFilterMenu="false" :showClearButton="false" sortable field="playerIGN" header="IGN" style="min-width: 6rem">
            <template #body="{ data }">
                {{ data.playerIGN }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="IGN" />
            </template>
        </Column>
        <Column :showFilterMenu="false" :showClearButton="false" field="league" header="Division" style="min-width: 4rem;text-align: center;">
            <template #body="{ data }">
                {{ data.league }}
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <Dropdown showClear v-model="filterModel.value" @change="filterCallback()" :options="divisions" placeholder="Division" class="w-full md:w-14rem" >
                </Dropdown>
            </template>
        </Column>
        <Column :showFilterMenu="false" :showClearButton="false" field="role" header="Rôle" style="min-width: 1rem">
            <template #body="{ data }">
              <img class="playericon" :src="'/icons/' + data.role + '.svg'" />
            </template>
            <template #filter="{ filterModel, filterCallback }">
                <Dropdown showClear v-model="filterModel.value" @change="filterCallback()" :options="roles" placeholder="Rôle" class="w-full md:w-14rem" >
                </Dropdown>
            </template>
        </Column>
        <Column sortable field="kda" header="KD/A" style="min-width: 5rem">
            <template #body="{ data }">
                {{ data.kda }}
            </template>
        </Column>
        <Column sortable field="totalKills" header="Kills" style="min-width: 5rem">
            <template #body="{ data }">
                {{ data.totalKills + " (" + data.killsAvg + "/game)" }}
            </template>
        </Column>
        <Column sortable field="totalDeaths" header="Deaths" style="min-width: 5rem;">
            <template #body="{ data }">
                {{ data.totalDeaths + " (" + data.deathsAvg + "/game)" }}
            </template>
        </Column>
        <Column sortable field="totalAssists" header="Assists" style="min-width: 5rem;">
            <template #body="{ data }">
                {{ data.totalAssists + " (" + data.assistsAvg + "/game)" }}
            </template>
        </Column>
        <Column sortable field="goldPerMinute" header="Gold/Min" style="min-width: 3rem;text-align: center;">
            <template #body="{ data }">
                {{ data.goldPerMinute }}
            </template>
        </Column>
        <Column sortable field="csMin" header="CS/Min" style="min-width: 3rem;text-align: center;">
            <template #body="{ data }">
                {{ data.csMin }}
            </template>
        </Column>
        <Column sortable field="differentChampionsPlayed" header="Diff Champ" style="min-width: 3rem;text-align: center;">
            <template #body="{ data }">
                {{ data.differentChampionsPlayed }}
            </template>
        </Column>
        <Column sortable field="visionAvg" header="Vision" style="min-width: 3rem;text-align: center;">
            <template #body="{ data }">
                {{ data.visionAvg + "/game" }}
            </template>
        </Column>
      </DataTable>
    </div>
  </main>
</template>

<style>
.flex-row{
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
}
</style>

<style scoped>
.lds-ring{
    position: absolute;
    top: 150px;
    padding: 0;
}
h3{
    position: absolute;
    font-weight: bold;
    font-size: 40px;
    top: 20px;
}
.playericon{
  display: block;
  margin: auto;
}
.logo-franchise{
  height: 40px;
  display: block;
  margin: auto;
}
.content{
  display: flex;
  color: white;
  padding: 50PX 5vw;
  justify-content: space-evenly;
}
i {
  position: absolute;
  bottom: -8px;
}
</style>
