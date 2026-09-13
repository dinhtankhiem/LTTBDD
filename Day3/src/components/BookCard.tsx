import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function BookCard({ book }) {
  return (
    <View style={styles.cardContainer}>
      {/* Tải ảnh từ internet bằng thuộc tính uri[cite: 2] */}
      <Image source={{ uri: book.cover }} style={styles.coverImage} />
      
      <View style={styles.infoColumn}>
        {/* numberOfLines={2} tự động thêm '...' nếu tên sách dài quá 2 dòng[cite: 1, 2] */}
        <Text style={styles.title} numberOfLines={2}>
          {book.title}
        </Text>
        <Text style={styles.author}>{book.author}</Text>
        <Text style={styles.price}>{book.price} đ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row', // Đặt ảnh và cột thông tin nằm ngang
    alignItems: 'flex-start', // Căn các phần tử bắt đầu từ trên xuống
    padding: 16,
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 8,
  },
  coverImage: {
    width: 80, // Kích thước ảnh cố định
    height: 110, // Kích thước ảnh cố định[cite: 1]
    borderRadius: 8, // Bo góc ảnh[cite: 1]
  },
  infoColumn: {
    flex: 1, // Chiếm toàn bộ phần không gian còn lại bên phải ảnh[cite: 1]
    flexDirection: 'column', // Xếp thông tin chữ theo cột dọc[cite: 1]
    justifyContent: 'space-between', // Đẩy tên sách lên đỉnh và giá tiền xuống đáy cột[cite: 1]
    marginLeft: 12,
    height: 110, // Đặt chiều cao bằng ảnh để justifyContent hoạt động chuẩn xác
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  author: { 
    color: 'gray',
    marginTop: 4,
  },
  price: { 
    color: 'red', 
    fontWeight: 'bold',
    fontSize: 16,
  }
});