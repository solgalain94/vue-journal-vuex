<template>
    <Navbar />

   <div v-if="isLoading" class="row justify-content-md-center">
        <div class="col-3 mt-5 text-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>

    <div v-else class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'
import {mapActions, mapState} from 'vuex'

export default {
    components:{
        Navbar: defineAsyncComponent(() => import('../components/NavbarComponent.vue')),
        EntryList: defineAsyncComponent(() => import ('../components/EntryList.vue'))
    },
    methods:{
        ...mapActions('journal', ['loadEntries']),
    },
    computed:{
        ...mapState('journal', ['isLoading'])

    },
    created(){
        this.loadEntries()
    }
}
</script>