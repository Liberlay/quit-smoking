import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

export const Home = ({ navigation }) => {
  const [users, setUsers] = useState([])
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    axios
      .request({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'get',
      })
      .then(({ data }) => setUsers(data))
  }, [])

  useEffect(() => {
    axios
      .request({
        url: `https://jsonplaceholder.typicode.com/photos`,
        method: 'get',
        params: {
          _limit: users.length,
        },
      })
      .then(({ data }) => setPhotos(data))
  }, [users])
  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Users</Text>
        <View style={styles.users}>
          {users.map((user) => (
            <View key={user.id} style={styles.user}>
              <View style={styles.left}>
                <Text>{user.username}</Text>
                <Text>{user.name}</Text>
                <Text>{user.phone}</Text>
                <Text>{user.email}</Text>
                <Text>{user.address.city}</Text>
                <Text>{user.address.street}</Text>
              </View>
              <View style={styles.right}>
                <Image
                  source={{ uri: photos.find((photo) => photo.id === user.id)?.url }}
                  style={styles.image}
                />
              </View>
            </View>
          ))}
        </View>
        <Button title="To page" onPress={() => navigation.navigate('Page')} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    marginVertical: '20px',
  },
  title: {
    fontSize: 26,
  },
  users: {
    display: 'flex',
    marginHorizontal: 'auto',
    width: '100%',
    maxWidth: '500px',
    gap: '30px',
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '20px',
    paddingHorizontal: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
  image: {
    height: '100px',
    width: '100px',
  },
})
