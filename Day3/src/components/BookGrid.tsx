import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DiscountBadge } from './DiscountBadge'; // Import Badge vừa tạo

export function BookGrid({ books }) {
  return (
    <View style={styles.gridContainer}>
      {books.map((book) => (
        <View key={book.id} style={styles.gridItem}>
          
          {/* Tạo một View bọc ngoài ảnh và badge để làm mốc định vị */}
          <View style={styles.imageContainer}>
            <Image source={{ uri: book.cover }} style={styles.coverImage} />
            <DiscountBadge label="-20%" />
          </View>
          
          <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
          <Text style={styles.price}>{book.price}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  // Giữ nguyên gridContainer và gridItem của bài trước...
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 16 },
  gridItem: { width: '48%', marginBottom: 20 },
  
  // Thiết lập hệ tọa độ cho ảnh và badge
  imageContainer: {
    position: 'relative', // BẮT BUỘC: Làm containing block để badge bám vào[cite: 1]
    width: '100%',
    aspectRatio: 3/4,
    marginBottom: 8,
  },
  coverImage: {
    width: '100%', 
    height: '100%', // Trải đầy khung imageContainer
    borderRadius: 8,
  },
  title: { fontWeight: 'bold', fontSize: 14 },
  price: { color: 'red', fontWeight: 'bold', marginTop: 4 }
});