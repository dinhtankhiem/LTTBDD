import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Header() {
  return (
    <View style={styles.container}>
      {/* Tên app/logo nằm bên trái */}
      <Text style={styles.logo}>BookStore</Text>
      
      {/* 
        Gợi ý: Hai icon bên phải đặt trong một View con dùng flexDirection: 'row' 
        với khoảng cách (gap)[cite: 1] 
      */}
      <View style={styles.rightIcons}>
        <Text style={styles.icon}>🔍</Text>
        <Text style={styles.icon}>🛒</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Container header bắt buộc dùng các thuộc tính Flexbox sau[cite: 1]:
    flexDirection: 'row',
    justifyContent: 'space-between', // Đẩy logo sang trái và cụm icon sang phải[cite: 1]
    alignItems: 'center', // Căn giữa theo chiều dọc[cite: 1]
    paddingHorizontal: 16, // Padding ngang 16[cite: 1]
    height: 56, // Chiều cao cố định 56[cite: 1]
    backgroundColor: '#4f46e5', // Màu nền indigo (xanh tím) theo yêu cầu[cite: 1]
  },
  logo: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row', // Sắp xếp 2 icon nằm ngang[cite: 1]
    gap: 16, // Tạo khoảng cách giữa 2 icon[cite: 1]
  },
  icon: {
    fontSize: 20, // Chỉnh kích thước icon cho cân đối
  }
});