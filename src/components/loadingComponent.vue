<script>
export default {
        name: 'loading-component',
        data() {
            return {
            count: 0
            }
        }
    }
</script>

<template>
    <div class="loading-screen">
        <span class="loader"></span>
    </div>
  
</template>

<style>
    .loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 9999;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .loader {
        border: 2px solid;
        border-color: transparent var(--primary);
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation 2s linear infinite;
    }
    .loader::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        border: 24px solid;
        border-color: transparent rgba(255, 255, 255, 0.15);
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
</style>
