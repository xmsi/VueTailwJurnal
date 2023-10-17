<template>
    <div class="p-12">
        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Izlash</label>
                <input type="text" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Тимур" v-model="search" @input="getSearchResults" required>
            </div>
        </div>
        <table
        class="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th
              class=" border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
              Nomi</th>
              <th
              class=" border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
              Rahbari</th>
              <th
              class=" border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
              Email</th>
              <th
              class="border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">
              Manzili</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d in data_display">
            <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{ d.nomi
            }}</td>
            <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{
              d.rahbari }}
            </td>
            <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{
              d.email }}
            </td>
            <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{{
              d.manzili }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

const data = ref(null)
const data_display = ref(null)
const search = ref(null)

setTimeout(async () => {
    const result = await axios.get('https://data.egov.uz/apiData/MainData/GetByFile?id=61151619114fbfdc20c35aed&fileType=1&tableType=2&lang=3')
    data.value = result.data.map(item => ({
        nomi: item.Bolalarkutubxonalari,
        rahbari: item.BolalarkutubxonasiningrahbariFISh,
        email: item.Elektronmanzili,
        manzili: item.Ishvaqti,
    }))

    data_display.value = data.value
}, 100)

const getSearchResults = () => {
    console.log(search.value)
    data_display.value = searchObjects(data.value, search.value)
}

function searchObjects(array, searchStr) {
  // Convert the search string to lowercase for case-insensitive matching
  const searchLowerCase = searchStr.toLowerCase();

  return array.filter(obj => {
    // Convert object property to lowercase for case-insensitive matching
    const objectValue = obj.nomi.toLowerCase();

    // Use includes to check if the search string is part of the object property
    return objectValue.includes(searchLowerCase);
  });
}

</script>