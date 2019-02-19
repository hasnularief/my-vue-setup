import Vue from 'vue'
import moment from 'moment'
import accounting from 'accounting'

Vue.filter('currency', function(val) {
	return accounting.formatNumber(val)
});

Vue.filter('idDate',  function (val) {
	if(!val) return "";
    return moment(val, 'YYYY-MM-DD').format('DD/MM/YYYY')
});

Vue.filter('idBirth',  function (val) {
	if(!val) return "";
    return moment(val, 'YYYY-MM-DD').format('DD MMM YYYY')
});

Vue.filter('idDatetime',  function (val) {
	if(!val) return "";
    return moment(val, 'YYYY-MM-DD HH:mm:ss').format('DD/MM/YYYY HH:mm')
});

Vue.filter('idCurrency', function(val){
	if(val == null)
        return "";
    return accounting.format(val,0,'.')
});

Vue.filter('length', function(val, param) {
	return val ? val.substring(0,param) : val
});
