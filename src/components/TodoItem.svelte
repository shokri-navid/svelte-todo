<script lang="ts">
	import type { Todo } from "../models/Todo";

    
    export let data:Todo;
</script>

<style>
    h3{
        font-weight: bold;
    }
    p {
      color: gray ;  
      font-size: small;
    }
    div.control{
        display: flex;
        flex-direction: row;
    }

    div.due-date{
        flex: .35;
    }

    div.expire-date{
        flex: .35;
    }

    div.status{
        flex: .3;
    }
</style>
<div>
    <h3>{data.title}</h3>
    <p>{data.description}</p>
    <div class="control">
        <div class="due-date"></div>
        <div class="expire-date">{data.expireDate}</div>
        <div class="status"></div>
    </div>

</div>