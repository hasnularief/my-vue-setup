<template>
  <date-picker
    v-model="datetime"
    :wrap="true"
    :config="date_config"
  />
</template>
<script>
	import datePicker from 'vue-bootstrap-datetimepicker';

	export default {
		components: {datePicker},

		props: {
			value: {
				type: String,
				default: ''
			},
			alias: {
				type: String, 
				default: 'date'
			},
		},

		data() {
			return {
				model: null,
				view: null,
				date_config: {
					format : 'DD/MM/YYYY',
					useCurrent: false,
					useStrict: true,
					allowInputToggle: true,
					sideBySide: true
				},
				wrap: true
			}
		},
		computed: {
			datetime: {
				get() {
					if(window.moment(this.value, this.model, true).isValid())
						return window.moment(this.value, this.model).format(this.view)
					else if(window.moment(this.value, this.view, true).isValid())
						this.$emit('input', window.moment(this.value, this.view).format(this.model))
				},
				set(val) {
					if(window.moment(val, this.view, true).isValid())
						this.$emit('input', window.moment(val, this.view).format(this.model))
					else
						this.$emit('input', '')
				}
			}
		},

		created() {
			if(this.alias == 'date'){
				this.model = 'YYYY-MM-DD'
				this.view = 'DD/MM/YYYY'
				this.date_config.format = 'DD/MM/YYYY'
			}
			else if(this.alias == 'datetime'){
				this.model = 'YYYY-MM-DD HH:mm:ss'
				this.view = 'DD/MM/YYYY HH:mm' 
				this.date_config.format = 'DD/MM/YYYY HH:mm'
			}
		},
	}
</script>
