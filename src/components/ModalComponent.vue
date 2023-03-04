<script>
export default {
name: 'modal-component',
  props: {
    show: Boolean
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header display-title">
          <slot name="header">Book a session</slot>
          <span class="close-modal" @click="$emit('close')">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </div>

        <div class="modal-body">
          <slot name="body">You can book a session in the choosen day and hour.</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <div class="w-100 text-center">
                <button
                class="btn button-primary"
                @click="$emit('close')"
                ><slot name="btn">Send</slot></button>
            </div>
            
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-header {
  position: relative;
}
.close-modal {
  font-size: 12pt;
  color: lightgrey;
  cursor:pointer;
  position: absolute;
  top: 0;
  right:0;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 500px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: var(--primary);
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
/* RESPONSIVE */
  @media (max-width: 760px){ 

    .modal-container {
        width: 100%;
        margin:10px;
    }

  }

</style>