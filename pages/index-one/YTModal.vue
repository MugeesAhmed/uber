<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <button class="close-button" @click="close">x</button>
                    <youtube :video-id="videoId" ref="youtube" :player-vars="playerVars" @playing="playing"></youtube>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'YTModal',
        props: {
            url: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                playerVars: {
                    autoplay: 1
                }
            }
        },
        methods: {
            playVideo() {
                this.player.playVideo()
            },
            playing() {
            },
            close() {
                this.player.destroy();
                this.$emit('close');
            }
        },
        computed: {
            player() {
                return this.$refs.youtube.player
            },
            videoId: function () {
                return this.$youtube.getIdFromUrl(this.url);
            }
        },
        mounted() {

        }

    }
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        background-color: transparent;
        width: 640px;
        height: 360px;
        margin: 0px auto;
        /*padding: 20px 30px;*/
        /*background-color: #fff;*/
        border-radius: 2px;
        /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);*/
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .close-button {
        float: right;
        background-color: Transparent;
        background-repeat:no-repeat;
        border: none;
        cursor:pointer;
        overflow: hidden;
        outline:none;
        font-weight: 600;
        color: white;
    }

</style>