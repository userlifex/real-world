<template>
  <div id="nav">
    <h1>layout</h1>
    <router-link :to="{ name: 'EventDetail', params: { id } }"
      >Details</router-link
    >
    |
    <router-link :to="{ name: 'EventRegister', params: { id } }"
      >Register</router-link
    >
    |
    <router-link :to="{ name: 'EventEdit', params: { id } }">Edit</router-link>

     <router-view :event="event" />
  </div>
</template>

<script>
import EventService from "../../services/EventServices";
export default {
  name: "EventLayout",
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    // fetch event (by id) and set local event data
    console.log("created ");
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((reject) => {
        console.log(reject);
      });
  },
};
</script>
