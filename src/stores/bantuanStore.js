// import axios from "axios";
// import {defineStore} from "pinia";
// import {useToast} from "vue-toastification";
// import api from "@/api/axiosIntance.js";
//
// export  const useBantuanStore = defineStore('bantuan', {
//     state: () => ({
//         bantuan: [],
//         error: null,
//     }),
//
//      actions: {
//         async fetchBantuan() {
//             const toast = useToast();
//             let token = localStorage.getItem('accessToken');
//
//             try {
//                 const response = await api.get("/help", {
//                     headers: {
//                         'Authorization': `Bearer ${token}`,
//                         'Content-Type': 'application/json',
//                     },
//                 });
//
//                 if (response.data.success) {
//                     this.helps = response.data.data.helps;
//                 } else {
//                     this.error = response.data.message || 'Gagal mengambil data bantuan';
//                 }
//             } catch (error) {
//                 this.error = error.response?.data?.message || 'Terjadi kesalahan';
//                 console.error('Error fetching helps:', error);
//             }
//         }
//      }
// })