<template>
    <header>
        <h2>header</h2>
        <slot name=header></slot>
        <hr>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <h2>footer</h2>
        <slot name=footer></slot>
    </footer>
</template>

<script>

export default {
    name: "Prueba",
    props: ["xd"]
}

</script>

<style>

</style>