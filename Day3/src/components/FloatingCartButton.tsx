import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function FloatingCartButton() {
  return (
    // Nút chính được định vị tuyệt đối so với toàn màn hình
    <Pressable style={styles.button}>
      <Text style={styles.icon}>🛒</Text>
      
      {/* Badge số lượng lồng bên trong, định vị tuyệt đối so với nút tròn */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>4</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute', // Thoát khỏi luồng layout bình thường, nổi lên trên cùng
    bottom: 24, // Cách đáy màn hình 24px
    right: 20, // Cách cạnh phải 20px[cite: 1]
    width: 60, // Kích thước bằng nhau[cite: 1]
    height: 60, // Kích thước bằng nhau[cite: 1]
    borderRadius: 30, // Bằng một nửa width/height để tạo hình tròn hoàn hảo[cite: 1]
    backgroundColor: '#4B0082', // Màu indigo đồng bộ
    justifyContent: 'center', // Căn giữa icon giỏ hàng
    alignItems: 'center',
    // Thêm đổ bóng cho nút nổi bật hơn
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6, // Đổ bóng cho Android
  },
  icon: {
    fontSize: 24,
  },
  badge: {
    position: 'absolute', // Định vị lồng nhau (nested containing block)[cite: 1]
    top: -4, // Đẩy trồi lên góc trên của nút tròn
    right: -4, // Đẩy lệch ra góc phải của nút tròn
    backgroundColor: '#ef4444', // Màu đỏ nổi bật
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white', // Viền trắng tách biệt badge khỏi nền
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  }
});