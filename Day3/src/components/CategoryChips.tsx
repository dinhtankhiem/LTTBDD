import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Mảng dữ liệu danh mục tĩnh để render nhanh
const CATEGORIES = ['Văn học', 'Kinh tế', 'Thiếu nhi', 'Truyện tranh', 'Ngoại ngữ', 'Lịch sử'];

export function CategoryChips() {
  return (
    <View style={styles.container}>
      {CATEGORIES.map((item, index) => (
        <View key={index} style={styles.chip}>
          <Text style={styles.chipText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Dàn các chip theo chiều ngang
    flexWrap: 'wrap', // Tự động rớt phần tử xuống dòng nếu tràn chiều rộng màn hình
    gap: 8, // Khoảng cách đều giữa các chip cả chiều ngang lẫn dọc[cite: 1]
    padding: 16,
  },
  chip: {
    paddingHorizontal: 16, // Khoảng cách chữ tới viền trái/phải[cite: 1]
    paddingVertical: 8, // Khoảng cách chữ tới viền trên/dưới[cite: 1]
    borderRadius: 20, // Bo tròn góc lớn để tạo hình viên thuốc (pill)[cite: 1]
    borderWidth: 1, // Độ dày viền[cite: 1]
    borderColor: '#4B0082', // Màu viền indigo[cite: 1]
    backgroundColor: '#ffffff',
  },
  chipText: {
    color: '#4B0082',
  }
});