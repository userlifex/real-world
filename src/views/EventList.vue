<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "../services/EventServices"
// import axios from "axios";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },

  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
        console.log(response);
      })
      .catch((reject) => {
        console.log(reject)
      });
    
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
