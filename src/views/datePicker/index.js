import DataPicker from './components/DatePicker.vue';
import './style.scss';

new Vue({
  el: '#app',
  data() {
    return {
      date: '2017-09-11',
      minDate: '2000-09-11',
      maxDate: '2020-09-11',
      showDatePicker: false,
      selectedDate: '点击选择日期',
    };
  },
  mounted() {
  },
  methods: {
    openDatePicker() {
      this.showDatePicker = true;
    },
    confirm(value) {
      console.log(value);
      this.showDatePicker = false;
      this.selectedDate = value;
    },
    cancel() {
      console.log('cancel');
      this.showDatePicker = false;
    },
  },
  components: {
    DataPicker,
  },
});
