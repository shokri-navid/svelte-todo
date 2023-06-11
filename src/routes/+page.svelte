
<script lang="ts">
    import TodoForm from '../components/TodoForm.svelte'
	import TodoList from '../components/TodoList.svelte';
    let name = 'navid';
</script>
<style>
    h3{
        color: red;
    }

    span.green {
        color: green;
    }
</style>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<h3>Hi, <span class="green">{name[0].toUpperCase()+name.substring(1)}</span></h3>
<TodoForm></TodoForm>
<TodoList></TodoList>
