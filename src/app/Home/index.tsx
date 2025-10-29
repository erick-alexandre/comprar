import { Image, View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { style } from './style';
import { FilterStatus } from '@/types/FilterStatus';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { Item } from '@/components/Item/Index';
import { PropItemStorage, itemsStorage } from '@/storage/itemsStorage';


const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export default function Home() {
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.PENDING)
  const [description, setDescription] = useState('')
  const [items, setItems] = useState<PropItemStorage[]>([])

  async function handleAdd() {
    if (!description.trim()) {
      return Alert.alert('Adicionar', 'Informe uma descrição para adicionar!')
    }

    const newItem = {
      id: Math.random().toString(36).substring(2),
      description,
      status: FilterStatus.PENDING
    }

    await itemsStorage.add(newItem)
    await itemsByStatus()

    setFilter(FilterStatus.PENDING)
    Alert.alert('Adicionar', `"${description}", foi adicionado com sucesso!`)
    setDescription('')
  }

  async function itemsByStatus() {
    try {
      const response = await itemsStorage.getByStatus(filter)
      setItems(response)
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível filtrar os itens!')
    }
  }

  async function handleRemove(id:string) {
    try {
      await itemsStorage.remove(id)
      await itemsByStatus()
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível remover o item!')
    }
  }

  function handleClear() {
    Alert.alert("Limpar", "Deseja limpar todos os itens?", [
      {text: 'Nao', style: 'cancel'},
      {text: 'Sim', onPress: () => onClear()}
    ])
  }

  async function onClear(){
    try{
      await itemsStorage.clear()
      setItems([])
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível limpar os itens!')
    }
  }

  async function handleToggleItemStatus(id:string) {
    try {
      await itemsStorage.toggleStatus(id)
      await itemsByStatus()
    } catch (error) {
      console.log(error)
      Alert.alert('Erro', 'Não foi possível alterar o status do item!')
    }
  }

  useEffect(() => {
    itemsByStatus()
  }, [filter])

  return (
    <View style={style.container}>
      <Image source={require('@/assets/logo.png')} style={style.logo} />

      <View style={style.form}>
        <Input placeholder='O que você precisa comprar?' onChangeText={setDescription} value={description} />
        <Button title='Adicionar' activeOpacity={0.7} onPress={handleAdd} />
      </View>

      <View style={style.content}>
        <View style={style.header}>
          {
            FILTER_STATUS.map((status) => (
              <Filter
                key={status}
                status={status}
                isActive={filter === status}
                onPress={() => setFilter(status)} />
            ))
          }

          <TouchableOpacity style={style.clearButton} onPress={handleClear}>
            <Text style={style.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={style.separator} />}
          contentContainerStyle={style.listContent}
          ListEmptyComponent={() => <Text style={style.empty}>Nenhum item cadastrado!</Text>}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => handleRemove(item.id)}
              onStatus={() => handleToggleItemStatus(item.id)} />
          )} />
      </View>
    </View>
  );
}
