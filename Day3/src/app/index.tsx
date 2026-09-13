import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../components/Header'; 
import { CategoryChips } from '../components/CategoryChips';
import { BookGrid } from '../components/BookGrid';
import { FloatingCartButton } from '../components/FloatingCartButton'; // Import nút giỏ hàng

const BOOKS = [
  { id: '1', title: 'Harry Potter 1', price: '115.000 đ', cover: 'https://covers.openlibrary.org/b/id/7984916-L.jpg' },
  { id: '2', title: 'Hoàng Tử Bé', price: '75.000 đ', cover: 'https://covers.openlibrary.org/b/id/8259431-L.jpg' },
  { id: '3', title: 'Đắc Nhân Tâm', price: '85.000 đ', cover: 'https://covers.openlibrary.org/b/id/12863920-L.jpg' },
  { id: '4', title: 'Nhà Giả Kim', price: '79.000 đ', cover: 'https://covers.openlibrary.org/b/id/14493397-L.jpg' },
  { id: '5', title: 'Dế Mèn', price: '55.000 đ', cover: 'https://covers.openlibrary.org/b/id/12863920-L.jpg' }, // Thêm sách để dễ test cuộn
];

export default function App() {
  return (
    // Container ngoài cùng cần có position: relative (mặc định) và flex: 1[cite: 1]
    <SafeAreaView style={styles.screen}>
      <Header />
      
      {/* ScrollView chứa nội dung có thể cuộn */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <CategoryChips />
        <BookGrid books={BOOKS} />
      </ScrollView>

      {/* ĐẶT NÚT Ở ĐÂY: Nằm độc lập bên ngoài ScrollView[cite: 1] */}
      <FloatingCartButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: '#F8FAFC' 
  },
  scrollContent: {
    paddingBottom: 100, // Đệm đáy một khoảng lớn để nút giỏ hàng không che mất sách cuối cùng[cite: 1]
  }
});