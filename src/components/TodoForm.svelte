<script lang="ts">
    
    let title = ""; 
    let description ="";
    let expireDate = Date.now;
    
    function createTodo():void{
        console.log("title: "+ title);
    }

</script>

<style>

</style>
<div>
    <input type="text" placeholder="title" bind:value="{title}">
    <input type="text" placeholder="description" bind:value="{description}">
    <input type="date" placeholder="expire date" bind:value="{expireDate}">
    <button type="button" on:click={createTodo}>create</button>
</div>