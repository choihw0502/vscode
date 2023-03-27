import Alert from '@/components/default/Alert.vue'
import Filter from '@/components/default/Filter.vue'
import Grid from '@/components/default/Grid.vue'
import GroupAlert from '@/components/default/GroupAlert.vue'
import InputForm from '@/components/default/InputForm.vue'
import ItemCard from '@/components/default/ItemCard.vue'
import Modal from '@/components/default/Modal.vue'
import ModalCompo from '@/components/default/ModalCompo.vue'
import Pagination from '@/components/default/Pagination.vue'
import Error from '@/components/default/Error.vue'
import Loading from '@/components/default/Loading.vue'

export default {
  install(vue) {
    vue.component('Alert', Alert)
    vue.component('Filter', Filter)
    vue.component('Grid', Grid)
    vue.component('GroupAlert', GroupAlert)
    vue.component('InputForm', InputForm)
    vue.component('ItemCard', ItemCard)
    vue.component('Modal', Modal)
    vue.component('ModalCompo', ModalCompo)
    vue.component('Pagination', Pagination)
    vue.component('Error', Error)
    vue.component('Loading', Loading)
  }
}
