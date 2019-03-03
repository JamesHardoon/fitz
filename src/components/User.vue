<template>
    <div>
        <div type="button" @click="add()">添加</div>
    </div>
</template>

<script>
export default {
    name: 'User',
    data() {
        return {

        }
    },
    methods: {
        add() {
            this.$router.push('/add')
        }
    }
}
</script>

<style scoped lang="scss">

</style>

