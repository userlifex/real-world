<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <router-link
        id="back"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >Back</router-link
      >
      <router-link
        id="next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/views/event/Card.vue";
import EventService from "@/services/EventServices";
import { watchEffect } from "vue";

// import axios from "axios";

export default {
  name: "EventList",
  props: ["page"],
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    };
  },

  computed: {
    hasNextPage() {
      return this.page * 2 < this.totalEvents;
    },
  },
  created() {
    watchEffect(() => {
      this.events = null;
      EventService.getEvents(2, this.page)
        .then((response) => {
          this.events = response.data;
          this.totalEvents = response.headers["x-total-count"];
        })
        .catch((reject) => {
          console.log(reject);
        });
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

.pagination {
  width: 45%;
  display: flex;
}

#back{
  align-self: flex-start;
}
#next{
  align-self: flex-end;
}
</style>
