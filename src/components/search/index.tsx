import { Feather } from '@expo/vector-icons';
import { View, TextInput } from 'react-native';

export default function Search() {
 return (
   <View className='w-full flex flex-row bg-slate-50 rounded-xl items-center px-4 gap-2'>
    <Feather name='search' size={24} color="#64748b"/>

    <TextInput
        placeholder='Procure sua comida...'
        className='w-full h-full flex-1'
    />
   </View>
  );
}