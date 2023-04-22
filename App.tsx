/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React from 'react';
 import {Text, View, StyleSheet, FlatList} from 'react-native';
 
 import { useQuery, gql } from '@apollo/client';

const GET_STUDY_GROUPS = gql`
 {
  study_group {
    id
    class
    students_in_groups {
      student {
        name
        major
      }
    }
  }
}
`;


const YourApp = () => {
  const { loading, error, data } = useQuery(GET_STUDY_GROUPS);
  console.log(data)
  
   return (
     <View style={styles.general}>
      <FlatList
        data={
          data?.study_group?.at(0)?.students_in_groups?.map(s => 
            s.student.name
          )
        }
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />
     </View>
   );
 };

 const styles = StyleSheet.create({
    general: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 25
    },
    baseText: {
      fontSize: 25, 
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
 })
 

export default YourApp;
