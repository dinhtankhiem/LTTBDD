import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function DiscountBadge({ label }) {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    position: 'absolute', // Thoát khỏi luồng layout để nổi lên trên
    top: 6, // Cách lề trên của khung chứa 6px
    left: 6, // Cách lề trái của khung chứa 6px
    backgroundColor: '#ef4444', // Màu đỏ nổi bật[cite: 1]
    paddingHorizontal: 6, // Padding vừa đủ ôm chữ[cite: 1]
    paddingVertical: 2,
    borderRadius: 4, // Bo góc nhỏ[cite: 1]
    zIndex: 10, // Đảm bảo luôn nằm lớp trên cùng
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  }
});