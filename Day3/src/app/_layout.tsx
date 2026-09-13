import { Stack } from 'expo-router';

export default function Layout() {
  return (
    // headerShown: false dùng để ẩn thanh header thừa của template
    <Stack screenOptions={{ headerShown: false }} />
  );
}