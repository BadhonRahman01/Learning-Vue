<template>
    <section>
    <header><h1>My Friends</h1></header>
    <ul>
        <friend-contact></friend-contact>
        <friend-contact></friend-contact>
    </ul>
</section>
</template>


<script>
export default {
    data() {
        return{
            friends: [
                {
                    id:'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0123456789',
                    email: 'manuel@localhost.com',
                },
                {
                    id:'badhon',
                    name: 'Badhon Lorenz',
                    phone: '0123456789',
                    email: 'badhon@localhost.com',
                },
            ]
        };
    }
};
</script>