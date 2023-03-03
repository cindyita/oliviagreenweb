
<template>

  <div class="schedule py-4 px-2 px-lg-5">

    <h3 class="display-section text-center">Schedule</h3>
    <p class="text-center">Choose an available day and hour for our session.</p>

    <div class="d-flex w-100 px-2 px-lg-5">

        <swiper
          :slidesPerView="2"
          :spaceBetween="10"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="{
            '640': {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            '768': {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            '1024': {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }"
          :modules="modules"
          class="swiperSchedule py-5"
        >
          <swiper-slide class="p-3">
            <h3 class="display-title">{{ date.toLocaleDateString('en-EN', { weekday: 'long'}) }}</h3>
            <span>{{ date.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' }) }}</span>
            <div class="hours mt-3 w-100">

              <div ref="a1" class="card-primary-ch hour-card disabled"
              :class="{disabled:date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}" 
              @click="{if (!$refs.a1.classList.contains('disabled')) { showModal = true; dateSelect = date.toLocaleDateString('en-EN', { weekday: 'long'})+' '+date.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 9:00' }}">9:00</div>

              <div ref="a2" class="card-primary-ch hour-card disabled" 
              :class="{disabled:date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.a2.classList.contains('disabled')) { showModal = true; dateSelect = date.toLocaleDateString('en-EN', { weekday: 'long'})+' '+date.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 10:00' }}">10:00</div>

              <div ref="a3" class="card-primary-ch hour-card disabled" 
              :class="{disabled:date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.a3.classList.contains('disabled')) { showModal = true; dateSelect = date.toLocaleDateString('en-EN', { weekday: 'long'})+' '+date.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 11:00' }}">11:00</div>

              <div ref="a4" class="card-primary-ch hour-card disabled" 
              :class="{disabled:date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.a4.classList.contains('disabled')) { showModal = true; dateSelect = date.toLocaleDateString('en-EN', { weekday: 'long'})+' '+date.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 12:00' }}">12:00</div>

              <div ref="a5" class="card-primary-ch hour-card disabled" 
              :class="{disabled:date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.a5.classList.contains('disabled')) { showModal = true; dateSelect = date.toLocaleDateString('en-EN', { weekday: 'long'})+' '+date.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 13:00' }}">13:00</div>

              <div ref="a6" class="card-primary-ch hour-card disabled" 
              :class="{disabled:date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.a6.classList.contains('disabled')) { showModal = true; dateSelect = date.toLocaleDateString('en-EN', { weekday: 'long'})+' '+date.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 14:00' }}">14:00</div>

              <div ref="a7" class="card-primary-ch hour-card disabled" 
              :class="{disabled:date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.a7.classList.contains('disabled')) { showModal = true; dateSelect = date.toLocaleDateString('en-EN', { weekday: 'long'})+' '+date.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 16:00' }}">16:00</div>

              <div ref="a8" class="card-primary-ch hour-card disabled" 
              :class="{disabled:date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.a8.classList.contains('disabled')) { showModal = true; dateSelect = date.toLocaleDateString('en-EN', { weekday: 'long'})+' '+date.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 17:00' }}">17:00</div>

              <div ref="a9" class="card-primary-ch hour-card disabled" 
              :class="{disabled:date.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.a9.classList.contains('disabled')) { showModal = true; dateSelect = date.toLocaleDateString('en-EN', { weekday: 'long'})+' '+date.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 18:00' }}">18:00</div>

            </div>
          </swiper-slide>
          <swiper-slide class="p-3">
            <h3 class="display-title">{{ nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) }}</h3>
            <span>{{ nextDate.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' }) }}</span>
            <div class="hours mt-3 w-100">

              <div ref="b1" class="card-primary-ch hour-card" 
              :class="{disabled:nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}" 
              @click="{if (!$refs.b1.classList.contains('disabled')) { showModal = true; dateSelect = nextDate.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 9:00' }}">9:00</div>

              <div ref="b2" class="card-primary-ch hour-card" :class="{disabled:nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.b2.classList.contains('disabled')) { showModal = true; dateSelect = nextDate.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 10:00' }}">10:00</div>

              <div ref="b3" class="card-primary-ch hour-card" :class="{disabled:nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.b3.classList.contains('disabled')) { showModal = true; dateSelect = nextDate.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 11:00' }}">11:00</div>

              <div ref="b4" class="card-primary-ch hour-card" :class="{disabled:nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.b4.classList.contains('disabled')) { showModal = true; dateSelect = nextDate.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 12:00' }}">12:00</div>

              <div ref="b5" class="card-primary-ch hour-card" :class="{disabled:nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.b5.classList.contains('disabled')) { showModal = true; dateSelect = nextDate.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 13:00' }}">13:00</div>

              <div ref="b6" class="card-primary-ch hour-card" :class="{disabled:nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.b6.classList.contains('disabled')) { showModal = true; dateSelect = nextDate.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 14:00' }}">14:00</div>

              <div ref="b7" class="card-primary-ch hour-card" :class="{disabled:nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.b7.classList.contains('disabled')) { showModal = true; dateSelect = nextDate.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 16:00' }}">16:00</div>

              <div ref="b8" class="card-primary-ch hour-card" :class="{disabled:nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.b8.classList.contains('disabled')) { showModal = true; dateSelect = nextDate.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 17:00' }}">17:00</div>

              <div ref="b9" class="card-primary-ch hour-card" :class="{disabled:nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.b9.classList.contains('disabled')) { showModal = true; dateSelect = nextDate.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 18:00' }}">18:00</div>

            </div>
          </swiper-slide>
          <swiper-slide class="p-3">
            <h3 class="display-title">{{ nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) }}</h3>
            <span>{{ nextDate2.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' }) }}</span>
            <div class="hours mt-3 w-100">
              
              <div ref="c1" class="card-primary-ch hour-card" 
              :class="{disabled:nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}" 
              @click="{if (!$refs.c1.classList.contains('disabled')) { showModal = true; dateSelect = nextDate2.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate2.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 9:00' }}">9:00</div>

              <div ref="c2" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.c2.classList.contains('disabled')) { showModal = true; dateSelect = nextDate2.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate2.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 10:00' }}">10:00</div>

              <div ref="c3" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.c3.classList.contains('disabled')) { showModal = true; dateSelect = nextDate2.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate2.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 11:00' }}">11:00</div>

              <div ref="c4" class="card-primary-ch hour-card" :class="{disabled:nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.c4.classList.contains('disabled')) { showModal = true; dateSelect = nextDate2.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate2.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 12:00' }}">12:00</div>

              <div ref="c5" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.c5.classList.contains('disabled')) { showModal = true; dateSelect = nextDate2.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate2.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 13:00' }}">13:00</div>

              <div ref="c6" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.c6.classList.contains('disabled')) { showModal = true; dateSelect = nextDate2.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate2.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 14:00' }}">14:00</div>

              <div ref="c7" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.c7.classList.contains('disabled')) { showModal = true; dateSelect = nextDate2.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate2.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 16:00' }}">16:00</div>

              <div ref="c8" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.c8.classList.contains('disabled')) { showModal = true; dateSelect = nextDate2.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate2.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 17:00' }}">17:00</div>

              <div ref="c9" class="card-primary-ch hour-card" :class="{disabled:nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate2.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.c9.classList.contains('disabled')) { showModal = true; dateSelect = nextDate2.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate2.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 18:00' }}">18:00</div>

            </div>
          </swiper-slide>
          <swiper-slide class="p-3">
            <h3 class="display-title">{{ nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) }}</h3>
            <span>{{ nextDate3.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' }) }}</span>
            <div class="hours mt-3 w-100">

              <div ref="d1" class="card-primary-ch hour-card disabled" 
              :class="{disabled:nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}" 
              @click="{if (!$refs.d1.classList.contains('disabled')) { showModal = true; dateSelect = nextDate3.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate3.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 9:00' }}">9:00</div>

              <div ref="d2" class="card-primary-ch hour-card" :class="{disabled:nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.d2.classList.contains('disabled')) { showModal = true; dateSelect = nextDate3.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate3.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 10:00' }}">10:00</div>

              <div ref="d3" class="card-primary-ch hour-card" :class="{disabled:nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.d3.classList.contains('disabled')) { showModal = true; dateSelect = nextDate3.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate3.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 11:00' }}">11:00</div>

              <div ref="d4" class="card-primary-ch hour-card" :class="{disabled:nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.d4.classList.contains('disabled')) { showModal = true; dateSelect = nextDate3.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate3.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 12:00' }}">12:00</div>

              <div ref="d5" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.d5.classList.contains('disabled')) { showModal = true; dateSelect = nextDate3.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate3.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 13:00' }}">13:00</div>

              <div ref="d6" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.d6.classList.contains('disabled')) { showModal = true; dateSelect = nextDate3.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate3.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 14:00' }}">14:00</div>

              <div ref="d7" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.d7.classList.contains('disabled')) { showModal = true; dateSelect = nextDate3.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate3.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 16:00' }}">16:00</div>

              <div ref="d8" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.d8.classList.contains('disabled')) { showModal = true; dateSelect = nextDate3.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate3.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 17:00' }}">17:00</div>

              <div ref="d9" class="card-primary-ch hour-card" :class="{disabled:nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate3.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.d9.classList.contains('disabled')) { showModal = true; dateSelect = nextDate3.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate3.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 18:00' }}">18:00</div>

            </div>
          </swiper-slide>
          <swiper-slide class="p-3">
            <h3 class="display-title">{{ nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) }}</h3>
            <span>{{ nextDate4.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' }) }}</span>
            <div class="hours mt-3 w-100">
              <div ref="e1" class="card-primary-ch hour-card disabled" 
              :class="{disabled:nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}" 
              @click="{if (!$refs.e1.classList.contains('disabled')) { showModal = true; dateSelect = nextDate4.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate4.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 9:00' }}">9:00</div>

              <div ref="e2" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.e2.classList.contains('disabled')) { showModal = true; dateSelect = nextDate4.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate4.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 10:00' }}">10:00</div>

              <div ref="e3" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.e3.classList.contains('disabled')) { showModal = true; dateSelect = nextDate4.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate4.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 11:00' }}">11:00</div>

              <div ref="e4" class="card-primary-ch hour-card" :class="{disabled:nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.e4.classList.contains('disabled')) { showModal = true; dateSelect = nextDate4.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate4.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 12:00' }}">12:00</div>

              <div ref="e5" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.e5.classList.contains('disabled')) { showModal = true; dateSelect = nextDate4.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate4.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 13:00' }}">13:00</div>

              <div ref="e6" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.e6.classList.contains('disabled')) { showModal = true; dateSelect = nextDate4.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate4.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 14:00' }}">14:00</div>

              <div ref="e7" class="card-primary-ch hour-card" :class="{disabled:nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.e7.classList.contains('disabled')) { showModal = true; dateSelect = nextDate4.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate4.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 16:00' }}">16:00</div>

              <div ref="e8" class="card-primary-ch hour-card" :class="{disabled:nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.e8.classList.contains('disabled')) { showModal = true; dateSelect = nextDate4.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate4.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 17:00' }}">17:00</div>

              <div ref="e9" class="card-primary-ch hour-card" :class="{disabled:nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate4.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.e9.classList.contains('disabled')) { showModal = true; dateSelect = nextDate4.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate4.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 18:00' }}">18:00</div>
            </div>
          </swiper-slide>
          <swiper-slide class="p-3">
            <h3 class="display-title">{{ nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) }}</h3>
            <span>{{ nextDate5.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' }) }}</span>
            <div class="hours mt-3 w-100">
              <div ref="f1" class="card-primary-ch hour-card disabled" 
              :class="{disabled:nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}" 
              @click="{if (!$refs.f1.classList.contains('disabled')) { showModal = true; dateSelect = nextDate5.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate5.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 9:00' }}">9:00</div>

              <div ref="f2" class="card-primary-ch hour-card" :class="{disabled:nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.f2.classList.contains('disabled')) { showModal = true; dateSelect = nextDate5.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate5.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 10:00' }}">10:00</div>

              <div ref="f3" class="card-primary-ch hour-card" :class="{disabled:nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.f3.classList.contains('disabled')) { showModal = true; dateSelect = nextDate5.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate5.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 11:00' }}">11:00</div>

              <div ref="f4" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.f4.classList.contains('disabled')) { showModal = true; dateSelect = nextDate5.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate5.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 12:00' }}">12:00</div>

              <div ref="f5" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.f5.classList.contains('disabled')) { showModal = true; dateSelect = nextDate5.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate5.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 13:00' }}">13:00</div>

              <div ref="f6" class="card-primary-ch hour-card" :class="{disabled:nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.f6.classList.contains('disabled')) { showModal = true; dateSelect = nextDate5.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate5.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 14:00' }}">14:00</div>

              <div ref="f7" class="card-primary-ch hour-card" :class="{disabled:nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.f7.classList.contains('disabled')) { showModal = true; dateSelect = nextDate5.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate5.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 16:00' }}">16:00</div>

              <div ref="f8" class="card-primary-ch hour-card" :class="{disabled:nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.f8.classList.contains('disabled')) { showModal = true; dateSelect = nextDate5.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate5.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 17:00' }}">17:00</div>

              <div ref="f9" class="card-primary-ch hour-card" :class="{disabled:nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate5.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.f9.classList.contains('disabled')) { showModal = true; dateSelect = nextDate5.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate5.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 18:00' }}">18:00</div>
            </div>
          </swiper-slide>
          <swiper-slide class="p-3">
            <h3 class="display-title">{{ nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) }}</h3>
            <span>{{ nextDate6.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' }) }}</span>
            <div class="hours mt-3 w-100">
              <div ref="g1" class="card-primary-ch hour-card disabled" 
              :class="{disabled:nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}" 
              @click="{if (!$refs.g1.classList.contains('disabled')) { showModal = true; dateSelect = nextDate6.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate6.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 9:00' }}">9:00</div>

              <div ref="g2" class="card-primary-ch hour-card" :class="{disabled:nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.g2.classList.contains('disabled')) { showModal = true; dateSelect = nextDate6.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate6.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 10:00' }}">10:00</div>

              <div ref="g3" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.g3.classList.contains('disabled')) { showModal = true; dateSelect = nextDate6.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate6.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 11:00' }}">11:00</div>

              <div ref="g4" class="card-primary-ch hour-card" :class="{disabled:nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.g4.classList.contains('disabled')) { showModal = true; dateSelect = nextDate6.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate6.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 12:00' }}">12:00</div>

              <div ref="g5" class="card-primary-ch hour-card" :class="{disabled:nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.g5.classList.contains('disabled')) { showModal = true; dateSelect = nextDate6.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate6.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 13:00' }}">13:00</div>

              <div ref="g6" class="card-primary-ch hour-card" :class="{disabled:nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.g6.classList.contains('disabled')) { showModal = true; dateSelect = nextDate6.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate6.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 14:00' }}">14:00</div>

              <div ref="g7" class="card-primary-ch hour-card" :class="{disabled:nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.g7.classList.contains('disabled')) { showModal = true; dateSelect = nextDate6.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate6.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 16:00' }}">16:00</div>

              <div ref="g8" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.g8.classList.contains('disabled')) { showModal = true; dateSelect = nextDate6.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate6.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 17:00' }}">17:00</div>

              <div ref="g9" class="card-primary-ch hour-card" :class="{disabled:nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate6.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.g9.classList.contains('disabled')) { showModal = true; dateSelect = nextDate6.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate6.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 18:00' }}">18:00</div>
            </div>
          </swiper-slide>
          <swiper-slide class="p-3">
            <h3 class="display-title">{{ nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) }}</h3>
            <span>{{ nextDate7.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' }) }}</span>
            <div class="hours mt-3 w-100">
              <div ref="h1" class="card-primary-ch hour-card" 
              :class="{disabled:nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}" 
              @click="{if (!$refs.h1.classList.contains('disabled')) { showModal = true; dateSelect = nextDate7.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate7.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 9:00' }}">9:00</div>

              <div ref="h2" class="card-primary-ch hour-card disabled" :class="{disabled:nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.h2.classList.contains('disabled')) { showModal = true; dateSelect = nextDate7.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate7.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 10:00' }}">10:00</div>

              <div ref="h3" class="card-primary-ch hour-card" :class="{disabled:nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.h3.classList.contains('disabled')) { showModal = true; dateSelect = nextDate7.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate7.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 11:00' }}">11:00</div>

              <div ref="h4" class="card-primary-ch hour-card" :class="{disabled:nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.h4.classList.contains('disabled')) { showModal = true; dateSelect = nextDate7.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate7.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 12:00' }}">12:00</div>

              <div ref="h5" class="card-primary-ch hour-card" :class="{disabled:nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.h5.classList.contains('disabled')) { showModal = true; dateSelect = nextDate7.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate7.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 13:00' }}">13:00</div>

              <div ref="h6" class="card-primary-ch hour-card" :class="{disabled:nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.h6.classList.contains('disabled')) { showModal = true; dateSelect = nextDate7.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate7.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 14:00' }}">14:00</div>

              <div ref="h7" class="card-primary-ch hour-card" :class="{disabled:nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.h7.classList.contains('disabled')) { showModal = true; dateSelect = nextDate7.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate7.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 16:00' }}">16:00</div>

              <div ref="h8" class="card-primary-ch hour-card" :class="{disabled:nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.h8.classList.contains('disabled')) { showModal = true; dateSelect = nextDate7.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate7.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 17:00' }}">17:00</div>

              <div ref="h9" class="card-primary-ch hour-card" :class="{disabled:nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate7.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.h9.classList.contains('disabled')) { showModal = true; dateSelect = nextDate7.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate7.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 18:00' }}">18:00</div>
            </div>
          </swiper-slide>
          <swiper-slide class="p-3">
            <h3 class="display-title">{{ nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) }}</h3>
            <span>{{ nextDate8.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' }) }}</span>
            <div class="hours mt-3 w-100">
              <div ref="i1" class="card-primary-ch hour-card" 
              :class="{disabled:nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}" 
              @click="{if (!$refs.i1.classList.contains('disabled')) { showModal = true; dateSelect = nextDate8.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate8.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 9:00' }}">9:00</div>

              <div ref="i2" class="card-primary-ch hour-card" :class="{disabled:nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.i2.classList.contains('disabled')) { showModal = true; dateSelect = nextDate8.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate8.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 10:00' }}">10:00</div>

              <div ref="i3" class="card-primary-ch hour-card" :class="{disabled:nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.i3.classList.contains('disabled')) { showModal = true; dateSelect = nextDate8.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate8.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 11:00' }}">11:00</div>

              <div ref="i4" class="card-primary-ch hour-card" :class="{disabled:nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.i4.classList.contains('disabled')) { showModal = true; dateSelect = nextDate8.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate8.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 12:00' }}">12:00</div>

              <div ref="i5" class="card-primary-ch hour-card" :class="{disabled:nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.i5.classList.contains('disabled')) { showModal = true; dateSelect = nextDate8.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate8.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 13:00' }}">13:00</div>

              <div ref="i6" class="card-primary-ch hour-card" :class="{disabled:nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.i6.classList.contains('disabled')) { showModal = true; dateSelect = nextDate8.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate8.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 14:00' }}">14:00</div>

              <div ref="i7" class="card-primary-ch hour-card" :class="{disabled:nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.i7.classList.contains('disabled')) { showModal = true; dateSelect = nextDate8.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate8.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 16:00' }}">16:00</div>

              <div ref="i8" class="card-primary-ch hour-card" :class="{disabled:nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.i8.classList.contains('disabled')) { showModal = true; dateSelect = nextDate8.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate8.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 17:00' }}">17:00</div>

              <div ref="i9" class="card-primary-ch hour-card" :class="{disabled:nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate8.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.i9.classList.contains('disabled')) { showModal = true; dateSelect = nextDate8.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate8.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 18:00' }}">18:00</div>
            </div>
          </swiper-slide>
          <swiper-slide class="p-3">
            <h3 class="display-title">{{ nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) }}</h3>
            <span>{{ nextDate9.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' }) }}</span>
            <div class="hours mt-3 w-100">
              <div ref="j1" class="card-primary-ch hour-card" 
              :class="{disabled:nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}" 
              @click="{if (!$refs.j1.classList.contains('disabled')) { showModal = true; dateSelect = nextDate9.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate9.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 9:00' }}">9:00</div>

              <div ref="j2" class="card-primary-ch hour-card" :class="{disabled:nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.j2.classList.contains('disabled')) { showModal = true; dateSelect = nextDate9.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate9.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 10:00' }}">10:00</div>

              <div ref="j3" class="card-primary-ch hour-card" :class="{disabled:nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.j3.classList.contains('disabled')) { showModal = true; dateSelect = nextDate9.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate9.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 11:00' }}">11:00</div>

              <div ref="j4" class="card-primary-ch hour-card" :class="{disabled:nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.j4.classList.contains('disabled')) { showModal = true; dateSelect = nextDate9.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate9.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 12:00' }}">12:00</div>

              <div ref="j5" class="card-primary-ch hour-card" :class="{disabled:nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.j5.classList.contains('disabled')) { showModal = true; dateSelect = nextDate9.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate9.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 13:00' }}">13:00</div>

              <div ref="j6" class="card-primary-ch hour-card" :class="{disabled:nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.j6.classList.contains('disabled')) { showModal = true; dateSelect = nextDate9.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate9.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 14:00' }}">14:00</div>

              <div ref="j7" class="card-primary-ch hour-card" :class="{disabled:nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.j7.classList.contains('disabled')) { showModal = true; dateSelect = nextDate9.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate9.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 16:00' }}">16:00</div>

              <div ref="j8" class="card-primary-ch hour-card" :class="{disabled:nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.j8.classList.contains('disabled')) { showModal = true; dateSelect = nextDate9.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate9.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 17:00' }}">17:00</div>

              <div ref="j9" class="card-primary-ch hour-card" :class="{disabled:nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate9.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}"
              @click="{if (!$refs.j9.classList.contains('disabled')) { showModal = true; dateSelect = nextDate9.toLocaleDateString('en-EN', { weekday: 'long'})+' '+nextDate9.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' })+' at 18:00' }}">18:00</div>
            </div>
          </swiper-slide>
          <swiper-slide class="p-3">
            <h3 class="display-title">{{ nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) }}</h3>
            <span>{{ nextDate10.toLocaleDateString('en-EN', { month: 'long', day: 'numeric' }) }}</span>
            <div class="hours mt-3 w-100">
              <div class="card-primary-ch hour-card" :class="{disabled:nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}">9:00</div>
              <div class="card-primary-ch hour-card" :class="{disabled:nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}">10:00</div>
              <div class="card-primary-ch hour-card" :class="{disabled:nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}">11:00</div>
              <div class="card-primary-ch hour-card" :class="{disabled:nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}">12:00</div>
              <div class="card-primary-ch hour-card" :class="{disabled:nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}">13:00</div>
              <div class="card-primary-ch hour-card" :class="{disabled:nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}">14:00</div>
              <div class="card-primary-ch hour-card" :class="{disabled:nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}">16:00</div>
              <div class="card-primary-ch hour-card" :class="{disabled:nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}">17:00</div>
              <div class="card-primary-ch hour-card" :class="{disabled:nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Saturday' || nextDate10.toLocaleDateString('en-EN', { weekday: 'long'}) == 'Sunday'}">18:00</div>
            </div>
          </swiper-slide>
        </swiper>

    </div>
  </div>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal-component :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Book a session</h3>
      </template>
      <template #body>

        <div>
          <p>Date and hour of the session: <br><span class="text-muted">{{ dateSelect }}</span></p>
          <div class="mb-2">
            <label>Your full name:</label>
            <input class="input" type="text" placeholder="Your name">
          </div>

          <div class="mb-2">
            <label>Your email:</label>
            <input class="input" type="email" placeholder="Your email">
          </div>

          <div class="mb-2">
            <label>Your phone:</label>
            <input class="input" type="tel" placeholder="Your telephone">
          </div>

          <div class="mb-2">
            <label>Type of session:</label>
            <select class="select form-select">
              <option>Individual session</option>
              <option>Couple session</option>
              <option>Family session</option>
              <option>Online session</option>
            </select>
          </div>

          <div class="mb-2">
            <label>Comments:</label>
            <textarea class="textarea" rows="5" placeholder="Your comments"></textarea>
          </div>

        </div>

      </template>
    </modal-component>
  </Teleport>

  <div class="spacer"></div>

</template>

<style scoped>

.modal {
  display: block
}

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .swiper-slide span {
    font-size: 11pt;
  }

  .swiper-slide .hours div {
    font-size: 13pt;
  }
  .swiper-slide .hours .hour-card:not(.disabled) {
    cursor:pointer;
  }
  .swiper-slide .hours .hour-card:not(.disabled):hover {
    background-color: var(--yellow);
  }


</style>

<script>

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper';
  import ModalComponent from '../components/ModalComponent.vue';
  
  export default {
  name: 'schedule-component',
     components: {
      Swiper,
       SwiperSlide,
       ModalComponent
  },
    data() {
      return {
      showModal: false,
      date: new Date(),
      dateSelect: '',
      nextDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
      nextDate2: new Date(Date.now() + (24*2) * 60 * 60 * 1000),
      nextDate3: new Date(Date.now() + (24*3) * 60 * 60 * 1000),
      nextDate4: new Date(Date.now() + (24*4) * 60 * 60 * 1000),
      nextDate5: new Date(Date.now() + (24*5) * 60 * 60 * 1000),
      nextDate6: new Date(Date.now() + (24*6) * 60 * 60 * 1000),
      nextDate7: new Date(Date.now() + (24*7) * 60 * 60 * 1000),
      nextDate8: new Date(Date.now() + (24*8) * 60 * 60 * 1000),
      nextDate9: new Date(Date.now() + (24 * 9) * 60 * 60 * 1000),
      nextDate10: new Date(Date.now() + (24*10) * 60 * 60 * 1000)
    }
  },
    setup() {
      return {
        modules: [Pagination],
      };
    }
  }
</script>