<template>
  <div @click="redirectToMain">
    <h1>Error 404: Not Found!</h1>
    <h2>Sie werden in kürze zur Hauptseite zurück geleitet.</h2>
  </div>
</template>


<script>
import { onMounted } from '@vue/runtime-core'
import router from '../routes/router'
export default {
    setup() {
        onMounted(() => {
            setTimeout(() => {
                router.push('main/welcome')
            }, 3000)
        })
    },
}
</script>
