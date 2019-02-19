import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
import alertify from './../../node_modules/alertify.js/dist/js/alertify.js'
import accounting from 'accounting'

alertify.logPosition("bottom right");

Vue.mixin({
    data(){
        return{
            //GLOBAL VARIABLES
            alertify: alertify,
            axios: axios,
            moment: moment
        }
    },
    methods: {
        getUrlParameterByName(name, url) {
            if (!url) {
              url = window.location.href;
            }
            // name = name.replace(/[\[\]]/g, "\\$&");
            name = name.replace(/[[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        },

        getAgeLabel(birth_date, current_time = moment()) {

            var ageyear = moment(current_time).diff(birth_date, "years",true);
            var agemonth = moment(current_time).diff(birth_date, "years",true);
            var ageday = moment(current_time).diff(birth_date, "days",true);

            if(ageyear >= 1)
                return parseInt(ageyear,0) + " tahun";
            else if(agemonth >= 1)
                return parseInt(agemonth,0) + " bulan";
            else
                return parseInt(ageday,0) + " hari";
        },

        idCurrency(bill) {
            if(bill == null)
                return "";
            return accounting.format(bill,0,'.');
        },

        openWindowWithPost(url, params, name = 'name', windowoption = 'height=500,width=800,top=50,left=50') {
            var token = document.head.querySelector('meta[name="csrf-token"]')
            var form = document.createElement("form")
            form.setAttribute("method", "post")
            form.setAttribute("action", url)
            form.setAttribute("target", name)

            var csrf = document.createElement('input')
            csrf.type = 'hidden'
            csrf.name = '_token'
            csrf.value = token.content;
            form.appendChild(csrf)
         
            for (var i in params) {
                if (params.hasOwnProperty(i)) {
                    var input = document.createElement('input')
                    input.type = 'hidden'
                    input.name = i
                    input.value = (params[i] instanceof Object) ? JSON.stringify(params[i]) : params[i]
                    form.appendChild(input)
                }
            }
                    
            document.body.appendChild(form)
            window.open(url, name, windowoption)
                    
            form.submit();
                    
            document.body.removeChild(form)
        }
    },
})

Vue.prototype.$onAjaxError = function(error) {
    if(error.response && error.response.status == 422 && error.response.data.field){
        alertify.error("Error " + error.response.status + ': ' + error.response.data.text);
        var validation = {};
        validation[error.response.data.field] = true;
        return validation;
    }
    else if(error.response && error.response.status == 422) {
        alertify.error("Error " + error.response.status + ': ' + error.response.data.message);
        return error.response.data.errors;
    }
    else {
        alertify.error("Error " + error.response.status + ': ' + error.response.data);
        return {};
    }
}
