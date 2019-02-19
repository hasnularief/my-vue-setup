<script>
  import $ from 'jquery'
  export default {
    props: {
      width:{
        default: '',
        type: String
      }, 
      loading:{
        default: false,
        type: Boolean
      },
      bodyStyle:{
        default: '',
        type: String
      },
      height:{
        default: '',
        type: String
      },
      disabledButton:{
        default: false,
        type: Boolean
      }
    },
    data () {
      return {

      }
    },

    created () {        

    },
    mounted(){
      $('.select-multi').selectize()
    }
  }
</script>
<template>
  <div>
    <div role="dialog" class="modal fade show d-block">
      <div class="modal-dialog modal-md">
        <div tabindex="-1" role="document" class="modal-content">
          <header class="modal-header">
            <h5 class="modal-title">
              <slot name="header">
                Konfirmasi Hapus
              </slot>
            </h5>
            <button type="button" aria-label="Close" class="close" @click="$emit('close')">
              ×
            </button>
          </header>
          <div class="modal-body" style="padding-left: 15px; padding-right: 15px;">
            <slot name="body">
              Apa anda yakin akan menghapus rekord?
            </slot>
          </div>
          <footer class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-sm btn-danger" @click="$emit('close')">
                Cancel
              </button>
              <button type="button" class="btn btn-sm btn-primary" @click="$emit('submit')">
                OK
              </button>
            </slot>
          </footer>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" />
  </div>
</template>
