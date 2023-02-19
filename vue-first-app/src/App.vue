<template>
    <section>
    <header><h1>My Friends</h1></header>
    <new-friend @add-contact="addContact">

    </new-friend>
    <ul>
        <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favourite="friend.isFavourite"
        @toggle-favorite="toggleFavouriteStatus"
        ></friend-contact>
        <!-- <friend-contact
        name="Badhon Lorenz"
        phone-number="0123456789"
        email-address="badhon@localhost.com"

        ></friend-contact> -->
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
                    isFavourite: true,
                },
                {
                    id:'badhon',
                    name: 'Badhon Lorenz',
                    phone: '0123456789',
                    email: 'badhon@localhost.com',
                    isFavourite: false
                },
            ]
        };
    },
    methods: {
        toggleFavouriteStatus(friendId){
            // alert('works');
           const identifiedFriend = this.friends.find(friend=>friend.id === friendId);
           identifiedFriend.isFavourite = !identifiedFriend.isFavourite;
        },
        addContact (name, phone, email) {
            const newFriendContact = {
                id: new Date().toISOString(),
                name: name,
                phone: phone,
                email: email,
                isFavourite: false
            }
            this.friends.push(newFriendContact);
        }
    }
};
</script>