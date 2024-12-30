<script setup>
import { useInvoiceStore } from "@/stores/invoiceStore";

const store = useInvoiceStore();

const fetchInvoices = async () => {
  await store.fetchInvoices();
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
};

const { invoices, loading, error } = storeToRefs(store);
</script>

<template>
  <div>
    <h1>Daftar Invoice</h1>
    <button @click="fetchInvoices">Muat Invoice</button>

    <div v-if="loading">Memuat data...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <ul v-if="invoices.length">
      <li v-for="invoice in invoices" :key="invoice.id">
        <p><strong>Kode:</strong> {{ invoice.code }}</p>
        <p><strong>Status:</strong> {{ invoice.status }}</p>
        <p><strong>Jumlah Bayar:</strong> {{ formatCurrency(invoice.pay_amount) }}</p>
        <p>
          <a :href="invoice.invoice_url" target="_blank">Lihat Invoice</a>
        </p>
      </li>
    </ul>

    <div v-else v-if="!loading && !error">Tidak ada data.</div>
  </div>
</template>

<style>
.error {
  color: red;
}
</style>