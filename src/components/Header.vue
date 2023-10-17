<template>
    <header class="sticky top-0 shadow-lg bg-slate-600">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-2">
                <div class="flex items-center gap-3 ml-5">
                    <img src="https://cdn-icons-png.flaticon.com/512/167/167707.png" alt="" class="w-12 mb-2">
                    <p class="text-2xl text-white">Jurnal</p>
                </div>
            <div class="flex gap-3 flex-1 justify-end">
                <RouterLink to="/" class="hover:text-orange-500">Home</RouterLink>
                <RouterLink to="/bibl" class="hover:text-orange-500">Biblioteka</RouterLink>
            </div>
        </nav>
    </header>
</template>

<script setup>

</script>