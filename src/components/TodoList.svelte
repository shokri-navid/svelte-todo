<script lang="ts">
	import { each } from "svelte/internal";
	import { Todo } from "../models/Todo";
	import TodoItem from "./TodoItem.svelte";
    let todoList : Array<Todo> = Array (
        new Todo("first One", "test mikonam", new Date(2023, 10, 1)),
        new Todo("scound One", "testing process", new Date(2023, 10, 20)),
        new Todo("first One", "test mikonam", new Date(2023, 11, 10)) 
    ); 
</script>
<div>
    {#each todoList as todo (todo.id)}
        <TodoItem data={todo}/>
    {/each}
</div>