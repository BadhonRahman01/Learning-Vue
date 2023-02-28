<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
           <slot :item="goal" dots="..."></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            goals: ['Finish the course', 'Leave vue'],
        };
    }
}
</script>