import React from 'react';
import { SafeAreaView } from 'react-native';
import { Header } from './src/components/Header'; // Điều chỉnh đường dẫn nếu cần

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F8FAFC' }}>
      <Header />
    </SafeAreaView>
  );
}